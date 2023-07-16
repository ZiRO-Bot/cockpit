import { selectIsLoggedIn } from "@/data/redux/auth"
import { useSelector } from "@/lib/hooks/typed-redux"
import { Spinner } from "@/widget/spinner"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const protectedView = (
    Component: () => JSX.Element,
    Layout: ({ children }: { children: React.ReactNode }) => JSX.Element = ({ children }) => (
        <>{children}</>
    ),
) => {
    return (props: React.JSX.IntrinsicAttributes) => {
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
                    <Component {...props} />
                )}
            </Layout>
        )
    }
}

export default protectedView
