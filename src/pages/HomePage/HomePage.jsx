import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  // getCar();
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeTitle}>
        Start your unforgettable journey with our <br /> car rental service
      </h1>
      <NavLink className={css.homeLink} to="/cars">
        Catalog
      </NavLink>
    </div>
  );
};

export default HomePage;
