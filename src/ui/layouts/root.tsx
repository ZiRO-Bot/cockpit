import { Inter } from "next/font/google"

const inter = Inter({
    weight: ["200", "300", "500", "700", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <body className={`${inter.variable} font-sans`}>{children}</body>
}
