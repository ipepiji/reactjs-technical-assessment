import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import OneColumnLayout from "layouts/OneColumnLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="*" element={<OneColumnLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
