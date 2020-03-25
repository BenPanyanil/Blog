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
        <SocialMediaWrapper className="col-sm-5 d-flex mb-5">
          <>
            <li className="mr-5">
              <a
                style={{ color: "white" }}
                href="https://www.instagram.com/benbackm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="mr-5">
              <a
                style={{ color: "white" }}
                href="https://github.com/BenPanyanil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/ben-panyanil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </>
        </SocialMediaWrapper>
      </>
    );
  }
}

const SocialMediaWrapper = styled.ul`
  list-style: none;
  font-size: 1.6rem;
  padding: 0;
`;
