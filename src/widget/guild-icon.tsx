import { getInitials } from "@/lib/utils"
import Guild from "@/model/guild"

const GuildIcon = ({ size, guild }: { size: number; guild: Guild }) => {
    const className = "flex justify-center items-center rounded-lg"
    return guild.icon ? (
        <img className={className} src={guild.icon} height={size} width={size} />
    ) : (
        <div
            className={`${className} w-[${size}px] h-[${size}px] font-[${
                size / 4
            }px] font-bold bg-discord`}>
            <span>{getInitials(guild.name)}</span>
        </div>
    )
}

export default GuildIcon
