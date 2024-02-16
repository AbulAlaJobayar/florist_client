import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


type TUser = {
    role: string;
    name: string;
}
type TAuth = {
    user: null | TUser,
    token: null | string
}
const initialState: TAuth = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null
            state.token = null

        }
    }
})
export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
export const useCurrentToken = (state: RootState) => state.auth.token
export const selectCurrentToken = (state: RootState) => state.auth.user