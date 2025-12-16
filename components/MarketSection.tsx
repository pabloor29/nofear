import React from 'react'
import { Card } from "@/components/ui/card"
import { Users, TrendingUp, Target } from "lucide-react"

function MarketSection() {
  return (
    <>
      {/* Market Section */}
      <section id="marche" className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Un Marché en Croissance</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {"Le marché mondial des serrures connectées connaît une expansion exceptionnelle"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 text-center bg-card">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">$15.73B</div>
              <p className="text-sm text-muted-foreground">{"Valeur du marché prévue d'ici 2035"}</p>
            </Card>
            <Card className="p-8 text-center bg-card">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">17.3%</div>
              <p className="text-sm text-muted-foreground">{"Croissance annuelle (TCAC) jusqu'en 2035"}</p>
            </Card>
            <Card className="p-8 text-center bg-card">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">61%</div>
              <p className="text-sm text-muted-foreground">
                {"Des Français intéressés par la gestion des serrures connectées"}
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <h4 className="text-2xl font-bold mb-6">Nos Cibles Principales</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h5 className="font-bold mb-2 text-lg">Étudiants</h5>
                <p className="text-sm opacity-90 leading-relaxed">
                  {"Budget limité mais besoin réel de sécurité pour leur logement"}
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-lg">Seniors</h5>
                <p className="text-sm opacity-90 leading-relaxed">
                  {"Facilité d'installation et d'utilisation essentielle"}
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-lg">Personnes avec TOC</h5>
                <p className="text-sm opacity-90 leading-relaxed">
                  {"Réduction de l'anxiété et de la charge mentale quotidienne"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

export default MarketSection