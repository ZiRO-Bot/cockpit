"use client"

import { SectionType } from "@/model/enum/section"
import ProtectedLayout from "@/ui/layouts/protected"

const GuildListView = () => {
    return (
        <ProtectedLayout sectionType={SectionType.LANDING}>
            <h1>Hello World</h1>
        </ProtectedLayout>
    )
}

export default GuildListView
