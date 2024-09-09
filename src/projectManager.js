import createProject from "./project";
import createTodo from "./createTodo";

const projectManager = (() => {
  const projects = [];

  const saveToLocalStorage = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const loadFromLocalStorage = () => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      const parsedProjects = JSON.parse(storedProjects);
      parsedProjects.forEach((projectData) => {
        const project = createProject(projectData.name);
        projectData.todos.forEach((todoData) => {
          const todo = createTodo(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.priority
          );
          project.addTodo(todo);
        });
        projects.push(project);
      });
    }
  };

  return {
    addProject(project) {
      projects.push(project);
      
      saveToLocalStorage();
    },

    removeProject(projectName) {
      const index = projects.findIndex((proj) => proj.name === projectName);
      if (index > -1) {
        projects.splice(index, 1);
        saveToLocalStorage();
      }
    },

    getProject(projectName) {
      return projects.find((proj) => proj.name === projectName);
    },

    getAllProjects() {
      return projects;
    },

    loadProjects() {
      loadFromLocalStorage();
    },
    saveToLocalStorage() {
      saveToLocalStorage();
    }
  };
})();

export default projectManager;
