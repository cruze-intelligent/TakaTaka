"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

const PRODUCTS = [
  {
    id: "takatiles-1",
    name: "TakaTile",
    category: "TakaTiles (Construction)",
    image: "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/1630345061492-YTUH99YMJGGKFUT2UJJQ/5.jpg",
    description: "Our wall tiles are made from waste soda and water bottles. They have passed several tests including flammability testing.",
    badges: ["Construction", "Recycled PET", "Flammability Tested"],
  },
  {
    id: "faceshield-1",
    name: "Face Shields",
    category: "PPE (Health)",
    image: "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/1619440706132-J5H7M4ZE9D6MUPV8GHDL/face+shield.jpg",
    description: "Our face shields offer everyday protection, & the frame is made from 100% recycled plastic. Resistant to fogging, clear for maximum visibility.",
    badges: ["PPE", "Safety", "Comfort"],
  },
  {
    id: "decor-1",
    name: "Coasters",
    category: "Eco-Decor (Home)",
    image: "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/1619437577192-QD1NQ6LG9I4B7446HSWJ/DSC_6954.jpg",
    description: "Our coasters are made from 100% hard to recycle plastic waste; from items like plastic soda and water bottles. Protect your furniture and wow your guests.",
    badges: ["Home", "Decor", "Eco-friendly"],
  },
  {
    id: "decor-2",
    name: "Key Holders",
    category: "Eco-Decor (Home)",
    image: "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/71f57718-0d88-427e-8e23-8a7924d68a2e/Keyholders.png",
    description: "Stunning decor piece and everyday accessories that help divert plastic from landfills.",
    badges: ["Home", "Accessories"],
  },
  {
    id: "decor-3",
    name: "Flower Vases",
    category: "Eco-Decor (Home)",
    image: "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/3814353f-1311-443c-af96-e904f0a588de/taka+flower+pots.png",
    description: "Beautifully designed flower vases made entirely from recycled plastic.",
    badges: ["Decor", "Eco-friendly"],
  },
  {
    id: "takaslate-1",
    name: "TakaSlate (Learning Aid)",
    category: "TakaSlate (Education)",
    image: "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/1625306220972-0R8SM8RPVTL69DWCPRRA/IMG_20210623_143152.jpg",
    description: "A durable learning aid for primary students, resistant to drops and wear.",
    badges: ["Education", "PET Recycling"],
  },
  {
    id: "decor-4",
    name: "Phone Stand",
    category: "Eco-Decor (Home)",
    image: "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/1619438179669-YL5W6CNHFH5KLTO06L9W/IMG_1236_1.JPG",
    description: "Sturdy and practical phone stands made from upcycled materials.",
    badges: ["Home", "Accessories"],
  },
]

const CATEGORIES = ["All", "TakaTiles (Construction)", "PPE (Health)", "TakaSlate (Education)", "Eco-Decor (Home)"]

export function ProductShowroom() {
  const [activeTab, setActiveTab] = React.useState("All")
  const carouselRef = React.useRef<HTMLDivElement>(null)

  const filteredProducts = activeTab === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" })
    }
  }

  return (
    <section id="products" className="py-16 bg-bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-primary">Our Products</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore our range of innovative products made from 100% recycled PET plastic. 
            Durable, affordable, and impactful.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="bg-bg-primary/80 border">
              {CATEGORIES.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="data-[state=active]:bg-brand-primary data-[state=active]:text-white rounded-md px-6"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative group">
            <button 
              onClick={scrollLeft}
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-border text-brand-primary p-3 rounded-full opacity-90 transition-all focus:outline-none hover:bg-brand-primary hover:text-white hover:opacity-100 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              aria-label="Previous Products"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-border text-brand-primary p-3 rounded-full opacity-90 transition-all focus:outline-none hover:bg-brand-primary hover:text-white hover:opacity-100 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              aria-label="Next Products"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div 
              layout 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="min-w-[300px] md:min-w-[350px] snap-center shrink-0"
                  >
                    <Card className="overflow-hidden group/card border-border hover:shadow-lg hover:border-brand-primary/50 transition-all bg-bg-primary h-full flex flex-col">
                      <Dialog>
                        <DialogTrigger 
                          render={
                            <button className="relative block w-full text-left h-64 overflow-hidden cursor-pointer bg-muted focus:outline-none focus:ring-2 focus:ring-brand-primary shrink-0">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="inline-flex items-center justify-center rounded-full bg-white/90 text-brand-primary px-4 py-2 text-sm font-medium hover:bg-white shadow-sm">
                                  <Search className="w-4 h-4 mr-2" /> View Details
                                </span>
                              </div>
                            </button>
                          }
                        />
                        <DialogContent className="sm:max-w-[700px] p-1 overflow-hidden bg-bg-surface border-border">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-auto max-h-[80vh] object-contain bg-muted"
                          />
                        </DialogContent>
                      </Dialog>
                      
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.badges.map(badge => (
                            <Badge key={badge} variant="secondary" className="bg-brand-accent/50 text-brand-primary border-none">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-text-primary">{product.name}</h3>
                        <p className="text-text-secondary text-sm line-clamp-3 mb-4 flex-1">
                          {product.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
