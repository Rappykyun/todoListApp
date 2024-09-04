import createProject from "./project";

const projectManager = () => {
  const projects = [];

  return {
    addProject(project) {
      projects.push(project);
    },
    removeProject(projectName) {
      const index = projects.findIndex((proj) => proj.name === projectName);
      if (index > -1) {
        projects.splice(index, 1);
      }
    },
    getProjects(projectName) {
      return projects.find((proj) => proj.name === projectName);
    },
    getAllProjects() {
      return projects;
    },
  };
};

export default projectManager;
