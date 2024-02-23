import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operetion";

const initialState = {
  cars: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(getCars.pending, (state) => {
        console.log("pending");
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        console.log({ payload });
      })
      .addCase(getCars.rejected, (state, { payload }) => {
        console.log("ERROR!!!");
      });
  },
});

export default carsSlice.reducer;
