import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastError, toastSuccess } from "services/toastNotification";

export const getCarsList = createAsyncThunk(
  "water/add",
  async (data, thunkAPI) => {
    const { page, inList } = data;
    try {
      const { data } = await axios.post();
      toastSuccess("Cars has been load");
      return data;
    } catch (error) {
      toastError("Sorry, something went wrong. Please, try again");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
