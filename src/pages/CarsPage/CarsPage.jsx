import { useState, useEffect } from "react";
import { getCarsByPage } from "../../API/carsAPI";
// import { Car } from "../../components/Car/Car";
import { CarsList } from "../../components/CarsList/CarsList";
import { Filter } from "components/Filter/Filter";
import css from "./CarsPages.module.css";

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    getCars();
  }, [page]);

  function getCars() {
    getCarsByPage(page).then((data) => {
      if (data.length === 12) setShowMore(true);
      else setShowMore(false);
      setCars([...cars, ...data]);
    });
  }

  const onShowMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <>
      <div className={css.filterComtainer}>
        <Filter />
      </div>
      <div className={css.carsContainer}>
        {cars.length > 0 && <CarsList cars={cars} />}
        {showMore && (
          <button className={css.showMore} onClick={onShowMore}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default CarsPage;
