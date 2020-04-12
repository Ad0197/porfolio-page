import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { sortProjectByPorjectType } from "./project.utils";

const ProjectData = {
  collectionProjects: [],
};

export const ProjectContext = createContext(ProjectData);

const ProjectProvider = ({ children }) => {
  const [collectionProjects, setCollections] = useState([]);

  const getProject = async (fn) => {
    const response = await axios("/project");
    const collection = await response.data;
    const a = sortProjectByPorjectType(collection);
    fn(a);
  };

  useEffect(() => {
    getProject(setCollections);
  }, [setCollections]);

  return (
    <ProjectContext.Provider value={{ collectionProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
