import { getInitials } from "@/lib/utils"
import Guild from "@/model/guild"

const GuildIcon = ({
    size,
    className = "",
    guild = undefined,
}: {
    size: number
    className?: string
    guild?: Guild
}) => {
    className = className + " flex justify-center items-center rounded-3xl text-white"

    return guild?.icon ? (
        <img className={`${className} bg-dark`} src={guild.icon} height={size} width={size} />
    ) : (
        <div
            className={`${className} text-[${size / 4}px] font-bold bg-discord`}
            style={{
                ["height" as any]: `${size}px`,
                ["width" as any]: `${size}px`,
                ["font-size" as any]: `${Math.max(12, size / 4)}px`,
            }}>
            {guild?.name && <span>{getInitials(guild.name).substring(0, 3)}</span>}
        </div>
    )
}

export default GuildIcon
