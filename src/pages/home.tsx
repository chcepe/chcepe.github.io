import Layout from "components/Layout";
import AboutMe from "containers/AboutMe";
import Blogs from "containers/Blogs";
import Footer from "containers/Footer/Footer";
import Hello from "containers/Hello";
import Projects from "containers/Projects/Projects";
import Videos from "containers/Videos";
import Work from "containers/Work";

const Home = () => (
  <Layout title="Hello!">
    <Hello />
    <AboutMe />
    <Work />
    <Projects />
    <Blogs />
    <Videos />
    <Footer />
  </Layout>
);

export default Home;
