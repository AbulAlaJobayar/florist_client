import { TProduct } from "../../../types";
import { baseApi } from "../../api/baseApi";
type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};
type TData = {
  _id: string;
} & TProduct;
type TResponse = {
  success: boolean;
  message: string;
  data: TData[];
  meta: TMeta;
};
const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (userInfo) => ({
        url: "product/create-flower",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags:["product"]
    }),
    getAllProduct: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "product/flowers",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response.data,
          meta: response.meta,
        } as TResponse;
      },
      providesTags: ["product"],
    }),
    delateSingleProduct: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["product"],
    }),
    delateMultipleProduct: builder.mutation({
      query: (deleteInfo) => ({
        url: "product/delateMany",
        method: "POST",
        body: deleteInfo,
      }),
      invalidatesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response.data,
        } 
      },
    }),
    editProduct:builder.mutation({
      query:({id,productInfo})=>({
      url:`product/${id}`,
      method:'PATCH',
      body:productInfo
      }),
      invalidatesTags:['product'] as any
  }),
  addSale: builder.mutation({
    query: (saleInfo) => ({
      url: "sale/createSale",
      method: "POST",
      body: saleInfo,
    }),
    invalidatesTags:["product","sale"],
  
  }),
  getAllSell: builder.query({
    query: () => ({
        url: '/sale/allSales',
        method: 'GET'
    }),
    providesTags:['sale']
})
  }),
});
export const {
  useAddProductMutation,
  useGetAllProductQuery,
  useDelateSingleProductMutation,
  useDelateMultipleProductMutation,
  useGetSingleProductQuery,
  useEditProductMutation,
  useAddSaleMutation,
  useGetAllSellQuery,
} = productManagementApi;
