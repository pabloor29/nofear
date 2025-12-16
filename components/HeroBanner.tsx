import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

function HeroBanner() {
  return (
    <>
    {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Innovation • Sécurité • Simplicité
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              {"Votre porte est-elle bien fermée ?"}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              {
                "Track Serrure apporte la tranquillité d'esprit grâce à une solution simple, intelligente et accessible pour vérifier l'état de votre porte à distance."
              }
            </p>
            {/* <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Découvrir le projet
              </Button>
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </div> */}
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="bg-card rounded-lg p-6 border border-border flex items-center justify-center">
              <img src="/images/logo-002.png" alt="NoFear Logo" className="h-16 w-16 object-contain" />
            </div>
            <div className="bg-card rounded-lg p-6 border border-border flex items-center justify-center">
              <img src="/images/logo-004.png" alt="NoFear Logo" className="h-16 w-16 object-contain" />
            </div>
            <div className="bg-card rounded-lg p-6 border border-border flex items-center justify-center">
              <img src="/images/logo-006.png" alt="NoFear Logo" className="h-16 w-16 object-contain" />
            </div>
            <div className="bg-card rounded-lg p-6 border border-border flex items-center justify-center">
              <img src="/images/logo-009.png" alt="NoFear Logo" className="h-16 w-16 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner