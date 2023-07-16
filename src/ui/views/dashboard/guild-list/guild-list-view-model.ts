import { fetchManagedGuilds as _fManagedGuilds } from "@/data/api/guild"
import Guild from "@/model/guild"
import { useState } from "react"

interface GuildListViewModel {
    guilds: Guild[]
    fetchManagedGuilds: () => void
}

const useGuildListViewModel: () => GuildListViewModel = () => {
    const [guilds, setGuilds] = useState([] as Guild[])

    const fetchManagedGuilds = () => {
        if (guilds.length <= 0) _fManagedGuilds().then((guilds) => setGuilds(guilds))
    }

    return {
        guilds,
        fetchManagedGuilds,
    }
}

export default useGuildListViewModel
