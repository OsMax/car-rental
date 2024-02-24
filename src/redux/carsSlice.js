import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operetion";

const initialState = {
  cars: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {})
      .addCase(getCars.fulfilled, (state, { payload }) => {
        const { data, page } = payload;
        if (page <= 1) {
          state.cars = data;
        } else {
          state.cars = [...state.cars, ...data];
        }
      })
      .addCase(getCars.rejected, (state, { payload }) => {
        console.log("ERROR!!!");
      });
  },
});

export default carsSlice.reducer;
