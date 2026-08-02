import * as React from "react"
import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-[#0a0f0d] text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-bold text-2xl text-brand-primary">TakaTaka</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Transforming waste, empowering communities. We are building a circular economy in Gulu, Uganda, while creating healing workplaces for at-risk youth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/TakatakaPlastic" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/takataka_plastics/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/takataka-plastics/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#products" className="hover:text-brand-primary transition-colors">Our Products</Link></li>
              <li><Link href="#impact" className="hover:text-brand-primary transition-colors">Our Impact</Link></li>
              <li><Link href="#about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#products" className="hover:text-brand-primary transition-colors">TakaTiles</Link></li>
              <li><Link href="#products" className="hover:text-brand-primary transition-colors">TakaSlate</Link></li>
              <li><Link href="#products" className="hover:text-brand-primary transition-colors">Flower Vases</Link></li>
              <li><Link href="#products" className="hover:text-brand-primary transition-colors">Coasters & Keyholders</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Subscribe</h4>
            <p className="text-sm mb-4">Subscribe to receive updates on our impact and new products.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 w-full text-sm focus:outline-none focus:border-brand-primary text-white"
                required
              />
              <button 
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Takataka Plastics. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
