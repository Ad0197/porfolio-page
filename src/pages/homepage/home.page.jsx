import React from "react";
import Portrait from "../../component/portrait/portrait.component";
import ServiceView from "../../component/service-view/service-view.component";

import { PageContainer } from "./home.styles";
const HomePage = () => {
  return (
    <div>
      <Portrait />
      <PageContainer>
        <ServiceView />
      </PageContainer>
    </div>
  );
};

export default HomePage;
