export default interface Guild {
    bot: boolean // Bot exists in the guild or not
    id: number
    name: string
    invite: string
    icon?: string
}

export interface DetailedGuild extends Guild {
    prefixes: string[]
}

export interface GuildDashboardParams {
    id: number
}
