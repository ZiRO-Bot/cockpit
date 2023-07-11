import useDarkMode from "@/lib/hooks/mode"
import Image from "next/image"
import { useEffect, useState } from "react"
import logo from "/public/static/logo.png"

export const NavBar = () => {
    const [isStuck, setIsStuck] = useState(false)
    const [isDarkMode, toggleDarkMode] = useDarkMode()

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
                    "backdrop-blur px-1.5 lg:px-4 bg-white/80 dark:bg-dark/80" +
                    (isStuck ? " border-b border-solid border-black" : "")
                }>
                <div className="h-16 w-full flex items-center">
                    <Image alt="Bot's logo" src={logo} className="h-12 w-12 rounded-xl" />
                    <a>Hello</a>
                    <button onClick={toggleDarkMode}>Test</button>
                </div>
            </nav>
        </div>
    )
}
