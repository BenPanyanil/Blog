import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <div className="headingBG"></div>
      <NavBar />
      <Heading />
    </>
  );
}

export default App;
