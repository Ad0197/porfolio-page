import React, { useContext } from "react";
import TechnologyContext from "../../context/technology-context/technology.context";
import {TechContainer} from "./technology.styles";
import TechnologyPreview from "../../component/technology-preview/technology-preview.component";

const TechnologyPage = () => {
  const technologies = useContext(TechnologyContext);
  return (
    <TechContainer>
      {technologies.map(({ id, ...othersProps }) => (
        <TechnologyPreview key={id} {...othersProps} />
      ))}
    </TechContainer>
  );
};

export default TechnologyPage;
