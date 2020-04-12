import React from "react";
import { Switch, Route, useRouteMatch } from "react-router";

import ProjectProvider from "../../providers/project/project.provider";

import ProjectOverview from "../../component/project-overview/project-overview.component";

import { ProjectContainer } from "./project.styles";

const ProjectPage = () => {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <ProjectContainer>
          <ProjectProvider>
            <Route path={`${match.path}`} component={ProjectOverview} />
          </ProjectProvider>
        </ProjectContainer>
      </Switch>
    </div>
  );
};

export default ProjectPage;
