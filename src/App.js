import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={BlogPage}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
