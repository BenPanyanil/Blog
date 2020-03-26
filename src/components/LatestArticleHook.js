import React, { Component } from "react";
import styled from "styled-components";
import { ContextConsumer } from "../context";

export default class LatestArticleHook extends Component {
  render() {
    return (
      <ContextConsumer>
        {value => (
          <LatestArticleHookWrapper className="container col-sm-12 mt-4 mb-5">
            <div className="article-container">
              <div className="article-img col-sm-12">
                <img src={""} alt="articleImg"></img>
              </div>
              <div className="col-sm-12">
                <p className="article-date pt-5 px-5">06/05/2024</p>
                <h2 className="article-title font-weight-bold py-3 px-5">
                  Header
                </h2>
                <p className="article-description pb-5 px-5">
                  A certain king had a beautiful garden, and in the garden stood
                  a tree which bore golden apples. These apples were always
                  counted, and about the time when they began to grow ripe it
                  was found that every night one of them was gone.
                </p>
              </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center p-3">
              <button className="p-3">Expand this post</button>
            </div>
          </LatestArticleHookWrapper>
        )}
      </ContextConsumer>
    );
  }
}

const LatestArticleHookWrapper = styled.div`
  .article-container {
    background: var(--mainGrey);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .article-date {
    font-size: 0.9rem;
    opacity: 0.6;
  }

  .article-title {
    color: var(--mainPurple);
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    color: var(--mainRed);
    font-weight: bold;
  }
`;
