import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class NavBar extends Component {
  state = {
    textColor: "white"
  };

  render() {
    return (
      <NavWrapper className="container py-3 py-sm-5">
        <ul className="navTop col-sm-10 pt-5">
          <li className="d-inline-block">
            <Link to="/" style={{ color: this.state.textColor }}>
              Home
            </Link>
          </li>
          <li className="d-inline-block ml-4 ml-sm-5">
            <Link to="/blog" style={{ color: this.state.textColor }}>
              Blog
            </Link>
          </li>
          <li className="d-inline-block ml-4 ml-sm-5">
            <Link to="/contact" style={{ color: this.state.textColor }}>
              Contact
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    font-weight: 500;
  }

  a::hover {
    color: red !important;
  }
`;
