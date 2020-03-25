import React, { Component } from "react";
import SocialMedia from "./SocialMedia";
import styled from "styled-components";

export default class HeaderText extends Component {
  constructor() {
    super();
    this.titleRef = React.createRef();
    this.textRef = React.createRef();
  }

  componentDidMount() {
    const title = this.titleRef.current;
    const text = this.textRef.current;
    const body = document.querySelector("body");

    window.addEventListener("scroll", function() {
      const rect = body.getBoundingClientRect();

      if (rect.top < -46) {
        title.classList.add("animate-bg-white");
        text.classList.add("animate-bg-white");
      } else {
        title.classList.remove("animate-bg-white");
        text.classList.remove("animate-bg-white");
      }
    });
  }

  render() {
    return (
      <HeaderTextWrapper className="col-sm-12 col-lg-6 align-self-end">
        <>
          <h1 className="headerTitle my-5" ref={this.titleRef}>
            Fullstack,
            <br />
            fullsteam &amp;
            <br />
            no bullsh*t
          </h1>
          <section className="mb-4 mr-4 mr-lg-5 d-flex">
            <div className="decoration mr-3 mr-lg-4"></div>
            <p
              className="headerText"
              ref={this.textRef}
              style={{ lineHeight: "1.8rem" }}
            >
              Welcome to my blog. Here I share my stories, obstacles and means
              to become a succesful freelance developer and{" "}
              <span style={{ color: "var(--mainRed" }}>
                achieving the freedom of a freelancer
              </span>
              .
            </p>
          </section>
        </>
        <SocialMedia />
      </HeaderTextWrapper>
    );
  }
}

const HeaderTextWrapper = styled.div`
  color: var(--mainGrey) !important;

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
      font-size: 5rem;
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
