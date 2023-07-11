import useDarkMode from "@/lib/hooks/mode"
import Theme from "@/model/theme"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Spinner } from "./spinner"
import logo from "/public/static/logo.png"

export const NavBar = () => {
    const [isStuck, setIsStuck] = useState(false)
    const [theme, toggleDarkMode] = useDarkMode()

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
                <div className="h-16 w-full flex items-center font-semibold">
                    <Image alt="Bot's logo" src={logo} className="h-12 w-12 rounded-xl" />
                    <a>Hello</a>
                    <button
                        className="w-8 h-8 flex rounded-full items-center justify-center active:scale-95 transition-transform hover:bg-gray-300 dark:hover:bg-gray-50/[0.2]"
                        onClick={toggleDarkMode}>
                        {theme === Theme.DARK ? <Moon strokeWidth={3} /> : <Sun strokeWidth={3} />}
                    </button>
                    <Spinner size={48} strokeWidth={3} className="p-2" />
                </div>
            </nav>
        </div>
    )
}
