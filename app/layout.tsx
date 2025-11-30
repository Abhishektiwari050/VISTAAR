import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

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
  keywords: ["digital agency", "web design", "SEO", "social media", "growth strategy"],
  authors: [{ name: "Vistaar Agency" }],
  openGraph: {
    title: "Vistaar Agency - Next-Gen Digital Services",
    description: "Premium digital agency offering SEO, social media management, web design, and growth strategy services",
    type: "website",
  },
}

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Work",
    link: "/work",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/vistaar-logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`font-sans ${montserrat.variable} ${openSans.variable} ${GeistMono.variable} antialiased bg-black text-white`}>
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  )
}
