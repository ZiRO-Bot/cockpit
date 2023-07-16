import { selectIsLoggedIn } from "@/data/redux/auth"
import { useSelector } from "@/lib/hooks/typed-redux"
import { SectionType } from "@/model/enum/section"
import { Spinner } from "@/widget/spinner"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import LandingLayout from "./landing"

export default function ProtectedLayout({
    children,
    sectionType,
}: {
    children: React.ReactNode
    sectionType: SectionType
}) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        if (!isLoggedIn) {
            router.back()
            return
        }
        setIsLoading(false)
    })

    switch (sectionType) {
        case SectionType.LANDING:
            if (isLoading)
                return (
                    <LandingLayout>
                        <div className="flex w-full h-full justify-center items-center min-h-[calc(100vh-4rem)]">
                            <Spinner />
                        </div>
                    </LandingLayout>
                )
            return <LandingLayout>{children}</LandingLayout>
        case SectionType.DASHBOARD:
            if (isLoading)
                return (
                    <>
                        <div className="flex w-full h-full justify-center items-center min-h-[calc(100vh-4rem)]">
                            <Spinner />
                        </div>
                    </>
                )
            return <>{children}</>
        case SectionType.OTHER:
            if (isLoading)
                return (
                    <div className="flex w-full h-full justify-center items-center min-h-screen">
                        <Spinner />
                    </div>
                )
            return <>{children}</>
    }
}
