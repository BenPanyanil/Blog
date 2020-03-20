import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class NavBar extends Component {
  state = {
    textColor: "white"
  };

  render() {
    return (
      <NavWrapper className="container mt-5 py-3 py-sm-5">
        <ul className="col-sm-10">
          <li className="d-inline-block">
            <Link to="/blog" style={{ color: this.state.textColor }}>
              Blog
            </Link>
          </li>
          <li className="d-inline-block ml-4 ml-sm-5">
            <Link to="/portfolio" style={{ color: this.state.textColor }}>
              Portfolio
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: transparent;

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
