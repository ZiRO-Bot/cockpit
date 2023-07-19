import { FetchMethodType } from "@/model/enum/meta"
import User from "@/model/user"

export const fetchUser = async (): Promise<User> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/@me`, {
        credentials: "include",
    })
    return await resp.json()
}

export const logOut = async (): Promise<User> => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
        method: FetchMethodType.POST,
        credentials: "include",
    })
    return await resp.json()
}
