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
      state.favorite = state.favorite.filter((id) => id !== action.payload);
    },
  },
});

export const { addCar, removeCar } = favoriteSlice.actions;
export default favoriteSlice.reducer;
