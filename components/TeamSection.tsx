import React from 'react'
import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"

function TeamSection() {
  return (
    <>
    {/* Team Section */}
      <section id="equipe" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">L&apos;Équipe NoFear</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {"Six élèves-ingénieurs du CESI École d'Ingénieurs de Labège, unis par les mêmes valeurs"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Pablo Ortega", role: "Président" },
              { name: "Mathias Desbordes", role: "Directeur Général" },
              { name: "Victor Foucault", role: "Directeur Général" },
              { name: "Léo Le Goualec", role: "Directeur Général" },
              { name: "Julien Le Poetvin", role: "Directeur Général" },
              { name: "Théo Rodrigues", role: "Directeur Général" },
            ].map((member) => (
              <Card key={member.name} className="p-6 text-center hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h5 className="font-bold mb-1">{member.name}</h5>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>

          {/* <Card className="p-8 bg-muted/50">
            <div className="flex items-start gap-4">
              <img src="/images/logo-003.png" alt="NoFear Logo" className="h-16 w-16 object-contain flex-shrink-0" />
              <div>
                <h5 className="text-xl font-bold mb-3">Structure de l&apos;Actionnariat</h5>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Capital social de 1 200€ divisé en 120 parts sociales. Chaque membre détient 20 parts (200€), garantissant un poids identique dans les décisions stratégiques."
                  }
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </>
  )
}

export default TeamSection