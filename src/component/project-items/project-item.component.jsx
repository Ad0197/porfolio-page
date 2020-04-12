import React from "react";
import { convertImgUrlToUrl } from "../../utils/utils";

import CustomButton from "../custom-button/custom-button.component";
import {
  ProjectContainer,
  ImageContainer,
  HoverContainer,
  TextHover,
} from "./project-item.styles";

const ProjectItem = ({ name, resources }) => (
  <ProjectContainer>
    {resources.length > 0 ? (
      <ImageContainer src={convertImgUrlToUrl(resources[0].ImgUrl)} />
    ) : (
      <ImageContainer>
        <p>"No hay foto del proyecto"</p>
      </ImageContainer>
    )}

    <HoverContainer>
      <TextHover>{name}</TextHover>
      <CustomButton inverted>Ver Proyectos</CustomButton>
    </HoverContainer>
  </ProjectContainer>
);

export default ProjectItem;
