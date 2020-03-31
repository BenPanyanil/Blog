import React, { Component } from "react";
import "../App.css";
import { ContextConsumer } from "../context";

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
        <Heading />
        <BodyWrapper className="container mt-5">
          <div className="row">
            <ContextConsumer>
              {value => (
                <>
                  <h2 className="latestblog-header col-sm-12 mt-3 pt-5">
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

  h2 {
    line-height: 4rem;
    font-weight: bold;
  }

  .latestblog-header {
    color: var(--mainBlack);
  }

  .allblogs-header {
    border-top: 1px solid var(--mainGrey);
    color: var(--mainBlack);
  }

  a {
    color: var(--mainRed);
    font-weight: bold;
  }
`;
