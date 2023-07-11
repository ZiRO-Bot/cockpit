import type { AppProps } from "next/app"
import "/public/globals.css"
import "/public/normalize.css"

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
