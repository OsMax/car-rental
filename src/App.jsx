// import { lazy, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
// import { fetchCars } from "./redux/operations";

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const CarsPage = lazy(() => import("./pages/CarsPage/CarsPage"));
// const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
// const Layout = lazy(() => import("./components/Layout/Layout"));
import HomePage from "pages/HomePage/HomePage";
import CarsPage from "pages/CarsPage/CarsPage";
import FavoritePage from "pages/FavoritePage/FavoritePage";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CarsPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
