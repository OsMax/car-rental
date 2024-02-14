import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const CarsPage = lazy(() => import("./pages/CarsPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={HomePage} />
        <Route path="cars" element={CarsPage} />
        <Route path="favorite" element={FavoritePage} />
      </Route>
    </Routes>
  );
}

export default App;
