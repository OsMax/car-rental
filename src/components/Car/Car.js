import css from "./Car.module.css";
import { addCar, removeCar } from "redux/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "redux/selectors";

export const Car = ({ car }) => {
  const dispatch = useDispatch();
  const favoritCars = useSelector(selectFavorites);

  const putLike = (e) => {
    e.preventDefault();
    const check = favoritCars.find(({ id }) => id === car.id);
    if (!check) dispatch(addCar(car));
    else dispatch(removeCar(car.id));
  };
  return (
    <li className={css.item}>
      <button onClick={putLike}>like</button>
      <img
        className={css.img}
        src={car.img ? car.img : require("../../images/no-img.jpg")}
        alt={car.model}
      />
      <h3>
        {car.make} {car.model} {car.year}
      </h3>
      <p>{car.address}</p>
    </li>
  );
};
