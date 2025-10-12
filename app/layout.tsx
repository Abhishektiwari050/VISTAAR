import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Vistaar Agency - Next-Gen Digital Services",
  description: "Premium digital agency offering SEO, social media management, web design, and growth strategy services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.52/build/spline-viewer.js" defer></script>
        <link rel="icon" href="/vistaar-logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`font-sans ${montserrat.variable} ${openSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
