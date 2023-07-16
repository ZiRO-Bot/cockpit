"use client"

import LandingLayout from "@/ui/layouts/landing"
import protectedView from "@/ui/protected"

const GuildListView = () => {
    return (
        <div className="mx-5 flex flex-col items-center justify-center">
            <h1>Select a server</h1>
        </div>
    )
}

export default protectedView(GuildListView, LandingLayout)
