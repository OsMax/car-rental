/* eslint-disable react-hooks/exhaustive-deps */
import { CarsList } from "components/CarsList/CarsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "redux/operetion";
import { selectFavorites, selectCars } from "redux/selectors";
import css from "./FavoritePage.module.css";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const fCars = useSelector(selectFavorites);
  const allCars = useSelector(selectCars);

  const cars = allCars.filter(({ id }) => fCars.includes(id));

  useEffect(() => {
    dispatch(getCars({ page: 0 }));
  }, []);

  return (
    <>
      <div className={css.stub}></div>
      <div className={css.favorContainer}>
        <CarsList cars={cars} />
        {cars.length === 0 && <h4>There are no car in favorites</h4>}
      </div>
    </>
  );
};

export default FavoritePage;
