"use client"

import store from "@/data/store"
import useDarkMode from "@/lib/hooks/mode"
import Theme from "@/model/enum/theme"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import SubRootLayout from "./subroot"

export default function RootLayout({
    serverTheme,
    children,
}: {
    serverTheme?: Theme
    children: ReactNode
}) {
    const [theme, toggleDarkMode] = useDarkMode(serverTheme)

    return (
        <Provider store={store}>
            <SubRootLayout>
                <html className={theme === Theme.DARK ? "dark" : ""} lang="en">
                    <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                            rel="stylesheet"
                        />
                    </head>
                    <body className="font-sans dark:text-white dark:bg-dark">
                        <ProgressBar />
                        {children}
                    </body>
                </html>
            </SubRootLayout>
        </Provider>
    )
}
