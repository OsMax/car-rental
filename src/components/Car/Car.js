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
    const check = favoritCars.find(({ id }) => id === car.id);
    if (check) setLike(css.like);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const putLike = (e) => {
    e.preventDefault();
    const check = favoritCars.find(({ id }) => id === car.id);
    if (!check) {
      setLike(css.like);
      dispatch(addCar(car));
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
        <img
          className={css.img}
          src={car.img ? car.img : require("../../images/no-img.jpg")}
          alt={car.model}
        />
        <h3 className={css.carTitle}>
          <span>
            {car.make} <span className={css.model}>{car.model}</span>,{" "}
            {car.year}
          </span>
          <span>{car.rentalPrice}</span>
        </h3>
        <p className={css.carInfo}>
          <span>{car.address.split(",")[1]}</span>
          <span>|</span>
          <span>{car.address.split(",")[2]}</span>
          <span>|</span>
          <span>{car.rentalCompany}</span>
        </p>
        <p className={css.carInfo}>
          <span>{car.type}</span>
          <span>|</span>
          <span>{car.model}</span>
          <span>|</span>
          <span>{car.mileage}</span>
          <span>|</span>
          <span>{car.accessories[0]}</span>
        </p>
        <button className={css.learnMore} onClick={onModalOpen}>
          Learn more
        </button>
        {modalIsOpen && <Modal onModalClose={onModalClose} car={car} />}
      </div>
    </li>
  );
};
