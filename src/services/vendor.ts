// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const vendorApi = createApi({
  reducerPath: "vendorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: (builder) => ({
    addStore: builder.mutation({
      query: ({ store, token }) => ({
        url: `/stores`,
        method: "POST",
        headers: {
          "x-auth-token": token,
        },
        body: store,
      }),
    }),
    getStores: builder.query({
      query: () => `/stores`,
    }),
    getVendorProducts: builder.query({
      query: (vendorId) => `/products/vendorProducts/${vendorId}`,
    }),
    addProduct: builder.mutation({
      query: ({ product, token }) => ({
        url: `/products`,
        method: "POST",
        headers: {
          "x-auth-token": token,
        },
        body: product,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddStoreMutation,
  useAddProductMutation,
  useGetStoresQuery,
  useGetVendorProductsQuery,
} = vendorApi;
