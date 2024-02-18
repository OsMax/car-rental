import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addCar(state, action) {
      state.favorite = [...state.favorite, action.payload];
    },
    removeCar(state, action) {
      state.favorite = state.favorite.filter(
        (car) => car.id !== action.payload
      );
    },
  },
});

export const { addCar, removeCar } = favoriteSlice.actions;
export const carReduser = favoriteSlice.reducer;