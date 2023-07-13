"use client"

import useDarkMode from "@/lib/hooks/mode"
import ButtonType from "@/model/enum/button-type"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Button from "./buttons/button"
import IconButton from "./buttons/icon-button"
import { Spinner } from "./spinner"
import mascot from "/public/mascot.svg"

export const NavBar = () => {
    const [isStuck, setIsStuck] = useState(false)
    const [_, toggleDarkMode] = useDarkMode()
    const pathname = usePathname()

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
                    <div className="h-12 w-12 flex items-center justify-center">
                        <Link href="/">
                            <Image
                                alt="Bot's logo"
                                src={mascot}
                                className="h-8 w-8 pb-1.5 dark:invert"
                            />
                        </Link>
                    </div>
                    <a>Hello</a>
                    <Button
                        href="/counter"
                        buttonType={
                            pathname.startsWith("/counter") ? ButtonType.ACTIVE_NAV : ButtonType.NAV
                        }>
                        Test
                    </Button>
                    <IconButton onClick={toggleDarkMode}>
                        <Moon className="hidden dark:flex" strokeWidth={3} />
                        <Sun className="dark:hidden flex" strokeWidth={3} />
                    </IconButton>
                    <Spinner size={48} strokeWidth={3} className="p-2" />
                </div>
            </nav>
        </div>
    )
}
