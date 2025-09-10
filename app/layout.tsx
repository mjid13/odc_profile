import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
// Commented out due to network issues - using fallback fonts
// import { Playfair_Display, Noto_Sans_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { RootLayoutClient } from "./root-layout-client"
import "./globals.css"

// Using system fonts for Arabic support
// const playfair = Playfair_Display({
//   subsets: ["latin", "latin-ext"],
//   display: "swap",
//   variable: "--font-playfair",
// })

// const notoSansArabic = Noto_Sans_Arabic({
//   subsets: ["arabic"],
//   display: "swap",
//   variable: "--font-arabic",
// })

export const metadata: Metadata = {
  title: "نادي عمان للمطورين - قيادة التحول الرقمي",
  description:
    "انضم إلى مجتمع نادي عمان للمطورين الذي يقود التحول الرقمي الحقيقي في عُمان. تواصل مع المطورين عبر Discord و GitHub و LinkedIn و WhatsApp.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <RootLayoutClient>
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </RootLayoutClient>
        </LanguageProvider>
      </body>
    </html>
  )
}
