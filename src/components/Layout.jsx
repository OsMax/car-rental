import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/favorite">favorite</NavLink>
        <div></div>
        <NavLink to="/cars">cars</NavLink>
      </header>
      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
