"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    organization: "",
    productType: "",
    quantity: "",
    location: "Gulu"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submit
    alert("Quote request submitted! We will be in touch shortly.")
  }

  return (
    <section id="contact" className="py-16 bg-bg-surface border-t border-border">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Let's Work Together</h2>
          <p className="text-text-secondary text-lg">
            Request a quote for your project or reach out with any inquiries. We supply across Northern Uganda and nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Details Card */}
          <div className="bg-bg-primary rounded-3xl p-8 md:p-12 border border-border flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-accent/50 rounded-xl text-brand-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Location</h4>
                    <p className="text-text-secondary">Plot 51B, Eden Road, Laroo Division<br/>Gulu City, Uganda<br/>P.O. Box 1017</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-accent/50 rounded-xl text-brand-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Phone</h4>
                    <p className="text-text-secondary">0780 567 986 / 0200 947 272</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-accent/50 rounded-xl text-brand-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Email</h4>
                    <p className="text-text-secondary">info@takatakaplastics.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button 
                className="w-full bg-[#25D366] text-white hover:bg-[#20b858] h-14 text-lg rounded-xl shadow-lg shadow-green-500/20"
                onClick={() => window.open('https://wa.me/256393252992', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Quick Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-bg-primary rounded-3xl p-8 md:p-12 border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-text-primary mb-8">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org">Organization (Optional)</Label>
                  <Input 
                    id="org" 
                    placeholder="Company Ltd"
                    value={formData.organization}
                    onChange={e => setFormData({...formData, organization: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="product">Product Type</Label>
                  <select 
                    id="product"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.productType}
                    onChange={e => setFormData({...formData, productType: e.target.value})}
                    required
                  >
                    <option value="">Select Product...</option>
                    <option value="TakaTile Hexagon">TakaTile - Hexagon</option>
                    <option value="TakaTile Standard">TakaTile - Standard</option>
                    <option value="TakaSlate">TakaSlate</option>
                    <option value="Eco-Decor">Eco-Decor (Vases, Coasters)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity (m² or units)</Label>
                  <Input 
                    id="quantity" 
                    type="number" 
                    placeholder="e.g. 50"
                    value={formData.quantity}
                    onChange={e => setFormData({...formData, quantity: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Delivery Location</Label>
                <select 
                  id="location"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                >
                  <option value="Gulu">Gulu City</option>
                  <option value="Kampala">Kampala</option>
                  <option value="Regional">Other Regional</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-brand-primary text-white hover:bg-brand-primary/90 h-12 text-base rounded-xl mt-4">
                <Send className="w-4 h-4 mr-2" />
                Submit Request
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
