"use client"

import { DashboardContext } from "@/data/context/dashboard-context"
import useDarkMode from "@/lib/hooks/mode"
import ButtonType from "@/model/enum/button-type"
import { GuildDashboardParams } from "@/model/guild"
import Button from "@/widget/buttons/button"
import IconButton from "@/widget/buttons/icon-button"
import { DashboardNavBar } from "@/widget/navbar/dashboard-nav"
import { Moon, Sun } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import ProtectedLayout from "./protected"
import Mascot from "/public/mascot.svg"

export default function DashboardLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: GuildDashboardParams
}) {
    const [guildId, setGuildId] = useState(params.id)

    const [_, toggleDarkMode] = useDarkMode()

    const pathname = usePathname()

    return (
        <DashboardContext.Provider value={{ guildId, setGuildId }}>
            <ProtectedLayout>
                <div className="grid grid-cols-[20rem_auto]">
                    <aside className="min-h-screen flex flex-col gap-2">
                        <div className="px-4 py-2 flex justify-between">
                            <div className="flex items-center justify-center gap-1">
                                <Mascot
                                    alt="The bot (Z3R0)"
                                    className="h-8 w-8 pb-1.5 fill-dark dark:fill-white"
                                />
                                <span className="font-black select-none">Z3R0</span>
                            </div>
                            <IconButton onClick={toggleDarkMode}>
                                <Moon className="hidden dark:flex" strokeWidth={3} />
                                <Sun className="dark:hidden flex" strokeWidth={3} />
                            </IconButton>
                        </div>
                        <div className="flex flex-col">
                            <Button
                                href={`/dashboard/${guildId}`}
                                buttonType={
                                    pathname.match(/\/dashboard\/\d+\/?$/)
                                        ? ButtonType.ACTIVE_NAV
                                        : ButtonType.NAV
                                }>
                                Home
                            </Button>
                            <Button
                                href={`/dashboard/${guildId}/meta`}
                                buttonType={
                                    pathname.match(/\/dashboard\/\d+\/meta\/?$/)
                                        ? ButtonType.ACTIVE_NAV
                                        : ButtonType.NAV
                                }>
                                Meta
                            </Button>
                        </div>
                    </aside>
                    <main>
                        <DashboardNavBar />
                        {children}
                    </main>
                </div>
            </ProtectedLayout>
        </DashboardContext.Provider>
    )
}
