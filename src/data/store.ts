import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./redux/auth"
import { counterSlice } from "./redux/counter"
import { metaSlice } from "./redux/meta"

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
        meta: metaSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
