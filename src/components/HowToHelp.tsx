"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Factory, Users, TrendingUp, ArrowRight } from "lucide-react"

export function HowToHelp() {
  const steps = [
    {
      title: "Build Bigger Machines",
      description: "Build bigger machines to process half of Gulu's plastic waste (approx. 9 tonnes/month).",
      icon: Factory,
    },
    {
      title: "Hire Ugandan Staff",
      description: "Hire 50 Ugandan staff (many of them vulnerable youth who live and work on the streets).",
      icon: Users,
    },
    {
      title: "Prove Self-Sustainability",
      description: "Prove that our Gulu operation can be financially self-sustainable and continue developing new products.",
      icon: TrendingUp,
    }
  ]

  return (
    <section id="how-to-help" className="py-20 bg-bg-surface relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Our Next Step:<br/><span className="text-brand-primary">Prove the Gulu Pilot</span></h2>
            <p className="text-text-secondary text-lg mb-6">
              In Uganda, discarded plastic soda and water bottles are burned and littered across streets and fields because the polyethylene terephthalate (PET) bottles have a very low recycling value. No industries in Uganda can use recycled PET flakes since its chemical properties make PET very difficult to process.
            </p>
            <p className="text-text-secondary text-lg mb-8">
              Takataka solves this problem with our locally fabricated, modern technology that transforms plastic waste into saleable products. We focus on the construction sector because Uganda faces an 8 million unit housing shortage. After proving feasibility with the Gulu operation, we will expand to set up operations in five towns across Uganda.
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-primary rounded-full hover:bg-brand-primary/90 transition-all hover:scale-105 shadow-lg shadow-brand-primary/20"
            >
              Support Our Mission
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-bg-primary p-6 rounded-2xl border border-border shadow-sm flex items-start gap-6 hover:shadow-md hover:border-brand-primary/30 transition-all group"
                  >
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-brand-primary mb-1">STEP {index + 1}</div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                      <p className="text-text-secondary">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
