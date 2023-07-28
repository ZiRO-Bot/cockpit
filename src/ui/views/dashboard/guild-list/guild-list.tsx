"use client"

import ProtectedLayout from "@/ui/layouts/protected"
import GuildCard from "@/widget/guild-card"
import { useEffect } from "react"
import useGuildListViewModel from "./guild-list-view-model"

const GuildListView = () => {
    const viewModel = useGuildListViewModel()

    useEffect(() => {
        viewModel.fetchManagedGuilds()
    }, [])

    return (
        <ProtectedLayout>
            <div className="flex items-center justify-center">
                <div className="w-64 sm:w-full md:w-5/6 lg:w-2/3 mt-6 mx-8 md:mx-0 gap-6 flex flex-col items-center justify-center">
                    <a className="text-2xl font-bold">Select a server</a>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${COMMON_TW.BORDER_LIKE_SHADOW_BTN}">
                        {viewModel.guilds
                            ? [...viewModel.guilds]
                                  .sort((a, b) => b.name.localeCompare(a.name))
                                  .sort((a, b) =>
                                      a.bot ? (b.bot ? a.name.localeCompare(b.name) : 0) : 1,
                                  )
                                  .map((guild) => <GuildCard guild={guild} />)
                            : Array.from(Array(8).keys()).map(() => <GuildCard />)}
                    </div>
                </div>
            </div>
        </ProtectedLayout>
    )
}

export default GuildListView
