import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface MetaState {
    botOnline?: boolean
    nexusOnline?: boolean
}

const initialState: MetaState = {
    botOnline: undefined,
    nexusOnline: undefined,
}

export const metaSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setBotOnlineStatus: (state, newStatus: PayloadAction<boolean>) => {
            state.botOnline = newStatus.payload
        },
        setNexusOnlineStatus: (state, newStatus: PayloadAction<boolean>) => {
            state.nexusOnline = newStatus.payload
        },
    },
})

export const { setBotOnlineStatus, setNexusOnlineStatus } = metaSlice.actions

export default metaSlice.reducer
