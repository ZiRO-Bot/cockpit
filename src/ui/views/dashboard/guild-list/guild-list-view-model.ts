import { fetchManagedGuilds as _fManagedGuilds } from "@/data/api/guild"
import { selectIsLoggedIn } from "@/data/redux/auth"
import { useSelector } from "@/lib/hooks/typed-redux"
import Guild from "@/model/guild"
import { useState } from "react"

interface GuildListViewModel {
    guilds: Guild[] | undefined
    fetchManagedGuilds: () => void
}

const useGuildListViewModel: () => GuildListViewModel = () => {
    const [guilds, setGuilds] = useState(undefined as Guild[] | undefined)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const fetchManagedGuilds = () => {
        if (!isLoggedIn) return
        if (!guilds) _fManagedGuilds().then((guilds) => setGuilds(guilds))
    }

    return {
        guilds,
        fetchManagedGuilds,
    }
}

export default useGuildListViewModel
