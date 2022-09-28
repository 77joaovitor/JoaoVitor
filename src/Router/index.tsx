import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import TechFront from "../pages/TechFront";

const PagesRoute = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/TechFront"} element={<TechFront />} />
    </Routes>
  );
};

export default PagesRoute;
