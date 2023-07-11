import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en-US">
            <Head />
            <body className="font-sans dark:text-white dark:bg-dark">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
