"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary pt-16 pb-20 lg:pt-24 lg:pb-24">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-accent/30 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Live Metric Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-bg-surface border border-brand-primary/20 shadow-sm mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-sm font-medium text-text-primary">
            87.7+ Tonnes Plastic Recycled in Northern Uganda
          </span>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary mb-6 max-w-4xl"
        >
          Transforming Waste,<br/>
          <span className="text-brand-primary">Empowering Communities</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10"
        >
          We are innovating solutions to waste challenges that build a circular economy while creating jobs and a healing workplace for at-risk populations.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button 
            size="lg" 
            className="bg-brand-primary text-white hover:bg-brand-primary/90 rounded-full px-8 text-base h-12"
            onClick={() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-brand-primary text-brand-primary hover:bg-brand-accent rounded-full px-8 text-base h-12"
            onClick={() => {
              document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Our Impact
            <Recycle className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
