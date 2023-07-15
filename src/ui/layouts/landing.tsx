import { NavBar } from "@/widget/navbar/nav"

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}
