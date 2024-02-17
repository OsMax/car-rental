import { useState, useEffect } from "react";
import { getCarsByPage } from "../../API/carsAPI";
import { Car } from "../../components/Car/Car";
import css from "./CarsPage.module.css";

const CarsPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCarsByPage(1).then((data) => {
      setCars([...cars, ...data]);
    });
  }, []);

  return (
    <>
      <div>
        <form>
          <select>
            <option value="maker1">maker1</option>
            <option value="maker2">maker2</option>
          </select>
          <select>
            <option value="price1">price1</option>
            <option value="price2">price2</option>
          </select>
          <input />
          <input />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <ul className={css.carsList}>
          {cars.length > 0 &&
            cars.map((car) => {
              return <Car key={car.id} car={car} />;
            })}
        </ul>
      </div>
    </>
  );
};

export default CarsPage;
