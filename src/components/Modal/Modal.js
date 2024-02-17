/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onModalClose, car }) => {
  console.log(car);
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
    <div className={css.overlay} onClick={onModalClose}>
      <div className={css.modal}>
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
    </div>,
    modalRoot
  );
};

export default Modal;
