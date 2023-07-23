"use client"

import { selectIsLoggedIn } from "@/data/redux/auth"
import { useSelector } from "@/lib/hooks/typed-redux"
import { Spinner } from "@/widget/spinner"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        if (isLoggedIn === undefined) return
        if (!isLoggedIn) {
            router.push("/")
            return
        }
        setIsLoading(false)
    }, [isLoggedIn])

    if (isLoading)
        return (
            <div className="flex w-full h-full justify-center items-center min-h-screen peer-[.nav]/navbar:min-h-[calc(100vh-4rem)]">
                <Spinner />
            </div>
        )

    return children
}

export default ProtectedLayout
