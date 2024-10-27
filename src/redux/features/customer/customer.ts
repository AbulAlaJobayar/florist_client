import { baseApi } from "../../api/baseApi";

const customerManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCustomer: builder.query({
      query: () => ({
        url: "customer/customers",
        method: "GET",
      }),
    }),
    getTotalCustomer: builder.query({
      query: () => ({
        url: "customer/total_customer",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllCustomerQuery,useGetTotalCustomerQuery } = customerManagementApi;
