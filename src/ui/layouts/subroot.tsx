"use client"

import { fetchFromCookie, selectAuth } from "@/data/redux/auth"
import { useDispatch, useSelector } from "@/lib/hooks/typed-redux"
import { useEffect } from "react"

export default function SubRootLayout({ children }: { children: React.ReactNode }) {
    const isLoggedIn = useSelector(selectAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoggedIn === undefined) {
            ;("TODO - ping the server to check auth")
            dispatch(fetchFromCookie())
        }
    }, [])

    return <>{children}</>
}
