import React from "react";
import ProjectItem from "../project-items/project-item.component";

import { ProjectItemContainer } from "./project-preview.styles";

const ProjectPreview = ({ displayName, projects }) => (
  <div>
    <h1>{displayName}</h1>
    <ProjectItemContainer>
      {projects
        .filter((proj, idx) => idx < 4)
        .map(({ id, ...otherProps }) => (
          <ProjectItem key={id} {...otherProps} />
        ))}
    </ProjectItemContainer>
  </div>
);

export default ProjectPreview;
