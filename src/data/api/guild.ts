import { FetchMethodType } from "@/model/enum/meta"
import Guild, { DetailedGuild } from "@/model/guild"

export const fetchManagedGuilds = async (): Promise<Guild[]> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/@me/managed-guilds`, {
        credentials: "include",
    })
    return await resp.json()
}

export const fetchGuildStats = async (guildId: number): Promise<DetailedGuild> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/guilds/${guildId}/stats`, {
        credentials: "include",
    })
    return await resp.json()
}

export const manageGuildPrefix = async (
    guildId: number,
    prefix: string,
    type: FetchMethodType,
): Promise<DetailedGuild> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/guilds/${guildId}/prefix`, {
        method: type,
        credentials: "include",
        body: JSON.stringify({
            prefix: prefix,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    return await resp.json()
}
