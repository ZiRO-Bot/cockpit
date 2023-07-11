import { NavBar } from "@/widget/nav"

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}
