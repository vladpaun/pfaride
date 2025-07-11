import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PFA Ride - Contabilitate PFA Uber & Bolt | Servicii Complete",
  description:
    "Servicii complete de contabilitate PFA pentru șoferii Uber și Bolt. Înființare PFA, administrare lunară, declarații fiscale. Contabilitate PFA Uber și Bolt specializată din 2017.",
  keywords:
    "contabilitate PFA Uber, contabilitate PFA Bolt, PFA ride sharing, înființare PFA Uber, administrare PFA Bolt, declarații fiscale Uber, contabilitate șoferi Uber Bolt",
  authors: [{ name: "PFA Ride" }],
  creator: "PFA Ride",
  publisher: "PFA Ride",
  robots: "index, follow",
  openGraph: {
    title: "PFA Ride - Contabilitate PFA Uber & Bolt",
    description:
      "Servicii complete de contabilitate PFA pentru șoferii Uber și Bolt. Înființare, administrare, declarații fiscale.",
    url: "https://pfaride.ro",
    siteName: "PFA Ride",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PFA Ride - Contabilitate PFA Uber & Bolt",
    description: "Servicii complete de contabilitate PFA pentru șoferii Uber și Bolt.",
  },
  alternates: {
    canonical: "https://pfaride.ro",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2196F3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}


import './globals.css'