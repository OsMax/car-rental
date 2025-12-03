/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CarsList } from "../../components/CarsList/CarsList";
import { Filter } from "components/Filter/Filter";
import { selectCars } from "redux/selectors";
import { getCars } from "redux/operetion";
import css from "./CarsPages.module.css";

const CarsPage = () => {  
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(true);
  const [filter, setFilter] = useState(null);
  const cars = useSelector(selectCars);
  useEffect(() => {
    dispatch(getCars({ page, filter }));
  }, [page, filter]);

  const onShowMore = (e) => {
    e.preventDefault();
    if (cars.length < page * 12) setShowMore(false);
    setPage(page + 1);
  };

  const onFilterSubmit = (filter) => {
    if (filter) {
      setShowMore(false);
      setFilter(filter);
      setPage(1);
    } else {
      setShowMore(true);
    }
  };

  return (
    <>
      <section className={css.filterComtainer}>
        <Filter onFilterSubmit={onFilterSubmit} />
      </section>
      <section className={css.carsContainer}>
        {cars.length > 0 && <CarsList cars={cars} />}
        {showMore && (
          <div className={css.showMoreCont}>
            <button className={css.showMore} onClick={onShowMore}>
              Load more
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default CarsPage;
