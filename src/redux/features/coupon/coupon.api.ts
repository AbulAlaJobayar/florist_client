import { baseApi } from "../../api/baseApi";

const couponManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCoupon: builder.mutation({
      query: (couponInfo) => ({
        url: "coupon/createCoupon",
        method: "POST",
        body: couponInfo,
      }),
    }),
    totalCoupon:builder.query({
       query:()=>({
        url:"coupon/total_coupon",
        method:"GET",
       }) 
    })
  }),
});
export const { useAddCouponMutation,useTotalCouponQuery } = couponManagementApi;
