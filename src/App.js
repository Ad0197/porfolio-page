import React from "react";
 import { Switch, Route } from "react-router-dom";
import Header from "./component/header/header.component";
import { GlobalStyle } from "./global.styles";
import HomePage from './pages/homepage/home.page';
import Footer from "./component/footer/footer.component";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
        <Footer/>
    </div>
  );
};

export default App;
