"use client"

import { DashboardContext } from "@/data/context/dashboard-context"
import useDarkMode from "@/lib/hooks/mode"
import ButtonType from "@/model/enum/button-type"
import { GuildDashboardParams } from "@/model/guild"
import Button from "@/widget/buttons/button"
import IconButton from "@/widget/buttons/icon-button"
import { DashboardNavBar } from "@/widget/navbar/dashboard-nav"
import { Bot, LayoutGrid, Moon, Sun } from "lucide-react"
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
                <div className="w-full grid grid-cols-[20rem_auto]">
                    <aside className="min-h-screen flex flex-col gap-2 px-4">
                        <div className="pt-2 flex justify-between">
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
                        <details className="group/dropdown py-4">
                            <Button
                                layout={({ children, className }) => (
                                    <summary className={className}>{children}</summary>
                                )}
                                className="flex bg-slate-700"
                                buttonType={ButtonType.BASE}>
                                <a className="font-bold text-white">Guild Name</a>
                            </Button>
                            <div className="absolute w-full max-w-[20rem] right-auto left-0">
                                <div className="m-4 backdrop-blur p-4 rounded-xl bg-white/60 dark:bg-dark/60 shadow-border-like-btn dark:shadow-border-like-dark-btn z-[100]">
                                    <p>Guild 1</p>
                                    <p>Guild 2</p>
                                    <p>Guild 3</p>
                                    <p>Guild 4</p>
                                </div>
                            </div>
                        </details>
                        <div className="flex flex-col">
                            <Button
                                className="gap-2"
                                href={`/dashboard/${guildId}`}
                                buttonType={
                                    pathname.match(/\/dashboard\/\d+\/?$/)
                                        ? ButtonType.ACTIVE_NAV
                                        : ButtonType.NAV
                                }>
                                <LayoutGrid />
                                Home
                            </Button>
                            <Button
                                className="gap-2"
                                href={`/dashboard/${guildId}/meta`}
                                buttonType={
                                    pathname.match(/\/dashboard\/\d+\/meta\/?$/)
                                        ? ButtonType.ACTIVE_NAV
                                        : ButtonType.NAV
                                }>
                                <Bot />
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
