import React, { Component } from "react";
import SocialMedia from "./SocialMedia";
import styled from "styled-components";

export default class HeaderText extends Component {
  render() {
    return (
      <HeaderTextWrapper className="col-sm-10 col-lg-6 align-self-end">
        <h1 className="my-5" style={{ color: this.props.textColor }}>
          Fullstack,
          <br />
          fullsteam &amp;
          <br />
          no bullsh*t
        </h1>
        <section className="mb-4 mr-4 mr-lg-5 d-flex">
          <div className="decoration mr-3 mr-lg-4"></div>
          <p style={{ color: this.props.textColor, lineHeight: "1.6rem" }}>
            This is my story of becoming a freelance web developer. This is not
            merely a developer blog. This is about facing obstacles and getting
            sh*t done.
          </p>
        </section>
        <SocialMedia />
      </HeaderTextWrapper>
    );
  }
}

const HeaderTextWrapper = styled.div`
  h1 {
    font-weight: bold;
  }

  .decoration {
    min-width: 15px !important;
    height: 40px !important;
    background: var(--mainPurple);
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 14vw;
    }
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 4.4rem;
    }
  }

  /* Medium devices (tablets) */

  @media (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }
  }

  /* Large devices (desktops) */

  @media (min-width: 992px) {
    h1 {
      font-size: 4.4rem;
    }
  }

  /* Extra large devices (large desktops) */

  @media (min-width: 1200px) {
    h1 {
      font-size: 5rem;
    }

    section {
      p {
        width: 86%;
      }
    }
  }
`;
