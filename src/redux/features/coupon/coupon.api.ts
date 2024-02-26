import { baseApi } from "../../api/baseApi";

const couponManagementApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        addCoupon:builder.mutation({
        query: (couponInfo) => ({
        url: "coupon/createCoupon",
        method: "POST",
        body: couponInfo,   
        })
    })    
})
})
export const {useAddCouponMutation}=couponManagementApi