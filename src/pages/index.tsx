import Header from "components/Header";
import Layout from "components/Layout";
import Blogs from "containers/Blogs";
import Footer from "containers/Footer";
import Hello from "containers/Hello";
import Projects from "containers/Projects";
import { homeProjects } from "lib/projects";

const IndexPage = () => {
  return (
    <Layout
      fixedHeader={false}
      header={<Header withBack={false} />}
      title="Ahoj!"
    >
      <Hello />
      <Projects
        title="Projects"
        desc="Some of the projects I've worked on"
        projects={homeProjects}
        viewAll
      />
      <Blogs />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
