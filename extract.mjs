import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import https from 'https';
import http from 'http';

const URL = 'https://www.takatakaplastics.com';

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                   .on('error', reject)
                   .once('close', () => resolve(filepath));
            } else {
                res.resume();
                resolve(null);
            }
        });
    });
}

async function run() {
    console.log('Fetching Takataka Plastics website...');
    const response = await fetch(URL);
    const html = await response.text();
    const $ = cheerio.load(html);

    const copy = {
        headlines: [],
        paragraphs: [],
        metrics: []
    };

    $('h1, h2, h3').each((i, el) => {
        const text = $(el).text().trim();
        if (text) copy.headlines.push(text);
    });

    $('p').each((i, el) => {
        const text = $(el).text().trim();
        if (text) copy.paragraphs.push(text);
    });

    fs.mkdirSync('public/extracted-content', { recursive: true });
    fs.writeFileSync('public/extracted-content/takataka_copy.json', JSON.stringify(copy, null, 2));
    console.log('Saved copy to public/extracted-content/takataka_copy.json');

    // Make dirs
    fs.mkdirSync('public/assets/brand', { recursive: true });
    fs.mkdirSync('public/assets/products', { recursive: true });
    fs.mkdirSync('public/assets/team', { recursive: true });

    const images = [];
    $('img').each((i, el) => {
        let src = $(el).attr('data-src') || $(el).attr('src');
        if (src) {
            if (src.startsWith('//')) src = 'https:' + src;
            else if (src.startsWith('/')) src = URL + src;
            
            // For squarespace, data-src doesn't have formatting params, append format=1500w or similar if needed.
            images.push({
                src: src,
                alt: $(el).attr('alt') || ''
            });
        }
    });

    console.log(`Found ${images.length} images. Filtering and downloading...`);
    
    let prodCount = 1;
    let brandCount = 1;
    let teamCount = 1;

    for (const img of images) {
        const altLower = img.alt.toLowerCase();
        let folder = null;
        let prefix = null;
        
        if (altLower.includes('logo') || img.src.toLowerCase().includes('logo')) {
            folder = 'public/assets/brand';
            prefix = 'logo';
        } else if (altLower.includes('takatiles') || altLower.includes('takaslate') || altLower.includes('coaster') || altLower.includes('vase') || altLower.includes('product')) {
            folder = 'public/assets/products';
            prefix = 'product';
        } else if (altLower.includes('peter') || altLower.includes('paige') || altLower.includes('team') || altLower.includes('founder')) {
            folder = 'public/assets/team';
            prefix = 'team';
        } else {
            // Put other images in products or just general
            folder = 'public/assets/products';
            prefix = 'general';
        }

        const count = folder.includes('brand') ? brandCount++ : folder.includes('team') ? teamCount++ : prodCount++;
        
        // Remove query strings for extension
        const urlWithoutQuery = img.src.split('?')[0];
        let ext = path.extname(urlWithoutQuery);
        if (!ext || ext.length > 5) ext = '.jpg';
        
        const filename = `${prefix}_${count}${ext}`;
        const filepath = path.join(folder, filename);
        
        // Let's add ?format=1500w for Squarespace images if it's from images.squarespace-cdn.com
        let fetchUrl = img.src;
        if (fetchUrl.includes('squarespace-cdn.com') && !fetchUrl.includes('format=')) {
            fetchUrl += '?format=1500w';
        }

        await downloadImage(fetchUrl, filepath);
        console.log(`Downloaded ${fetchUrl} to ${filepath}`);
    }

    console.log('Extraction complete.');
}

run().catch(console.error);
