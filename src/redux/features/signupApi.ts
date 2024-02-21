import { baseApi } from "../api/baseApi"

const authApi= baseApi.injectEndpoints({
    endpoints: (builder) =>({
        signup:builder.mutation({
            query:(userInfo)=>({
            url:'user/register',
            method:'POST',
            body:userInfo
            })
        })
    })
})
export const {useSignupMutation}=authApi