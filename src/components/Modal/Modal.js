/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onModalClose, car }) => {
  const onEscape = (e) => {
    if (e.code === "Escape") {
      onModalClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onEscape);
  }, []);
  useEffect(() => {
    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeModalBtn} onClick={onModalClose}>
          X
        </button>
        <div className={css.carContainer}>
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
          <p className={css.descr}>{car.description}</p>
          <h4 className={css.infoTitle}>Accessories and functionalities:</h4>
          <p className={css.carInfo}>
            <span>{car.accessories[0]}</span>
            <span>|</span>
            <span>{car.accessories[1]}</span>
            <span>|</span>
            <span>{car.accessories[2]}</span>
          </p>
          <p className={css.carInfo}>
            <span>{car.functionalities[0]}</span>
            <span>|</span>
            <span>{car.functionalities[1]}</span>
            <span>|</span>
            <span>{car.functionalities[2]}</span>
          </p>
          <h4 className={css.infoTitle}>Rental Conditions: </h4>
          <div className={css.rentalContainer}>
            <span className={css.rentalItem}>
              Minimum age :{" "}
              <span className={css.number}>
                {new Date().getFullYear() - car.year}
              </span>
            </span>
            <span className={css.rentalItem}>
              {car.rentalConditions.split("\n")[1]}
            </span>
            <span className={css.rentalItem}>
              {car.rentalConditions.split("\n")[2]}
            </span>
            <span className={css.rentalItem}>
              Mileage:{" "}
              <span className={css.number}>
                {car.mileage.toLocaleString("en-US")}
              </span>
            </span>
            <span className={css.rentalItem}>
              Price: <span className={css.number}>{car.rentalPrice}</span>
            </span>
          </div>
        </div>
        <button className={css.rentBtn}>Rental car</button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
