import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default class SocialMedia extends Component {
  render() {
    return (
      <>
        <SocialMediaWrapper className="col-sm-10 col-md-8 col-lg-6 col-xl-4 offset-sm-1 offset-md-2 offset-lg-3 offset-xl-4 d-flex mt-5">
          <li className="mr-5">
            <a
              href="https://www.instagram.com/benbackm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="mr-5">
            <a
              href="https://github.com/BenPanyanil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ben-panyanil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </SocialMediaWrapper>
      </>
    );
  }
}

const SocialMediaWrapper = styled.ul`
  list-style: none;
  font-size: 1.6rem;

  a {
    color: var(--mainBlack);
  }
`;
