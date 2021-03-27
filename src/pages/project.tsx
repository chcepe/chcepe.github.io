import { FC } from "react";
import { Redirect, useParams } from "react-router";

import SingleProject from "containers/SingleProject";
import { allProjects } from "lib/projects";

const ProjectPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = allProjects.find((project) => project.id === id);
  if (!project) return <Redirect to="/" />;
  return <SingleProject {...project} />;
};

export default ProjectPage;
