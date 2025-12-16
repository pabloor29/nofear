import React from 'react'

function Footer() {
  return (
    <>
    {/* Footer */}
      <footer className="py-12 px-4 lg:px-8 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/logo-005.png" alt="NoFear Logo" className="h-10 w-10 object-contain" />
                <div>
                  <h6 className="font-bold">NoFear</h6>
                  <p className="text-xs text-muted-foreground">Track Serrure</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {"Faciliter la sécurité et la tranquillité d'esprit avec des solutions intelligentes et accessibles."}
              </p>
            </div>
            <div>
              <h6 className="font-bold mb-3">Navigation</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#projet" className="text-muted-foreground hover:text-primary transition-colors">
                    Projet
                  </a>
                </li>
                <li>
                  <a href="#solution" className="text-muted-foreground hover:text-primary transition-colors">
                    Solution
                  </a>
                </li>
                <li>
                  <a href="#marche" className="text-muted-foreground hover:text-primary transition-colors">
                    Marché
                  </a>
                </li>
                <li>
                  <a href="#equipe" className="text-muted-foreground hover:text-primary transition-colors">
                    Équipe
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-3">Contact</h6>
              <p className="text-sm text-muted-foreground">CESI École d&apos;Ingénieurs</p>
              <p className="text-sm text-muted-foreground">Labège, France</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} NoFear. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer