export const selectFavorites = (state) =>
  state.persistedReducer.favoriteCars.favorite;

export const selectCars = (state) => state.persistedReducer.cars.cars;
