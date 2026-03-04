// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addToCart } from "../features/cart/cartSlice";

// Define a service using a base URL and expected endpoints
export const vendorApi = createApi({
  reducerPath: "vendorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ cartItems, token, userId }) => ({
        url: `/orders/addToCart`,
        method: "POST",
        headers: {
          "x-auth-token": token,
        },
        body: { userId, cartItems },
      }),
    }),
    getCartItems: builder.query({
      query: (userId) => `/orders/cart/${userId}`,
    }),
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
  useAddToCartMutation,
  useGetCartItemsQuery,
} = vendorApi;
