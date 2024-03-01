import css from "./Car.module.css";
import { addCar, removeCar } from "redux/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "redux/selectors";
import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";

export const Car = ({ car }) => {
  const dispatch = useDispatch();
  const favoritCars = useSelector(selectFavorites);
  const [like, setLike] = useState(css.unlike);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const check = favoritCars.find((id) => id === car.id);
    if (check) setLike(css.like);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const putLike = (e) => {
    e.preventDefault();
    const check = favoritCars.find((id) => id === car.id);
    if (!check) {
      setLike(css.like);
      dispatch(addCar(car.id));
    } else {
      dispatch(removeCar(car.id));
      setLike(css.unlike);
    }
  };

  const onModalOpen = (e) => {
    if (!modalIsOpen) {
      setModalIsOpen(true);
    }
  };
  const onModalClose = (e) => {
    if (e.code === "Escape" || e.target.attributes.close) setModalIsOpen(false);
  };
  return (
    <li className={css.item}>
      <div className={css.carContainer}>
        <button onClick={putLike} className={css.likeButton + " " + like} />
        <div>
          <img
            className={css.img}
            src={car.img ? car.img : require("../../images/no-img.jpg")}
            alt={car.model}
            title={car.make + " " + car.model + " " + car.year}
          />
          <h3 className={css.carTitle}>
            <span>
              {car.make} <span className={css.model}>{car.model}</span>,{" "}
              {car.year}
            </span>
            <span>{car.rentalPrice}</span>
          </h3>
          <ul className={css.carInfo}>
            <li>{car.address.split(",")[1]}</li>
            <li>{car.address.split(",")[2]}</li>
            <li>{car.rentalCompany}</li>
            <li>{car.type}</li>
            <li>{car.model}</li>
            <li>{car.mileage}</li>
            <li>{car.accessories[0]}</li>
          </ul>
        </div>
        <button className={css.learnMore} onClick={onModalOpen}>
          Learn more
        </button>
        {modalIsOpen && <Modal onModalClose={onModalClose} car={car} />}
      </div>
    </li>
  );
};
