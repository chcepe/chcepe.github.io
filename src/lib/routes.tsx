import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "pages/home";
import Project from "pages/project";

const AllRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>
  </HashRouter>
);

export default AllRoutes;
