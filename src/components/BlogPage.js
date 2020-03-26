import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import NavBar from "./NavBar";
import Heading from "./Heading";
import styled from "styled-components";
import ArticleHook from "./ArticleHook";
import LatestArticleHook from "./LatestArticleHook";

export default class HomePage extends Component {
  constructor() {
    super();
    this.backgroundRef = React.createRef();
  }

  componentDidMount() {
    const background = this.backgroundRef.current;
    const body = document.querySelector("body");

    window.addEventListener("scroll", function() {
      const rect = body.getBoundingClientRect();

      if (rect.top < -46) {
        background.classList.add("animate-bg-white");
      } else {
        background.classList.remove("animate-bg-white");
      }
    });
  }

  render() {
    const createArticle = value => {
      return value.articleData.map(el => {
        return <ArticleHook key={el.id} articleData={el} />;
      });
    };

    return (
      <div className="homePage" ref={this.backgroundRef}>
        <NavBar />
        <Heading />
        <BodyWrapper className="container mt-5">
          <div className="row">
            <h1 className="my-5 pt-5 col-sm-12 font-weight-bold">
              Hi, I'm
              <span style={{ color: "var(--mainPurple)" }}> Ben Panyanil</span>,
              a freelance web-developer and blogger.
            </h1>
            <p className="mt-3 pb-5 mb-5 col-sm-12">
              A certain king had a beautiful garden, and in the garden stood a
              tree which bore golden apples. These apples were always counted,
              and about the time when they began to grow ripe it was found that
              every night one of them was gone.
            </p>
            <ContextConsumer>
              {value => (
                <>
                  <h2 className="allblogs-header col-sm-12 mt-3 pt-5">
                    My latest blog post
                  </h2>
                  <LatestArticleHook />
                  <h2 className="allblogs-header col-sm-12 mt-3 pt-5">
                    All blogs
                  </h2>
                  {createArticle(value)}
                </>
              )}
            </ContextConsumer>
          </div>
        </BodyWrapper>
      </div>
    );
  }
}

const BodyWrapper = styled.div`
  line-height: 2rem;
  color: var(--mainBlack);

  h1 {
    line-height: 4rem;
  }

  .allblogs-header {
    border-top: 1px solid var(--mainGrey);
    opacity: 0.4;
  }

  a {
    color: var(--mainRed);
    font-weight: bold;
  }
`;
