import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64e1615450713530432d1458.mockapi.io/adverts";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async ({ page, filter }, thunkAPI) => {
    try {
      if (page === 0) {
        const { data } = await axios.get();
        return { data, page };
      }
      if (!filter) {
        const url = `?page=${page}&limit=12`;
        const { data } = await axios.get(url);
        return { data, page };
      }

      let url = `?`;
      if (filter.brend) {
        url += `&make=${filter.brend}`;
      }

      const { data } = await axios.get(url);
      let tempData = data;
      if (filter.price) {
        tempData = tempData.filter(
          (car) =>
            Number(car.rentalPrice.slice(1)) <= Number(filter.price.slice(1))
        );
      }
      if (filter.from) {
        tempData = tempData.filter((car) => car.mileage >= filter.from);
      }
      if (filter.to) {
        tempData = tempData.filter((car) => car.mileage <= filter.to);
      }
      return { data: tempData, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
