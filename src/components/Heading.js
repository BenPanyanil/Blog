import React, { Component } from "react";
import styled from "styled-components";
import HeaderText from "./HeaderText";
import ProfileImg from "./ProfileImg";

export default class Heading extends Component {
  state = {
    textColor: "white"
  };

  render() {
    return (
      <HeadingWrapper className="container">
        <div className="row mt-xl-4">
          <HeaderText textColor={this.state.textColor} />
          <ProfileImg />
        </div>
      </HeadingWrapper>
    );
  }
}

const HeadingWrapper = styled.div``;
