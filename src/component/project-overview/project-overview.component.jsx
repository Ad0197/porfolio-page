import React, { useContext } from "react";
import { ProjectContext } from "../../providers/project/project.provider";
import ProjectPreview from "../project-preview/project-preview.component";

const ProjectOverview = () => {
  const { collectionProjects } = useContext(ProjectContext);
    console.log(collectionProjects);
  return (
    <div>
      {collectionProjects.map(({id, ...othersProps}) => (
        <ProjectPreview key={id} {...othersProps} />
      ))}
    </div>
  );
};

export default ProjectOverview;
