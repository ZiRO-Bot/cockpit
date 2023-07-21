"use client"

import useDarkMode from "@/lib/hooks/mode"
import { useSelector } from "@/lib/hooks/typed-redux"
import ButtonType from "@/model/enum/button-type"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Button from "../buttons/button"
import IconButton from "../buttons/icon-button"
import { UserAvatarOrLogin } from "./user-avatar-login"
import Mascot from "/public/mascot.svg"

export const NavBar = () => {
    const [isStuck, setIsStuck] = useState(false)
    const [_, toggleDarkMode] = useDarkMode()
    const pathname = usePathname()

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
                    <div className="h-16 w-full flex items-center font-bold">
                        <div className="h-12 flex justify-center">
                            <Link className="flex items-center justify-center gap-1" href="/">
                                <Mascot
                                    alt="The bot (Z3R0)"
                                    className="h-8 w-8 pb-1.5 fill-dark dark:fill-white"
                                />
                                <span className="font-black select-none">Z3R0</span>
                            </Link>
                        </div>
                        <div className="mx-6 gap-1.5 flex grow">
                            <Button
                                href="/counter"
                                buttonType={
                                    pathname.startsWith("/counter")
                                        ? ButtonType.ACTIVE_NAV
                                        : ButtonType.NAV
                                }>
                                Test
                            </Button>
                            <Button href="/dashboard" buttonType={ButtonType.NAV}>
                                Hello
                            </Button>
                        </div>
                        <div className="flex">
                            <IconButton onClick={toggleDarkMode}>
                                <Moon className="hidden dark:flex" strokeWidth={3} />
                                <Sun className="dark:hidden flex" strokeWidth={3} />
                            </IconButton>
                            <UserAvatarOrLogin />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
