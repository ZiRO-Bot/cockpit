"use client"

import { useSelector } from "@/lib/hooks/typed-redux"
import { useEffect, useState } from "react"
import { DashboardUserAvatar } from "./user-avatar/dashboard-user-avatar"
import { UserAvatarOrLogin } from "./user-avatar/user-avatar-login"

export const DashboardNavBar = () => {
    const [isStuck, setIsStuck] = useState(false)

    // -- some state
    const meta = useSelector((state) => state.meta)

    useEffect(() => {
        function onScroll() {
            if (!isStuck && window.scrollY > 0) {
                setIsStuck(true)
            } else if (isStuck && window.scrollY <= 0) {
                setIsStuck(false)
            }
        }
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [isStuck])

    return (
        <>
            {(meta.botOnline === false || meta.nexusOnline === false) && (
                <div className="px-4 py-2 bg-red-600 flex justify-center">
                    <a className="font-bold text-white">
                        The bot's server is currently offline! Please try again later
                    </a>
                </div>
            )}
            <div className="peer/navbar z-50 sticky top-0 nav">
                <nav
                    className={
                        "backdrop-blur px-2 lg:px-8 bg-white/60 dark:bg-dark/60 transition-shadow duration-300" +
                        (isStuck ? " shadow-border-like dark:shadow-border-like-dark" : "")
                    }>
                    <div className="h-16 w-full flex justify-end items-center font-bold">
                        <div className="flex">
                            <UserAvatarOrLogin>
                                <DashboardUserAvatar />
                            </UserAvatarOrLogin>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
