import axios from "axios";

axios.defaults.baseURL = "https://64e1615450713530432d1458.mockapi.io/adverts";

export const getCarsByPage = async (page = 1) => {
  const url = `?page=${page}&limit=12`;
  const { data } = await axios.get(url);
  return data;
};

export const getCarsToFilter = async (filter) => {
  //   if (filter.make) url.searchParams.append("make", filter.make);
  //   if (filter.rentalPrice)
  //     url.searchParams.append("rentalPrice", filter.rentalPrice);
  //   let { data } = await axios.get(url);
  //   if (filter.minMileage)
  //     data = data.filter((car) => car.mileage >= filter.minMileage);
  //   if (filter.maxMileage)
  //     data = data.filter((car) => car.mileage <= filter.maxMileage);
  //   return data;
};
