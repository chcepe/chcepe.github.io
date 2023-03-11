import Layout from "components/Layout";
import AboutMe from "containers/AboutMe";
import Blogs from "containers/Blogs";
import Hello from "containers/Hello";
import Work from "containers/Work";

const IndexPage = () => {
  return (
    <Layout title="Hello!">
      <Hello />
      <AboutMe />
      <Work />
      <Blogs />
    </Layout>
  );
};

export default IndexPage;
