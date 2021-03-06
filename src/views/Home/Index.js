import Layout from "./../../components/Layout/Layout";
import React from "react";
import Aboutemersion from "./AboutEmersion";
import Contact from "./Contact";
import OurRecentProjects from "./OurRecentProjects";
import OurServices from "./OurServices";
import Trustedby from "./TrustedBy";
import Header from "./header";
function Index() {
  return (
    <div>
      <Layout>
        <Header />
        <OurServices />
        <Aboutemersion />
        <OurRecentProjects />
        <Trustedby />
        <Contact />
      </Layout>
    </div>
  );
}
export default Index;
