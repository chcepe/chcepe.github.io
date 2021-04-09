import { FC } from "react";

import Header from "components/Header";
import Layout from "components/Layout";
import Videos from "containers/Videos";

const ProjectsPage: FC = () => {
  return (
    <Layout title="Videos" header={<Header />}>
      <Videos viewAll />
    </Layout>
  );
};

export default ProjectsPage;
