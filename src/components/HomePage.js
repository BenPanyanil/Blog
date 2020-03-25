import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import NavBar from "./NavBar";
import Heading from "./Heading";
import styled from "styled-components";
import typingImg from "../img/typing-img.jpg";
import ArticleHook from "./ArticleHook";

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
            <h1 className="my-5 pt-5 col-sm-12">
              Hi, I'm
              <span style={{ color: "var(--mainPurple)" }}> Ben Panyanil</span>,
              a newbie freelance developer and blogger.
            </h1>
            <p className="mt-3 mb-5 col-sm-12">
              A certain king had a beautiful garden, and in the garden stood a
              tree which bore golden apples. These apples were always counted,
              and about the time when they began to grow ripe it was found that
              every night one of them was gone.
            </p>
            <img
              className="my-5 col-sm-12 w-100"
              src={typingImg}
              alt="typingImg"
            ></img>
            <h1 className="col-sm-12">Recent blog posts</h1>
            <ContextConsumer>
              {value => <>{createArticle(value)}</>}
            </ContextConsumer>
            <div className="col-sm-12 py-5 my-5">
              <Link className="h5" to="/blog">
                See all blog posts{" "}
                <span className="arrowIcon ml-4">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
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
    font-weight: bold;
  }

  a {
    color: var(--mainRed);
    font-weight: bold;
  }
`;
