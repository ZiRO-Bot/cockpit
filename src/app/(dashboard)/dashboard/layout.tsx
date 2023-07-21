import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div>
                <h1>Hello World</h1>
                {children}
            </div>
        </>
    )
}
