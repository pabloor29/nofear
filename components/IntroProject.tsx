import React from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

function IntroProject() {
  return (
    <>
      {/* Problem & Solution */}
      <section id="solution" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Le Problème</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                {"Ai-je bien fermé ma porte à clé ?"}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {
                  "Cette question quotidienne n'est pas le fruit du hasard. Fermer sa porte est un geste tellement ancré dans notre routine qu'il devient un automatisme."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Notre cerveau met en pilote automatique les tâches répétitives, créant ainsi une incertitude légitime et une charge mentale inutile."
                }
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    70%
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Stress quotidien</h5>
                    <p className="text-sm text-muted-foreground">{"Des personnes sont stressées par ce doute"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    85%
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Retour en arrière</h5>
                    <p className="text-sm text-muted-foreground">{"Reviennent vérifier leur porte"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    76%
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Intérêt confirmé</h5>
                    <p className="text-sm text-muted-foreground">{"Seraient intéressés par une solution"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="p-8 bg-gradient-to-br from-card to-muted/30">
                <h5 className="text-xl font-bold mb-6">La Solution Track Serrure</h5>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      {"Boîtier intelligent, discret et sans fil fixé sur la porte"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{"Vérification à distance via application mobile"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{"Alertes en temps réel en cas d'anomalie"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{"Installation simple sans perçage ni câblage"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{"Prix abordable et autonomie longue durée"}</span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <Badge className="mb-4 bg-primary text-primary-foreground">La Solution</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">{"Simplicité, Sécurité, Sérénité"}</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {
                  "Track Serrure se différencie par son approche centrée sur l'utilisateur : une solution économique, non intrusive et universelle."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Notre dispositif s'adapte à tous les matériaux sans modifier l'installation existante, tout en garantissant une fiabilité maximale."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IntroProject