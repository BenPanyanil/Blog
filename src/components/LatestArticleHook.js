import React, { Component } from "react";
import styled from "styled-components";
import { ContextConsumer } from "../context";
import typingImg from "../img/typing-img.jpg";

export default class LatestArticleHook extends Component {
  render() {
    return (
      <ContextConsumer>
        {value => (
          <LatestArticleHookWrapper className="container col-sm-12 my-4 mx-3">
            <div className="article-container row">
              <img
                className=" article-img col-sm-12 col-md-6 p-0 w-100"
                src={typingImg}
                alt="articleImg"
              ></img>
              <div className="col-sm-12 col-md-6">
                <p className="article-date pt-4 pt-sm-5 px-sm-4 px-lg-5">
                  06/05/2024
                </p>
                <h2 className="article-title font-weight-bold py-3 px-sm-4 px-lg-5">
                  Header
                </h2>
                <p className="article-description pb-5 px-sm-4 px-lg-5">
                  A certain king had a beautiful garden, and in the garden stood
                  a tree which bore golden apples. These apples were always
                  counted, and about the time. These apples were always counted,
                  and about the time. A certain king had a beautiful garden, and
                  in the garden stood a tree which bore golden apples.
                </p>
              </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center p-4">
              <button className="btnExpand p-3">Read this post</button>
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

    img {
      object-fit: cover;
    }
  }

  .article-date {
    font-size: 0.9rem;
    opacity: 0.6;
  }

  .article-title {
    color: var(--mainPurple);
  }

  .btnExpand {
    background: transparent;
    border: none;
    outline: none;
    color: var(--mainRed);
    font-weight: bold;

    transition: 150ms;
    margin-top: 0px;
    margin-bottom: 6px;
    box-shadow: 0 0 0 var(--mainBlack), 0 0 0 rgba(0, 0, 0, 0.2);
  }

  .btnExpand:hover {
    margin-top: 6px;
    margin-bottom: 0;
    box-shadow: 0 -6px 0 var(--mainBlack), 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
