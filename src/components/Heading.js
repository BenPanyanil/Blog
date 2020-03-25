import React, { Component } from "react";
import HeaderText from "./HeaderText";
import ProfileImg from "./ProfileImg";

export default class Heading extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-lg-4">
          <HeaderText />
          <ProfileImg />
        </div>
      </div>
    );
  }
}
