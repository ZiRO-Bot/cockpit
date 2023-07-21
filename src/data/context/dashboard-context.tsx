"use client"

import { Dispatch, SetStateAction, createContext } from "react"

export const DashboardContext = createContext<{
    guildId: number
    setGuildId: Dispatch<SetStateAction<number>>
}>({ guildId: 0, setGuildId: () => null })
