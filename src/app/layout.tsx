import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ViewTransitions } from "next-view-transitions"
import { Toaster } from "sonner"
import SmoothScrolling from "@/components/smoothScrolling"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Simanca",
  description: "Get Your Pages To A Next F*king Level",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <SmoothScrolling />
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#f5f1e9",
                border: "1px solid #000",
                color: "#000",
              },
            }}
          />
        </body>
      </html>
    </ViewTransitions>
  )
}
