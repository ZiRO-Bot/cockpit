import Theme from "@/model/theme"
import { useState } from "react"
import { useIsomorphicLayoutEffect } from "./layout"

const update = () => {
    console.log(localStorage.theme)
    if (localStorage.theme === Theme.DARK) {
        document.documentElement.classList.add(Theme.DARK)
    } else {
        document.documentElement.classList.remove(Theme.DARK)
    }
}

const useDarkMode: () => [Theme, () => void] = () => {
    //false is lightMode true is darkMode
    const [theme, setTheme] = useState(Theme.DARK)

    useIsomorphicLayoutEffect(() => {
        const theme = localStorage.theme
        if (theme === Theme.DARK || theme === Theme.LIGHT) setTheme(theme)
    }, [])

    useIsomorphicLayoutEffect(() => {
        localStorage.theme = theme
        update()
    }, [theme])

    function changeTheme() {
        setTheme((oldTheme) => (oldTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK))
    }

    return [theme, changeTheme]
}

export default useDarkMode
