import Guild from "@/model/guild"

export const fetchManagedGuilds = async (): Promise<Guild[]> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/@me/managed-guilds`, {
        credentials: "include",
    })
    return await resp.json()
}
