import { pingNexus } from "@/data/api/meta"
import { getServerCookie } from "@/lib/server-cookie"
import Theme from "@/model/enum/theme"
import "@/style/globals.css"
import "@/style/normalize.css"
import RootLayout from "@/ui/layouts/root"
import { Metadata } from "next"
import { ReactNode } from "react"

const title = "Z3R0"
const description = "An open-source multi-purpose discord bot"

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        type: "website",
        siteName: title,
        title: title,
        description: description,
        images: [
            {
                url: "https://raw.githubusercontent.com/ZiRO-Bot/Z3R0/overhaul/assets/img/banner.png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
}

export default async function Layout({ children }: { children: ReactNode }) {
    const theme = getServerCookie("theme") as Theme | undefined
    const nexusPing = await pingNexus()
    return (
        <RootLayout serverTheme={theme} nexusPing={nexusPing}>
            {children}
        </RootLayout>
    )
}
