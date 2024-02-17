import { Car } from "../../components/Car/Car";
import css from "./CarsList.module.css";

export const CarsList = ({ cars }) => {
  return (
    <>
      <ul className={css.carsList}>
        {cars.length > 0 &&
          cars.map((car) => {
            return <Car key={car.id} car={car} />;
          })}
      </ul>
    </>
  );
};
