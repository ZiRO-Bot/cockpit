"use client"

import useDarkMode from "@/lib/hooks/mode"
import Theme from "@/model/theme"
import { ReactNode } from "react"

export default function RootLayout({
    serverTheme,
    children,
}: {
    serverTheme?: Theme
    children: ReactNode
}) {
    const [theme, toggleDarkMode] = useDarkMode(serverTheme)

    return (
        <html className={theme === Theme.DARK ? "dark" : ""} lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans dark:text-white dark:bg-dark">{children}</body>
        </html>
    )
}
