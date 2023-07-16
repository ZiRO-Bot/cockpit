"use client"

import { COMMON_TW } from "@/lib/constants"
import ButtonType from "@/model/enum/button-type"
import Guild from "@/model/guild"
import LandingLayout from "@/ui/layouts/landing"
import protectedView from "@/ui/protected"
import Button from "@/widget/buttons/button"
import GuildIcon from "@/widget/guild-icon"

const GuildListView = () => {
    const guilds: Array<Guild> = [
        {
            bot: false,
            id: 69,
            name: "Dummy Guild",
        },
        {
            bot: true,
            id: 420,
            name: "Dummy Guild with Long Ass Name",
        },
    ]

    return (
        <div className="flex items-center justify-center">
            <div className="w-64 sm:w-full md:w-5/6 lg:w-2/3 mt-6 mx-8 md:mx-0 gap-6 flex flex-col items-center justify-center">
                <a className="text-2xl font-bold">Select a server</a>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${COMMON_TW.BORDER_LIKE_SHADOW_BTN}">
                    {guilds
                        .sort()
                        .sort((a, b) => (a.bot ? 0 : 1))
                        .map((guild) => {
                            return (
                                <div
                                    className={`p-4 rounded-xl flex flex-col justify-center items-center gap-4 ${COMMON_TW.BORDER_LIKE_SHADOW_BTN}`}>
                                    <GuildIcon size={128} guild={guild} />
                                    <div className="w-full flex gap-2 justify-between items-center">
                                        <a className="align-start truncate">{guild.name}</a>
                                        <Button
                                            href="#"
                                            buttonType={
                                                guild.bot ? ButtonType.PRIMARY : ButtonType.GRAY
                                            }>
                                            {guild.bot ? "Setup" : "Invite"}
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default protectedView(GuildListView, LandingLayout)
