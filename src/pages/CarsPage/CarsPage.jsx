import { useState, useEffect } from "react";
import { getCarsByPage } from "../../API/carsAPI";
import { Car } from "../../components/Car/Car";
import { CarsList } from "../../components/CarsList/CarsList";

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    getCars();
  }, [page]);

  function getCars() {
    getCarsByPage(page).then((data) => {
      console.log(data.length);
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
        <form>
          <select>
            <option value="maker1">maker1</option>
            <option value="maker2">maker2</option>
          </select>
          <select>
            <option value="price1">price1</option>
            <option value="price2">price2</option>
          </select>
          <input />
          <input />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {cars.length > 0 && <CarsList cars={cars} />}
        {showMore && <button onClick={onShowMore}>SHOW MORE</button>}
      </div>
    </>
  );
};

export default CarsPage;
