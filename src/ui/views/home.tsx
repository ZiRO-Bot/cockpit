import LandingLayout from "@/ui/layouts/landing"
import type { NextPage } from "next"

export const HomeView: NextPage = () => {
    return (
        <LandingLayout>
            <h1>Hello World</h1>
        </LandingLayout>
    )
}
