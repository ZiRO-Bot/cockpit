"use client"

import { pingNexus } from "@/data/api/meta"
import { fetchFromCookie, fetchUser, selectIsLoggedIn } from "@/data/redux/auth"
import { setBotOnlineStatus, setNexusOnlineStatus } from "@/data/redux/meta"
import { useDispatch, useSelector } from "@/lib/hooks/typed-redux"
import { useEffect } from "react"

export default function SubRootLayout({ children }: { children: React.ReactNode }) {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoggedIn === undefined) {
            pingNexus().then(
                (ping) => {
                    dispatch(fetchFromCookie())
                    dispatch(setBotOnlineStatus(ping.botPing !== null))
                    dispatch(setNexusOnlineStatus(true))
                },
                () => {
                    dispatch(fetchFromCookie())
                    dispatch(setBotOnlineStatus(false))
                    dispatch(setNexusOnlineStatus(false))
                },
            )
        }
    }, [])

    useEffect(() => {
        if (!isLoggedIn) return
        dispatch(fetchUser())
    }, [isLoggedIn])

    return <>{children}</>
}
