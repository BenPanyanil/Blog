import React from "react";
import styled from "styled-components";
import myPic from "../myPic.jpg";

export default function ProfileImg() {
  return (
    <ProfileImgWrapper className="col-sm-12 col-lg-6">
      <div className="myPic w-100">
        <div className="img-shadow"></div>
        <img src={myPic} alt="myPic"></img>
      </div>
    </ProfileImgWrapper>
  );
}

const ProfileImgWrapper = styled.div`
  .myPic {
    z-index: 0;
    position: relative;
    padding-top: 100%;
    background: transparent;

    img {
      width: 93%;
      height: 93%;
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: 0 1px 20px rgba(0, 0, 0, 0.25);
    }

    .img-shadow {
      width: 93%;
      height: 93%;
      position: absolute;
      background: var(--mainRed);
      bottom: 0;
      right: 0;

      z-index: 0;
    }
  }
`;
