// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: (builder) => ({
    updateToCart: builder.mutation({
      query: ({ cartItems }) => ({
        url: `/orders/addToCart`,
        method: "POST",
        headers: {
          "x-auth-token": JSON.parse(localStorage.getItem("userInfo")!).token,
        },
        body: {
          cartItems,
          userId: JSON.parse(localStorage.getItem("userInfo")!).id,
        },
      }),
    }),
    placeOrder: builder.mutation({
      query: () => ({
        url: `/orders`,
        method: "POST",
        headers: {
          "x-auth-token": JSON.parse(localStorage.getItem("userInfo")!).token,
        },
        body: { userId: JSON.parse(localStorage.getItem("userInfo")!).id },
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
export const { useUpdateToCartMutation, usePlaceOrderMutation } = orderApi;
