import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en-US">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="font-sans dark:text-white dark:bg-dark">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
