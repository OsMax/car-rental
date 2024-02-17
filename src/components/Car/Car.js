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
  });

  const putLike = (e) => {
    e.preventDefault();
    const check = favoritCars.find(({ id }) => id === car.id);
    if (!check) dispatch(addCar(car));
    else {
      dispatch(removeCar(car.id));
      setLike(css.unlike);
    }
  };

  const onModalOpen = (e) => {
    if (!modalIsOpen) {
      setModalIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };
  const onModalClose = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "scroll";
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
        <h3>
          {car.make} {car.model} {car.year}
        </h3>
        <p>{car.address}</p>
        <button onClick={onModalOpen}>Show info</button>
        {modalIsOpen && <Modal onModalClose={onModalClose} car={car} />}
      </div>
    </li>
  );
};
