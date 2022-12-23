import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

export interface IUser {
    _id: string,
    username: string,
    email: string,
    avatar: string,
    isAdmin: boolean,
    bio: string,
    blockList: string[],
    isDeactivated: boolean,
    isBlocked: boolean,
}

const initialState = {
    user: {} as IUser,
    isAuthenticated: false
}

export const { actions, reducer } = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        authenticated: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        revoked: () => {
            return initialState
        }
    }
})

export const userSelector   = (state: RootState) => state.authentication.user
export const authenSelector = (state: RootState) => state.authentication.isAuthenticated




