"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calculator, Trees, Recycle, Package } from "lucide-react"

export function TileCalculator() {
  const [area, setArea] = React.useState<number>(10)

  // Assumptions for calculation
  const TILES_PER_SQM = 12
  const KG_PER_TILE = 1
  const BOTTLES_PER_KG = 50

  const numTiles = Math.ceil(area * TILES_PER_SQM)
  const kgPlastic = numTiles * KG_PER_TILE
  const numBottles = kgPlastic * BOTTLES_PER_KG

  return (
    <section className="py-16 bg-brand-primary/5 dark:bg-brand-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-bg-surface rounded-3xl shadow-xl overflow-hidden border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Calculator Input */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-accent rounded-xl text-brand-primary">
                  <Calculator className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Project Calculator</h2>
              </div>
              
              <p className="text-text-secondary mb-8">
                Estimate your project needs and see your direct environmental impact by choosing TakaTiles.
              </p>

              <div className="mb-8">
                <div className="flex justify-between mb-4">
                  <label className="font-semibold text-text-primary">Project Area (m²)</label>
                  <span className="font-bold text-brand-primary">{area} m²</span>
                </div>
                <Slider 
                  value={[area]} 
                  onValueChange={(vals) => setArea(Array.isArray(vals) ? vals[0] : (vals as any)[0] || vals)}
                  max={500} 
                  step={1} 
                  className="mb-4"
                />
                <div className="flex items-center gap-4">
                  <Input 
                    type="number" 
                    value={area} 
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-24 border-brand-primary/20 focus-visible:ring-brand-primary"
                  />
                  <span className="text-sm text-text-secondary">Square meters</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-brand-primary text-white hover:bg-brand-primary/90"
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Request Custom Quote
              </Button>
            </div>

            {/* Impact Results */}
            <div className="bg-brand-primary text-white p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-8 text-brand-accent">Your Environmental Impact</h3>
              
              <div className="space-y-6">
                <motion.div 
                  key={`tiles-${numTiles}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm"
                >
                  <Package className="w-8 h-8 text-brand-accent" />
                  <div>
                    <div className="text-3xl font-bold">{numTiles.toLocaleString()}</div>
                    <div className="text-brand-accent/80 text-sm">TakaTiles Required</div>
                  </div>
                </motion.div>

                <motion.div 
                  key={`kg-${kgPlastic}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm"
                >
                  <Trees className="w-8 h-8 text-brand-accent" />
                  <div>
                    <div className="text-3xl font-bold">{kgPlastic.toLocaleString()} kg</div>
                    <div className="text-brand-accent/80 text-sm">Plastic Diverted from Landfills</div>
                  </div>
                </motion.div>

                <motion.div 
                  key={`bottles-${numBottles}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm"
                >
                  <Recycle className="w-8 h-8 text-brand-accent" />
                  <div>
                    <div className="text-3xl font-bold">{numBottles.toLocaleString()}</div>
                    <div className="text-brand-accent/80 text-sm">PET Bottles Recycled</div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
