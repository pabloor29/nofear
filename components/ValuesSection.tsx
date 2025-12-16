import React from 'react'
import { Card } from "@/components/ui/card"
import { Lock, Shield, CheckCircle } from "lucide-react"

function ValuesSection() {
  return (
    <>
    {/* Values Section */}
      <section id="projet" className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Nos Valeurs</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {"Bâtir la confiance, garantir la sécurité, concevoir pour servir"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Confiance</h4>
              <p className="text-muted-foreground leading-relaxed">
                {"Une relation durable et transparente avec nos clients, basée sur la fiabilité de nos produits."}
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Sécurité</h4>
              <p className="text-muted-foreground leading-relaxed">
                {"La protection des personnes, des données et de leurs biens en priorité absolue."}
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Service</h4>
              <p className="text-muted-foreground leading-relaxed">
                {"Des solutions qui facilitent la vie, renforcent la sécurité et offrent une expérience sereine."}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default ValuesSection