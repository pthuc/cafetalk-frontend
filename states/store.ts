import { configureStore } from "@reduxjs/toolkit"
import { reducer as authentication } from "./authentication"

export const store = configureStore({
    reducer: {
        authentication,
    }
})

export type RootState = ReturnType<typeof store.getState>