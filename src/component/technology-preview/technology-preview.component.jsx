import React from "react";
import Card from "../card/card.component";
import { Title, TechContainer, Count } from "./technology-preview.styles";

const TechnologyPreview = ({ tagName, amountProjects }) => {
  return (
    <Card styles={{}} bgColor="primaryBg">
      <TechContainer>
        <Title>{tagName}</Title>
        <Count>{amountProjects}</Count>
      </TechContainer>
    </Card>
  );
};

export default TechnologyPreview;
