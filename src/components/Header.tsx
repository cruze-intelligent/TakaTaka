"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { Menu, Moon, Sun, X, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const { setTheme, theme } = useTheme()
  const router = useRouter()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navLinks = [
    { name: "Products", href: "/#products" },
    { name: "Our Impact", href: "/#impact" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo and Location */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/1672875063660-OIXA7TFG2HYVQ09LPYAT/Takataka+Logos-07.png?format=1500w" 
              alt="TakaTaka Plastics Logo" 
              className="h-10 w-auto group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300"
            />
          </Link>
          <div className="hidden lg:flex items-center text-sm text-text-secondary hover:text-brand-primary hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Gulu, Uganda</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-brand-primary hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-brand-primary/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button 
            className="hidden lg:inline-flex bg-brand-primary text-white hover:bg-brand-primary/90 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300"
            onClick={() => router.push('/donate')}
          >
            Support Our Mission
          </Button>

          {/* Mobile Drawer */}
          <Sheet>
            <SheetTrigger 
              className="lg:hidden"
              render={<Button variant="ghost" size="icon" className="hover:bg-brand-primary/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300" />}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="flex justify-start">
                    <img src="https://images.squarespace-cdn.com/content/v1/5d74582aa57e2229d4fe219b/1672875063660-OIXA7TFG2HYVQ09LPYAT/Takataka+Logos-07.png?format=1500w" alt="TakaTaka Plastics" className="h-10 w-auto" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-lg font-medium py-2 border-b border-border/50 text-text-primary hover:text-brand-primary hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 flex items-center text-sm text-text-secondary">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Plot 51B, Eden Road, Laroo Division, Gulu City</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mb-4">
                <Button 
                  className="w-full bg-brand-primary text-white hover:bg-brand-primary/90 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300"
                  onClick={() => router.push('/donate')}
                >
                  Support Our Mission
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
