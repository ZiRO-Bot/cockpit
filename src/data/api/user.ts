import User from "@/model/user"

export const fetchUser = async (): Promise<User> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/@me`, {
        credentials: "include",
    })
    return await resp.json()
}
