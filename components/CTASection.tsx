import React from 'react'
import { Button } from "@/components/ui/button"

function CTASection() {
  return (
    <>
    {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground text-balance">
            {"Renforcer la sécurité et la sérénité au quotidien"}
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
            {"Rejoignez-nous dans cette aventure pour démocratiser la sécurité connectée accessible à tous"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Nous contacter
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Télécharger le Business Plan
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTASection