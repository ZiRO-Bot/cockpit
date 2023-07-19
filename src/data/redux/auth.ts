import { LoadingState, LoadingStateType } from "@/model/loading"
import User from "@/model/user"
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCookie } from "cookies-next"
import { fetchUser as _fUser } from "../api/user"
import type { RootState } from "../store"

export interface AuthState {
    isLoggedIn?: boolean
    user: LoadingState<User | undefined>
}

const initialState: AuthState = {
    isLoggedIn: undefined,
    user: {
        data: undefined,
        status: LoadingStateType.INITIAL,
    },
}

export const fetchUser = createAsyncThunk("auth/fetchUser", async (): Promise<User> => {
    return await _fUser()
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        fetchFromCookie: (state) => {
            state.isLoggedIn = (getCookie("loggedIn") as boolean | undefined) || false
        },
        setIsLoggedIn: (state, newState: PayloadAction<boolean>) => {
            state.isLoggedIn = newState.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.user.status = LoadingStateType.LOADING
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                const newUser: LoadingState<User> = {
                    data: action.payload,
                    status: LoadingStateType.IDLE,
                }
                state.user = newUser
            })
    },
})

export const { fetchFromCookie, setIsLoggedIn } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer
