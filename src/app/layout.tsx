import { getServerCookie } from "@/lib/server-cookie"
import Theme from "@/model/enum/theme"
import RootLayout from "@/ui/layouts/root"
import { Metadata } from "next"
import { ReactNode } from "react"
import "../style/globals.css"
import "../style/normalize.css"

export const metadata: Metadata = {
    title: "Z3R0",
    description: "An open-source discord bot",
}

export default function Layout({ children }: { children: ReactNode }) {
    const theme = getServerCookie("theme") as Theme | undefined
    return <RootLayout serverTheme={theme}>{children}</RootLayout>
}
