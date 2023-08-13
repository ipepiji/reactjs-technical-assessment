import { Routes, Route, Navigate } from "react-router-dom";

import Home from "pages/Home";
import FourOhFour from "pages/FourOhFour";

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate replace to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
};

export default ContentRoutes;
