import css from "./HomePage.module.css";

const HomePage = () => {
  // getCar();
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeTitle}>
        Start your unforgettable journey with our <br /> car rental service
        <br />
        <span className={css.nomeTitlrSpan}>
          Go to catalog and choice a car
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
