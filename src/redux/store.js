import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productsSlice";
import categoriesReducer from "./features/categoriesSlice";
import { productsApi } from "./api/productsApi";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
