import { TProduct } from "../../../types";
import { baseApi } from "../../api/baseApi";
type TMeta={
    page:number;
    limit: number;
    total: number;
    totalPage: number;
}
type TData={
    _id:string,
} & TProduct
type TResponse={
    success:boolean;
    message:string;
    data:TData[];
    meta:TMeta;
    
}
const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (userInfo) => ({
        url: "product/create-flower",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllProduct: builder.query({
      query: (args) => {
        const params=new URLSearchParams()
        console.log(args)
        if(args){
            args.forEach((item: { name: string; value: string; })=> {
              params.append(item.name,item.value)
            });
        }
        return {
        url: "product/flowers",
        method: "GET",
        params:params
      }},
      transformResponse: (response:any) => {
        return {
          data: response.data,
          meta: response.meta,
        }as TResponse
      },
    }),
  }),
});
export const { useAddProductMutation, useGetAllProductQuery } =
  productManagementApi;
