import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "redux/selectors";

const FavoritePage = () => {
  const cars = useSelector(selectFavorites);
  // console.log(cars);
  return (
    <>
      <div>
        {cars.map((car) => {
          return <p>{car.model}</p>;
        })}
      </div>
    </>
  );
};

export default FavoritePage;
