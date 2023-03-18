import { Middleware } from "@reduxjs/toolkit";
import { changeCity } from "../reducers/currentCity";
import { RootState } from "../rootReducer";

export const cityMiddleware: Middleware<{}, RootState> =
  (state) => (next) => (action) => {
    const result = next(action);
    if (changeCity.match(action)) {
      const { currentCity } = state.getState().city;
      localStorage.setItem("city", currentCity);
    }
    return result;
  };
