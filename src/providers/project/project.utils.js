const ProjectTypes = { web: "web", mob: "mob", art: "art" };

export const sortProjectByPorjectType = (projects) => {
  const webProject = projects.filter(
    (project) => project.project_type === ProjectTypes["web"]
  );
  const mobProject = projects.filter(
    (project) => project.project_type === ProjectTypes["mob"]
  );
  const artProject = projects.filter(
    (project) => project.project_type === ProjectTypes["art"]
  );
  return [
    {
      id: "web",
      displayName: "Desarrollo de aplicaciones web",
      projects: webProject,
    },
    {
      id: "mob",
      displayName: "Desarrollo de Aplicaciones Mobiles",
      projects: mobProject,
    },
    { id: "art", displayName: "Diseño y Marcas", projects: artProject },
  ];
};

/*
 * In case that I would like to add the project Dynamically
 */
export const sortProjectsByProjectType = (projects) => {
  const keys = projects.reduce((accKeys, project) => {
    if (accKeys.lenght < 0) return accKeys.push(project.project_type);
    if (!accKeys.includes(project.project_type))
      accKeys.push(project.project_type);
    return accKeys;
  }, []);

  console.log(keys);
  return keys.map((key) => ({
    [key]: projects.filter((project) => project.project_type === key),
  }));
};
