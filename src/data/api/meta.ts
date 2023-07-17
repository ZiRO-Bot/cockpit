import Ping from "@/model/ping"

export const pingNexus = async (): Promise<Ping> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/ping`, {
        credentials: "include",
    })
    return await resp.json()
}
