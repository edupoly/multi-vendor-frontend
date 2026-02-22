import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "../features/auth/authSlice";
import { vendorApi } from "../services/vendor";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [vendorApi.reducerPath]: vendorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, vendorApi.middleware),
});
setupListeners(store.dispatch);
export default store;
