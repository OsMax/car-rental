import { useState, useEffect } from "react";
import { getCarsByPage, getCarsByFilter } from "../../API/carsAPI";
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
      if (page === 1) setCars([...data]);
      else setCars([...cars, ...data]);
    });
  }

  const onShowMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const onFilterSubmit = (filter) => {
    setShowMore(false);
    setPage(1);
    if (filter) {
      getCarsByFilter(filter).then((data) => setCars([...data]));
    } else {
      setCars([]);
      getCars();
    }
  };

  return (
    <>
      <div className={css.filterComtainer}>
        <Filter onFilterSubmit={onFilterSubmit} />
      </div>
      <div className={css.carsContainer}>
        {cars.length > 0 && <CarsList cars={cars} />}
        {showMore && (
          <div className={css.showMoreCont}>
            <button className={css.showMore} onClick={onShowMore}>
              Load more
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CarsPage;
