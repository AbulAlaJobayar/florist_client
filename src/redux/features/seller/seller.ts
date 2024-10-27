import { baseApi } from "../../api/baseApi";

const sellerManagementApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        totalSeller:builder.query({
        query: () => ({
        url: "user/total_seller",
        method: "GET",
        })
    })    
})
})
export const {useTotalSellerQuery}=sellerManagementApi