import Layout from "components/Layout";
import AboutMe from "containers/AboutMe";
import Blogs from "containers/Blogs";
import Hello from "containers/Hello";
import Videos from "containers/Videos";
import Work from "containers/Work";

const IndexPage = () => {
  return (
    <Layout title="Hello!">
      <Hello />
      <AboutMe />
      <Work />
      <Blogs />
      <Videos />
    </Layout>
  );
};

export default IndexPage;
