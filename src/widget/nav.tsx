"use client"

import { SUCCESS_AUTH } from "@/lib/constants"
import useDarkMode from "@/lib/hooks/mode"
import ButtonType from "@/model/enum/button-type"
import User from "@/model/user"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Button from "./buttons/button"
import IconButton from "./buttons/icon-button"
import Discord from "./icon/discord"
import { Spinner } from "./spinner"
import Mascot from "/public/mascot.svg"

export const NavBar = ({ user = undefined }: { user?: User }) => {
    const [isStuck, setIsStuck] = useState(false)
    const [_, toggleDarkMode] = useDarkMode()
    const pathname = usePathname()

    // -- oauth stuff
    const [isSigning, setIsSigning] = useState(false)
    const loginUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`
    const loginHandler = (event: MessageEvent) => {
        if (event.data.message === SUCCESS_AUTH) {
            window.location.reload()
            window.removeEventListener("message", loginHandler)
        }
    }

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
        <div className="z-50 sticky top-0">
            <nav
                className={
                    "backdrop-blur px-1.5 lg:px-4 bg-white/60 dark:bg-dark/60 transition-shadow duration-300" +
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
                    <div className="mx-8 gap-1.5 flex grow">
                        <Button
                            href="/counter"
                            buttonType={
                                pathname.startsWith("/counter")
                                    ? ButtonType.ACTIVE_NAV
                                    : ButtonType.NAV
                            }>
                            Test
                        </Button>
                        <Button href="#" buttonType={ButtonType.NAV}>
                            Hello
                        </Button>
                    </div>
                    <div className="flex gap-1.5">
                        <IconButton onClick={toggleDarkMode}>
                            <Moon className="hidden dark:flex" strokeWidth={3} />
                            <Sun className="dark:hidden flex" strokeWidth={3} />
                        </IconButton>
                        {user === undefined ? (
                            <Button
                                className="gap-2"
                                onClick={() => {
                                    if (!isSigning) window.addEventListener("message", loginHandler)
                                    window.open(loginUrl, "_blank")
                                }}
                                buttonType={ButtonType.PRIMARY_NAV}>
                                <Discord />
                                Sign In with Discord
                            </Button>
                        ) : (
                            <Spinner size={48} strokeWidth={3} className="p-2" />
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}
