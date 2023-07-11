import useDarkMode from "@/lib/hooks/mode"
import type { AppProps } from "next/app"
import Head from "next/head"
import "/public/globals.css"
import "/public/normalize.css"

export default function App({ Component, pageProps }: AppProps) {
    const [isDarkMode, toggleDarkMode] = useDarkMode()

    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
