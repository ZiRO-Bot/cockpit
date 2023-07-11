import useDarkMode from "@/lib/hooks/mode"
import type { AppProps } from "next/app"
import Head from "next/head"
import "/public/globals.css"
import "/public/normalize.css"

export default function App({ Component, pageProps }: AppProps) {
    const [isDarkMode, toggleDarkMode] = useDarkMode()

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
