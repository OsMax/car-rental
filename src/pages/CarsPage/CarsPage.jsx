import { useState, useEffect } from "react";
import { getCarsByPage } from "../../API/carsAPI";
// import { Car } from "../../components/Car/Car";
import { CarsList } from "../../components/CarsList/CarsList";
import { Filter } from "components/Filter/Filter";

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

  const onShowMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div>
        <Filter />
      </div>
      <div>
        {cars.length > 0 && <CarsList cars={cars} />}
        {showMore && <button onClick={onShowMore}>SHOW MORE</button>}
      </div>
    </>
  );
};

export default CarsPage;
