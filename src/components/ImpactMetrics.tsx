"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Recycle, CloudOff, Briefcase, GraduationCap } from "lucide-react"

// A simple animated counter component
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [count, setCount] = React.useState(0)
  const nodeRef = React.useRef(null)
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" })

  React.useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const totalSteps = Math.ceil(duration * 60)
      const stepValue = end / totalSteps
      
      const timer = setInterval(() => {
        start += stepValue
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  // format with 1 decimal if it's a float
  const displayValue = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count)

  return (
    <span ref={nodeRef}>
      {displayValue}{suffix}
    </span>
  )
}

export function ImpactMetrics() {
  const metrics = [
    {
      id: 1,
      value: 87.7,
      suffix: "+",
      label: "Tonnes Plastic Recycled",
      icon: Recycle,
    },
    {
      id: 2,
      value: 195,
      suffix: "+",
      label: "Tonnes CO2 Prevented",
      icon: CloudOff,
    },
    {
      id: 3,
      value: 48,
      suffix: "+",
      label: "Full-Time Jobs Created",
      icon: Briefcase,
    },
    {
      id: 4,
      value: 2270,
      suffix: "+",
      label: "Students Trained",
      icon: GraduationCap,
      description: "2,200+ Primary & 70+ University"
    }
  ]

  return (
    <section id="impact" className="py-16 bg-brand-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact By Numbers since 2020</h2>
          <p className="text-brand-accent max-w-2xl mx-auto">
            Our commitment to building a circular economy and empowering the community of Gulu, Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-brand-accent text-brand-primary flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <h3 className="text-lg font-medium text-center">
                  {metric.label}
                </h3>
                {metric.description && (
                  <p className="text-sm text-brand-accent mt-2 text-center">
                    {metric.description}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
