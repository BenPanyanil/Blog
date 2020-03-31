import React, { Component } from "react";
import HeaderText from "./HeaderText";
import ProfileImg from "./ProfileImg";
import styled from "styled-components";

export default class Heading extends Component {
  render() {
    return (
      <HeadingWrapper className="container">
        <div className="row mt-lg-4">
          <HeaderText />
          <ProfileImg />
        </div>
      </HeadingWrapper>
    );
  }
}

const HeadingWrapper = styled.div`
  @media (max-width: 576px) {
    padding-top: 6rem;
  }

  @media (min-width: 576px) {
    padding-top: 8rem;
  }

  @media (min-width: 992px) {
    padding-top: 10rem;
  }
`;
