import { baseApi } from "../../api/baseApi";

const sellerManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    totalSeller: builder.query({
      query: () => ({
        url: "user/total_seller",
        method: "GET",
      }),
    }),
    seller: builder.query({
      query: ({ id }) => ({
        url: `user/${id}`,
        method: "GET",
      }),
    }),
    ProfileUpdate: builder.mutation({
      query: (data) => ({
        url: "user/update",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["me"] as any,
    }),
    getMe: builder.query({
      query: () => ({
        url: "user/my-profile",
        method: "GET",
      }),
      providesTags: ["me"] as any,
    }),
  }),
});
export const {
  useTotalSellerQuery,
  useSellerQuery,
  useProfileUpdateMutation,
  useGetMeQuery,
} = sellerManagementApi;
