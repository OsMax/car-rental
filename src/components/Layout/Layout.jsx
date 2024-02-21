import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={css.link} to="/favorite">
          Favorite
        </NavLink>
      </header>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
