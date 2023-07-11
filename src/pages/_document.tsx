import RootLayout from "@/ui/layouts/root"
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head />
            <RootLayout>
                <Main />
                <NextScript />
            </RootLayout>
        </Html>
    )
}
