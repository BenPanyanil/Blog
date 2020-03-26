import React, { Component } from "react";
import styled from "styled-components";

export default class ArticleHook extends Component {
  render() {
    const { date, title, description } = this.props.articleData;

    return (
      <ArticleHookWrapper className="container">
        <div className="row my-3 py-5">
          <p className="dateStyle col-sm-12">{date}</p>
          <h2 className="titleStyle col-sm-12">{title}</h2>
          <p className="descriptionStyle col-sm-12">{description}</p>
          <button className="btnStyle px-5 py-2 mt-3">Read more</button>
        </div>
      </ArticleHookWrapper>
    );
  }
}

const ArticleHookWrapper = styled.div`
  .dateStyle {
    font-size: 0.9rem;
    opacity: 0.6;
    margin-bottom: 0;
  }

  .titleStyle {
    color: var(--mainPurple);
    font-weight: bold;
  }

  .btnStyle {
    background: var(--mainRed);
    border: none;
    outline: none;
    color: white;
    font-weight: bold;
    margin-left: 15px;

    transition-duration: 200ms;
    transform: translate(0px, 0px);
    box-shadow: 0px 0px 0 var(--mainBlack);
  }

  .btnStyle:hover {
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0 var(--mainBlack);
  }
`;
