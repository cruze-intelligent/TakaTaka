"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Heart, Activity, Factory } from "lucide-react"

export function AboutMission() {
  const [openCard, setOpenCard] = React.useState<number | null>(null)
  const [hoverCard, setHoverCard] = React.useState<number | null>(null)

  // Refs to detect clicks inside the tile or card
  const founderRefs = React.useRef<(HTMLDivElement | null)[]>([])
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([])

  React.useEffect(() => {
    if (openCard === null) return

    function handlePointerDown(e: PointerEvent) {
      const target = e.target as Node
      const founderEl = founderRefs.current[openCard]
      const cardEl = cardRefs.current[openCard]

      if (founderEl && founderEl.contains(target)) return
      if (cardEl && cardEl.contains(target)) return

      // clicked outside the open card and its founder tile -> close
      setOpenCard(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [openCard])

  const timeline = [
    {
      title: "Waste Collection in Gulu",
      description: "Tackling the accumulation of plastic waste in our environment due to limited recycling infrastructure.",
      icon: Activity,
    },
    {
      title: "Youth Employment & Healing",
      description: "Creating income opportunities for the marginalized and opportunities for healing for trauma survivors.",
      icon: Heart,
    },
    {
      title: "Machinery Manufacturing",
      description: "Developing ground-breaking technology and designing machines to safely process plastic locally.",
      icon: Factory,
    }
  ]

  const partners = [
    "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/1567906939943-VHSM5X41M2RONP1HO8E5/uc-berkeley-logo-seal.jpg",
    "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/bb03f1e7-cdfb-460f-891b-1f59a56e08e6/EGlogo-brightgreen.png",
    "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/7c0cb873-e4ce-47b4-bd35-994409a6a186/CEEDUganda.png",
    "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/c7ce5f4b-d754-4a58-ba39-d48b3b33a9b0/Ministry.jpg",
    "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/a34de5fc-3ac7-4cd0-a558-c348b27d2423/NATURES.png",
    "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/93d1b0ef-430d-41a5-bf33-e71e3feb9b22/NWSC.jpg",
    "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/982be887-8c29-46c1-920b-0afe93c9f1c9/stanford.png",
    "https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/36cc46a4-cea8-415f-8be1-ec017743def0/RuddSquareLogo_Blue.png"
  ]

  return (
    <section id="about" className="py-16 bg-bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Our Mission & Vision</h2>
          <p className="text-text-secondary text-lg mb-4">
            We are innovating solutions to waste challenges that build a circular economy while creating jobs and a healing workplace for at-risk populations.
          </p>
          <p className="text-text-secondary text-lg mb-8">
            A world where waste is transformed into a resource and communities are empowered.
          </p>
          
          <div className="bg-brand-primary/10 p-6 rounded-2xl border border-brand-primary/20 text-left mb-8">
            <h3 className="text-xl font-bold text-brand-primary mb-2">How it all started</h3>
            <p className="text-text-primary">
              When Paige started grad school at UC Berkeley in Fall 2017, she wanted to work on problems that were affecting her Ugandan friends, so she started researching plastic waste. She work[...]
            </p>
          </div>

          <div className="bg-brand-primary/5 p-6 rounded-2xl border border-brand-primary/10 text-left">
            <h3 className="text-xl font-bold text-brand-primary mb-2">What does "Takataka" mean?</h3>
            <p className="text-text-primary italic">
              "A Swahili word that generally means 'waste,' 'garbage,' 'rubbish,' or 'trash.' It can also refer to 'dirt' or 'soil'. The term is used to describe discarded or unwanted materials."
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative mb-24 mt-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden md:block"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              return (
                <div key={item.title} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-bg-primary bg-brand-primary hidden md:flex items-center justify-center text-w[...]
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-5/12 bg-bg-surface p-6 rounded-2xl shadow-sm border border-border hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] hover:border-brand-primary/40 transition-[...]
                  >
                    <div className="md:hidden flex items-center gap-3 mb-4 text-brand-primary">
                      <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Founders */}
        <div className="max-w-4xl mx-auto bg-brand-primary/5 rounded-3xl p-8 md:p-12 border border-brand-primary/10 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Meet The Founders</h2>
            <p className="text-text-secondary">
              Innovators dedicated to social impact and sustainable engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[{
              name: 'Peter Okwoko',
              title: 'Founder',
              img: 'https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/b6da9f3e-0f61-458e-8b3e-75b4e3fee32b/Peter+Okwoko.JPG',
              text: `Peter is a former lecturer of IT at Gulu University. He holds an MSc from Aalborg University, Denmark. Passionate about creating opportunities for disadvantaged people, he is[...]
            }, {
              name: 'Paige Balcom',
              title: 'Co-Founder',
              img: 'https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/1620066601423-OPAOJE30C01H2PBLZCLI/DSC02482.JPG',
              text: `Paige holds a PhD in Mechanical Engineering from UC Berkeley. Originally from the US, Paige has been working in Northern Uganda since 2016. She pitched on Shark Tank and has [...]
            }].map((founder, idx) => {
              const isVisible = openCard === idx || hoverCard === idx
              return (
                <div
                  key={founder.name}
                  ref={(el) => (founderRefs.current[idx] = el)}
                  className="flex flex-col items-center text-center group relative"
                  onMouseEnter={() => setHoverCard(idx)}
                  onMouseLeave={() => setHoverCard((current) => (current === idx ? null : current))}
                  onFocus={() => setHoverCard(idx)}
                  onBlur={(e) => {
                    // keep hoverCard if focus moves inside the card
                    const related = (e as React.FocusEvent).relatedTarget as Node | null
                    const cardEl = cardRefs.current[idx]
                    if (related && cardEl && cardEl.contains(related)) return
                    setHoverCard((current) => (current === idx ? null : current))
                  }}
                  tabIndex={0}
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-al[...]
                    {/* Only clicking the photo toggles the persistent (sticky) card */}
                    <img
                      src={founder.img}
                      alt={founder.name}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={(e) => {
                        // prevent the outside document handler from immediately closing when toggling
                        e.stopPropagation()
                        setOpenCard((current) => (current === idx ? null : idx))
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.stopPropagation()
                          setOpenCard((current) => (current === idx ? null : idx))
                        }
                      }}
                      tabIndex={0}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-2">{founder.name}</h3>
                  <p className="text-brand-primary font-medium mb-4">{founder.title}</p>

                  {/* Hover / Tap / Sticky Card */}
                  <div
                    ref={(el) => (cardRefs.current[idx] = el)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-bg-surface p-6 rounded-2xl shadow-2xl border border-border z-50 transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                    } w-[90vw] max-w-[28rem] md:w-72 md:max-w-96`}
                    style={{
                      // ensure card never goes off-screen horizontally on very small viewports
                      // we center it by default, but allow the browser to reposition if needed
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-bg-surface border-t border-l border-border rotate-45"></div>
                    <p className="text-sm text-text-secondary text-left relative z-10">
                      {founder.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-16 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-10">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {partners.map((partner, idx) => (
              <div key={idx} className="w-24 md:w-32 h-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <img src={partner} alt="Partner Logo" className="max-w-full max-h-24 object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
