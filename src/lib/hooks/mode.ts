"use client"

import Theme from "@/model/theme"
import { getCookie, setCookie } from "cookies-next"
import { useEffect, useState } from "react"

const update = (theme: Theme) => {
    if (theme === Theme.DARK) {
        document.documentElement.classList.add(Theme.DARK)
    } else {
        document.documentElement.classList.remove(Theme.DARK)
    }
}

const useDarkMode: (serverTheme?: Theme) => [Theme, () => void] = (
    serverTheme: Theme = Theme.DARK,
) => {
    const [theme, setTheme] = useState(serverTheme)
    let clientTheme = getCookie("theme")

    useEffect(() => {
        if (clientTheme === undefined) clientTheme = localStorage.theme
        if (clientTheme === Theme.DARK || clientTheme === Theme.LIGHT) setTheme(clientTheme)
    }, [])

    useEffect(() => {
        update(theme)
        localStorage.theme = theme
        setCookie("theme", theme, {
            sameSite: "lax",
            httpOnly: false,
        })
    }, [theme])

    function toggleDarkMode() {
        setTheme((oldTheme) => (oldTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK))
    }

    return [theme, toggleDarkMode]
}

export default useDarkMode
