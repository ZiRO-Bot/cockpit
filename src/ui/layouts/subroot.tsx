"use client"

import { fetchUser, selectIsLoggedIn, setIsLoggedIn } from "@/data/redux/auth"
import { setBotOnlineStatus, setNexusOnlineStatus } from "@/data/redux/meta"
import { useDispatch, useSelector } from "@/lib/hooks/typed-redux"
import Ping from "@/model/ping"
import { cookies } from "next/headers"
import { useEffect } from "react"

export default async function SubRootLayout({
    children,
    nexusPing,
}: {
    children: React.ReactNode
    nexusPing?: Ping
}) {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch = useDispatch()

    if (nexusPing === undefined) {
        dispatch(setIsLoggedIn(false))
        dispatch(setBotOnlineStatus(false))
        dispatch(setNexusOnlineStatus(false))
    } else {
        dispatch(setIsLoggedIn(nexusPing.isLoggedIn))
        dispatch(setBotOnlineStatus(nexusPing.botPing !== null))
        dispatch(setNexusOnlineStatus(true))
    }

    useEffect(() => {
        if (!isLoggedIn) return
        dispatch(fetchUser())
    }, [isLoggedIn])

    return <>{children}</>
}
