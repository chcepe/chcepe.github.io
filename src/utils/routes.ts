import Home from "pages/index";
import Projects from "pages/projects";
import Project from "pages/project";

const ROUTES = {
  HOME: {
    path: "/",
    component: Home,
    exact: true,
  },
  PROJECTS: {
    path: "/projects",
    component: Projects,
    exact: true,
  },
  PROJECT_ID: {
    path: "/projects/:id",
    component: Project,
    exact: false,
  },
};

export default ROUTES;
