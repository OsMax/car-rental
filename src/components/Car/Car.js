import css from "./Car.module.css";
import { addCar, removeCar } from "redux/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "redux/selectors";
import { useState, useEffect } from "react";

export const Car = ({ car }) => {
  const dispatch = useDispatch();
  const favoritCars = useSelector(selectFavorites);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const check = favoritCars.find(({ id }) => id === car.id);
    if (check) setLike(true);
  });

  const putLike = (e) => {
    e.preventDefault();
    const check = favoritCars.find(({ id }) => id === car.id);
    if (!check) dispatch(addCar(car));
    else {
      dispatch(removeCar(car.id));
      setLike(false);
    }
  };
  return (
    <li className={css.item}>
      <div className={css.carContainer}>
        <button onClick={putLike} className={like && css.like}>
          like
        </button>
        <img
          className={css.img}
          src={car.img ? car.img : require("../../images/no-img.jpg")}
          alt={car.model}
        />
        <h3>
          {car.make} {car.model} {car.year}
        </h3>
        <p>{car.address}</p>
      </div>
    </li>
  );
};
