import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menu";
import cityReducer from "./reducers/currentCity";
import { citiesApi } from "../api/cities";

export const rootReducer = combineReducers({
  menu: menuReducer,
  [citiesApi.reducerPath]: citiesApi.reducer,
  city: cityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
