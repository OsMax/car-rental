import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: null,
  likeCars: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {},
});

export default carsSlice.reducer;
