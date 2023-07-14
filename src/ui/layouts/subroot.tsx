"use client"

import { fetchFromCookie, fetchUser, selectAuth } from "@/data/redux/auth"
import { useDispatch, useSelector } from "@/lib/hooks/typed-redux"
import { useEffect } from "react"

export default function SubRootLayout({ children }: { children: React.ReactNode }) {
    const isLoggedIn = useSelector(selectAuth)
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoggedIn === undefined) {
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/ping`, {
                credentials: "include",
            }).then(() => {
                dispatch(fetchFromCookie())
            })
        }
    }, [])

    useEffect(() => {
        if (!isLoggedIn) return
        dispatch(fetchUser())
    }, [isLoggedIn])

    return <>{children}</>
}
