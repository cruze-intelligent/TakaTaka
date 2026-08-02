"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Heart, HandHeart, Users, Factory, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 bg-bg-surface pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
                <Heart className="w-10 h-10 fill-brand-primary/20" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">Support Our Mission</h1>
              <p className="text-xl text-text-secondary">
                Your contribution helps us transform plastic waste into sustainable products, create jobs for vulnerable youth, and clean up communities in Northern Uganda.
              </p>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-bg-primary p-8 rounded-2xl shadow-sm border border-border text-center group hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 group-hover:scale-110 transition-transform">
                  <Factory className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Build Capacity</h3>
                <p className="text-text-secondary text-sm">Help us build larger machines to process over 9 tonnes of plastic waste every month.</p>
              </div>

              <div className="bg-bg-primary p-8 rounded-2xl shadow-sm border border-border text-center group hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Create Jobs</h3>
                <p className="text-text-secondary text-sm">Empower vulnerable youth in Gulu by providing them with stable, meaningful employment.</p>
              </div>

              <div className="bg-bg-primary p-8 rounded-2xl shadow-sm border border-border text-center group hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 group-hover:scale-110 transition-transform">
                  <HandHeart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Impact</h3>
                <p className="text-text-secondary text-sm">Clean up the environment and educate communities on the value of recycling.</p>
              </div>
            </div>

            {/* Donation Action */}
            <div className="bg-brand-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold mb-4 relative z-10">Make a Donation Today</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
                TakaTaka Plastics is currently accepting donations to scale our Gulu pilot. Click below to securely process your contribution.
              </p>
              <button 
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-primary bg-white rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-xl relative z-10 group"
                onClick={() => alert("Donation gateway integration would go here!")}
              >
                Donate Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/" className="text-text-secondary hover:text-brand-primary underline transition-colors">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
