import React, { Component } from "react";
import styled from "styled-components";
import FooterSocialMedia from "./FooterSocialMedia";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper className="container-fluid mt-5 py-5">
        <div className="row my-5">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4 offset-sm-1 offset-md-2 offset-lg-3 offset-xl-4 mb-4 d-flex align-items-center">
            <div className="decoration"></div>
            <h1 className="ml-4">Contact</h1>
          </div>
          <p className="col-sm-10 col-md-8 col-lg-6 col-xl-4 offset-sm-1 offset-md-2 offset-lg-3 offset-xl-4">
            Helsinki, Finland
          </p>
          <p className="col-sm-10 col-md-8 col-lg-6 col-xl-4 offset-sm-1 offset-md-2 offset-lg-3 offset-xl-4 mb-5">
            bpanyanil@gmail.com
          </p>
          <FooterSocialMedia />
          <p className="copyright col-sm-10 col-md-8 col-lg-6 col-xl-4 offset-sm-1 offset-md-2 offset-lg-3 offset-xl-4">
            Helsinki, Finland. Designed and created by &#169;{" "}
            <span style={{ color: "var(--mainPurple)", fontWeight: "bold" }}>
              Ben Panyanil
            </span>
          </p>
        </div>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  background: var(--mainGrey);

  .decoration {
    width: 15px;
    height: 40px;
    background: var(--mainPurple);
  }

  h1 {
    font-weight: bold;
    margin-bottom: 0;
  }

  p {
    opacity: 0.6;
    font-size: 1.2rem;
  }

  .copyright {
    font-size: 0.9rem;
    opacity: 1;
  }
`;
