"use server"

import { OptionsType } from "cookies-next/lib/types"
import { cookies } from "next/headers"

export const getServerCookie = (key: string) => {
    return cookies().get(key)?.value
}

export const setServerCookie = (key: string, value: any, options?: OptionsType) => {
    return cookies().set(key, value, options)
}
