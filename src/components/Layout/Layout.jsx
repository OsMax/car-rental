import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";

const setAtive = ({ isActive }) => (isActive ? css.active : css.link);

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <section>
          <nav>
            <NavLink className={setAtive} to="/">
              Home
            </NavLink>
            <NavLink className={setAtive} to="/catalog">
              Catalog
            </NavLink>
            <NavLink className={setAtive} to="/favorite">
              Favorite
            </NavLink>
          </nav>
        </section>
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
