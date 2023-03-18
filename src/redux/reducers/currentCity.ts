import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentCityState {
  currentCity: string;
}

const initialState: CurrentCityState = {
  currentCity: localStorage.getItem("city") || "Москва",
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
  },
});
export const { changeCity } = citySlice.actions;

export default citySlice.reducer;
