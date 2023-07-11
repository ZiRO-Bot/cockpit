import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({
    weight: ["200", "300", "500", "700", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
})

export const metadata: Metadata = {
    title: "Z3R0",
    description: "An open-source multi-purpose discord bot",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <body className={`${inter.variable} font-sans`}>{children}</body>
}
