import { COMMON_TW } from "@/lib/constants"
import ButtonType from "@/model/enum/button-type"
import Guild from "@/model/guild"
import Button from "./buttons/button"
import GuildIcon from "./guild-icon"

const GuildCard = ({ guild = undefined }: { guild?: Guild }) => {
    return (
        <div
            className={`p-4 rounded-xl flex flex-col justify-center items-center gap-4 ${COMMON_TW.BORDER_LIKE_SHADOW_BTN}`}>
            <GuildIcon
                className={guild ? "" : "animate-pulse bg-gray-400 dark:bg-gray-600"}
                size={128}
                guild={guild}
            />
            <div className="w-full flex gap-2 justify-between items-center">
                {guild ? (
                    <a className="align-start truncate">{guild.name}</a>
                ) : (
                    <a className="align-start truncate animate-pulse text-transparent select-none bg-gray-400 dark:bg-gray-600">
                        {"a".repeat(Math.floor(Math.random() * (16 - 5 + 1)) + 5)}
                    </a>
                )}

                {guild ? (
                    <Button
                        href={guild.bot ? `/dashboard/${guild.id}` : guild.invite}
                        buttonType={guild.bot ? ButtonType.PRIMARY : ButtonType.GRAY}>
                        {guild.bot ? "Setup" : "Invite"}
                    </Button>
                ) : (
                    <Button
                        href="#"
                        className="disabled animate-pulse"
                        buttonType={ButtonType.GRAY}>
                        <span className="text-transparent">Setup</span>
                    </Button>
                )}
            </div>
        </div>
    )
}

export default GuildCard
