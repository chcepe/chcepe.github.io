import Header from "components/Header";
import Layout from "components/Layout";
import Hello from "containers/Hello";

const IndexPage = () => {
  return (
    <Layout
      fixedHeader={false}
      header={<Header withBack={false} />}
      title="Ahoj!"
    >
      <Hello />
    </Layout>
  );
};

export default IndexPage;
