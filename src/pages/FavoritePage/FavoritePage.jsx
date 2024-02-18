import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "redux/selectors";
import { CarsList } from "components/CarsList/CarsList";
import css from "./FavoritePage.module.css";

const FavoritePage = () => {
  const cars = useSelector(selectFavorites);
  // console.log(cars);
  return (
    <>
      <div className={css.stub}></div>
      <div className={css.favorContainer}>
        <CarsList cars={cars} />
      </div>
    </>
  );
};

export default FavoritePage;
