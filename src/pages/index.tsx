import Layout from "components/Layout";
import AboutMe from "containers/AboutMe";
import Hello from "containers/Hello";
import Work from "containers/Work";

const IndexPage = () => {
  return (
    <Layout title="Hello!">
      <Hello />
      <AboutMe />
      <Work />
    </Layout>
  );
};

export default IndexPage;
