import React from "react";
import { Route } from "react-router-dom";
import Header from "./component/header/header.component";
import { GlobalStyle, MainContainer, SwitchContainer } from "./global.styles";
import HomePage from "./pages/homepage/home.page";
import ServicePage from "./pages/servicepage/service.page";
import Footer from "./component/footer/footer.component";
import TechnologyPage from "./pages/technology-page/technology.page";
import ProjectPage from "./pages/proyect-page/project.page";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <SwitchContainer>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="/tech" component={TechnologyPage} />
          <Route exact path="/project" component={ProjectPage} />
        </SwitchContainer>
        <Footer />
      </MainContainer>
    </div>
  );
};

export default App;
