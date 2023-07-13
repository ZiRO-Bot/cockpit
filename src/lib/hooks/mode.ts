"use client"

import Theme from "@/model/enum/theme"
import { getCookie, setCookie } from "cookies-next"
import { useEffect, useState } from "react"

const update = (theme: Theme) => {
    if (theme === Theme.DARK) {
        document.documentElement.classList.add(Theme.DARK)
    } else {
        document.documentElement.classList.remove(Theme.DARK)
    }
}

const useDarkMode: (serverTheme?: Theme | undefined) => [Theme, () => void] = (
    serverTheme: Theme | undefined,
) => {
    const clientTheme = getCookie("theme") as Theme
    const [theme, setTheme] = useState(serverTheme || clientTheme || Theme.DARK)

    useEffect(() => {
        if (clientTheme === Theme.DARK || clientTheme === Theme.LIGHT) setTheme(clientTheme)
    }, [])

    useEffect(() => {
        update(theme)
        setCookie("theme", theme, {
            sameSite: "lax",
            httpOnly: false,
            maxAge: 10 * 365 * 24 * 60 * 60,
        })
    }, [theme])

    function toggleDarkMode() {
        setTheme((oldTheme: Theme) => (oldTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK))
    }

    return [theme, toggleDarkMode]
}

export default useDarkMode
