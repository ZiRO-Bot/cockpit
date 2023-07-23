"use client"

import { fetchGuildStats, manageGuildPrefix } from "@/data/api/guild"
import { COMMON_TW } from "@/lib/constants"
import { FetchMethodType } from "@/model/enum/meta"
import { GuildDashboardParams } from "@/model/guild"
import Button from "@/widget/buttons/button"
import { Spinner } from "@/widget/spinner"
import { FormEvent, useEffect, useState } from "react"

const MetaView = ({ params }: { params: GuildDashboardParams }) => {
    const [prefixes, setPrefixes] = useState(undefined as string[] | undefined)

    const managePrefix = async (event: FormEvent<any>, type: number) => {
        event.preventDefault()
        const prefix = event.currentTarget.prefix.value
        if (!prefix) {
            alert("Prefix can't be empty string!")
            return false
        }

        const rt = await manageGuildPrefix(
            params.id,
            prefix,
            type == 0 ? FetchMethodType.PUT : FetchMethodType.DELETE,
        )
        if (rt.prefixes === undefined) return false

        setPrefixes(rt.prefixes)
        return true
    }

    useEffect(() => {
        if (prefixes) return
        fetchGuildStats(params.id).then((guild) => setPrefixes(guild.prefixes))
    }, [])

    if (!prefixes) return <Spinner />
    return (
        <>
            <div>
                <div>
                    {prefixes.length >= 1 ? (
                        <ul>
                            {prefixes.map((prefix) => (
                                <li>
                                    <div>
                                        <a>{prefix}</a>
                                        <form onSubmit={async (event) => managePrefix(event, 1)}>
                                            <input
                                                type="text"
                                                id="prefix"
                                                name="prefix"
                                                value={prefix}
                                                hidden={true}
                                                readOnly={true}
                                            />
                                            <Button>X</Button>
                                        </form>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <a>No custom prefixes</a>
                    )}
                </div>
                <form onSubmit={async (event) => managePrefix(event, 0)}>
                    <input
                        className={`dark:bg-dark ${COMMON_TW.BORDER_LIKE_SHADOW_BTN}`}
                        type="text"
                        id="prefix"
                        name="prefix"
                    />
                    <Button>Add</Button>
                </form>
            </div>
        </>
    )
}

export default MetaView
