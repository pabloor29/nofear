import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Track Serrure - NoFear | Sécurité Connectée Intelligente",
  description:
    "Track Serrure par NoFear : Une solution simple et abordable pour vérifier à distance si votre porte est bien fermée. Tranquillité d'esprit garantie.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/logo-001.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo-001.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo-001.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/logo-001.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
