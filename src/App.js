import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import PortfolioPage from "./components/PortofolioPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/blog" component={BlogPage}></Route>
        <Route path="/portfolio" component={PortfolioPage}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
