"use client"

import { selectIsLoggedIn } from "@/data/redux/auth"
import { useSelector } from "@/lib/hooks/typed-redux"
import { Spinner } from "@/widget/spinner"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const ProtectedLayout = ({
    children,
    layout = ({ children }: { children: React.ReactNode }) => {
        return <>{children}</>
    },
}: {
    children: React.ReactNode
    layout?: ({ children }: { children: React.ReactNode }) => JSX.Element
}) => {
    let Layout = layout

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        if (isLoggedIn === undefined) return
        if (!isLoggedIn) {
            router.back()
            return
        }
        setIsLoading(false)
    }, [isLoggedIn])

    return (
        <Layout>
            {isLoading ? (
                <div className="flex w-full h-full justify-center items-center min-h-screen peer-[.nav]/navbar:min-h-[calc(100vh-4rem)]">
                    <Spinner />
                </div>
            ) : (
                children
            )}
        </Layout>
    )
}

export default ProtectedLayout
