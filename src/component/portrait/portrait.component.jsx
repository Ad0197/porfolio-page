import React from "react";
import {
  NameSpan,
  PortraitImgContainer,
  InfoContainer,
  OccupationSpan,
} from "./portrait.styles";
import PortraitImg from "../../assets/portrait.jpg";
const Portrait = () => {
  return (
    <div>
      <PortraitImgContainer img={PortraitImg} />
      <InfoContainer>
        <NameSpan>Adrison Gomez</NameSpan>
        <OccupationSpan>FullStack Developer</OccupationSpan>
      </InfoContainer>
    </div>
  );
};

export default Portrait;
