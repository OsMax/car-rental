import { useState, useEffect } from "react";
import { getCarsAPI } from "../../API/carsAPI";
import { CarsList } from "../../components/CarsList/CarsList";
import { Filter } from "components/Filter/Filter";
import css from "./CarsPages.module.css";
// import { useSearchParams } from "react-router-dom";

const CarsPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    getCars(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function getCars() {
    getCarsAPI(page).then((data) => {
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
      setSearchParams(filter);
      getCarsAPI(0, filter).then((data) => setCars([...data]));
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
