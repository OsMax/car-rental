import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "redux/selectors";
import { CarsList } from "components/CarsList/CarsList";

const FavoritePage = () => {
  const cars = useSelector(selectFavorites);
  // console.log(cars);
  return (
    <>
      <div>
        <CarsList cars={cars} />
      </div>
    </>
  );
};

export default FavoritePage;
