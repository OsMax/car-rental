import axios from "axios";
import { NavLink } from "react-router-dom";

// axios.defaults.baseURL =
//   "https://64e1615450713530432d1458.mockapi.io/cars" +
//   "?completed=false&page=1&limit=10";

// const url = new URL("https://64e1615450713530432d1458.mockapi.io/adverts");
// url.searchParams.append("page", 2);
// url.searchParams.append("limit", 10);
// // url.searchParams.append("make", "Volvo");

// const getCar = async () => {
//   const { data } = await axios.get(url);
//   console.log(data);
// };

const HomePage = () => {
  // getCar();
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
