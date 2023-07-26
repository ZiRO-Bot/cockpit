import Ping from "@/model/ping"
import { cookies } from "next/headers"

/**
 * Server Only!
 * @returns Ping
 */
export const pingNexus = async (): Promise<Ping | undefined> => {
    const session = cookies().get("user_session")
    const loggedIn = cookies().get("loggedIn")
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/ping`, {
        credentials: "include",
        cache: "no-cache",
        headers: {
            Cookie: `${session?.name}=${session?.value}; ${loggedIn?.name}=${loggedIn?.value}`,
        },
    })
    try {
        return await resp.json()
    } catch {
        return undefined
    }
}
