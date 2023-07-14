import { createSlice } from "@reduxjs/toolkit"
import { getCookie } from "cookies-next"
import type { RootState } from "../store"

export interface AuthState {
    isLoggedIn?: boolean
}

const initialState: AuthState = {
    isLoggedIn: undefined,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        fetchFromCookie: (state) => {
            state.isLoggedIn = getCookie("loggedIn") as boolean
        },
    },
})

export const { fetchFromCookie } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth.isLoggedIn

export default authSlice.reducer
