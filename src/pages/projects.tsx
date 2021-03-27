import { FC } from "react";

import Header from "components/Header";
import Layout from "components/Layout";
import Projects from "containers/Projects";
import { openSourceProjects, projects } from "lib/projects";

const ProjectsPage: FC = () => {
  return (
    <Layout title="Projects" header={<Header />}>
      <Projects
        title="Projects"
        desc="Some of my opensource projects written in TypeScript and React"
        projects={openSourceProjects}
      />
      <Projects title="Others" projects={projects} />
    </Layout>
  );
};

export default ProjectsPage;
