import { configureStore, Store } from "@reduxjs/toolkit";
import { citiesApi } from "../api/cities";
import { cityMiddleware } from "./middlewares/city";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(citiesApi.middleware, cityMiddleware),
});

export type AppDispatch = typeof store.dispatch;
