import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "../features/auth/authSlice";
import { vendorApi } from "../services/vendor";
import { cartSlice } from "../features/buyer/cartSlice";
import { orderApi } from "../services/order";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [vendorApi.reducerPath]: vendorApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      vendorApi.middleware,
      orderApi.middleware,
    ),
});
setupListeners(store.dispatch);
export default store;
