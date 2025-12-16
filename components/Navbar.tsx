import React from 'react'
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <>
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo-009.png" 
                alt="NoFear Logo" 
                className="h-10 w-10 object-contain" 
              />
              <div>
                <h1 className="text-lg font-bold text-foreground">NoFear</h1>
                <p className="text-xs text-muted-foreground">Track Serrure</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#projet" className="text-sm text-foreground hover:text-primary transition-colors">
                Projet
              </a>
              <a href="#solution" className="text-sm text-foreground hover:text-primary transition-colors">
                Solution
              </a>
              <a href="#marche" className="text-sm text-foreground hover:text-primary transition-colors">
                Marché
              </a>
              <a href="#equipe" className="text-sm text-foreground hover:text-primary transition-colors">
                Équipe
              </a>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar