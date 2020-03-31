import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper>
        <div className="container py-3 py-sm-5">
          <ul className="col-sm-10 mt-3">
            <li className="d-inline-block">
              <div className="logo-item mr-4 mr-sm-5"></div>
            </li>
            <li className="d-inline-block mt-4">
              <Link to="/">Home</Link>
            </li>
            <li className="d-inline-block ml-4 ml-sm-5 mt-4">
              <Link to="/services">Services</Link>
            </li>
            <li className="d-inline-block ml-4 ml-sm-5 mt-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .logo-item {
    width: 30px;
    height: 30px;
    background: var(--mainGrey);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), 6px 6px 0 var(--mainRed);
  }

  a {
    font-weight: 500;
    color: white;
  }
`;
