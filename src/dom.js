import projectManager from "./projectManager.js";
import showAddTodoModal from "./addTodoModal.js";

export const renderProjects = () => {
  const projectList = document.getElementById("project-list");
  if (!projectList) {
    console.error("Project list element not found");
    return;
  }
  projectList.innerHTML = "";

  projectManager.getAllProjects().forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "cursor-pointer",
      "hover:bg-gray-200",
      "p-2"
    );

    const projectName = document.createElement("span");
    projectName.textContent = project.name;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#10005;";
    deleteButton.classList.add(
      "text-red-500",
      "font-bold",
      "hover:text-red-700"
    );

    projectElement.appendChild(projectName);
    projectElement.appendChild(deleteButton);

    projectName.addEventListener("click", () => {
      renderTodos(project.name);
    });

    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      projectManager.removeProject(project.name);
      renderProjects();
      renderTodos();
    });

    projectList.appendChild(projectElement);
  });
};

export const renderTodos = (projectName) => {
  const todoList = document.getElementById("todo-list-items");
  if (!todoList) {
    console.error("Todo list element not found");
    return;
  }
  todoList.innerHTML = "";

  const project = projectManager.getProject(projectName);
  if (!project) {
    console.error(`Project "${projectName}" not found`);
    return;
  }

  const projectHeader = document.createElement("h3");
  projectHeader.textContent = projectName;
  projectHeader.classList.add("text-xl", "font-bold", "mb-4");
  todoList.appendChild(projectHeader);

  const addTodoButton = document.createElement("button");
  addTodoButton.textContent = "Add Todo";
  addTodoButton.classList.add(
    "bg-green-500",
    "text-white",
    "px-4",
    "py-2",
    "rounded",
    "mb-4"
  );
  addTodoButton.addEventListener("click", () => showAddTodoModal(projectName));
  todoList.appendChild(addTodoButton);

  project.getTodos().forEach((todo) => {
    const todoElement = document.createElement("li");
    todoElement.innerHTML = `${todo.title}<br>${todo.description}<br>&nbsp;Due: ${todo.dueDate}`;
    todoElement.classList.add("mb-2", "p-2", "border", "rounded");

    if (todo.priority === "high") todoElement.classList.add("text-red-500");
    else if (todo.priority === "medium")
      todoElement.classList.add("text-orange-500");
    else todoElement.classList.add("text-green-500");
    todoElement.addEventListener("click", (event) => {
      event.target.classList.toggle("line-through");
      event.target.classList.toggle("text-gray-400");
      event.target.classList.toggle("cursor-pointer");
    });
    todoList.appendChild(todoElement);
  });
};
