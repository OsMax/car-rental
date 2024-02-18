import axios from "axios";

axios.defaults.baseURL = "https://64e1615450713530432d1458.mockapi.io/adverts";

export const getCarsByPage = async (page = 1) => {
  const url = `?page=${page}&limit=12`;
  const { data } = await axios.get(url);
  return data;
};

export const getCarsByFilter = async (filter) => {
  let url = `?`;
  if (filter.brend) {
    url += `&make=${filter.brend}`;
  }
  const { data } = await axios.get(url);
  let tempData = data;
  if (filter.price) {
    tempData = tempData.filter((car) => car.rentalPrice <= filter.price);
  }
  if (filter.from) {
    tempData = tempData.filter((car) => car.mileage >= filter.from);
  }
  if (filter.to) {
    tempData = tempData.filter((car) => car.mileage <= filter.to);
  }
  return tempData;
};
