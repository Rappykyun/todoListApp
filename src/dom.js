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
      "hover:bg-pink-200",
      "p-2",
      "mb-2",
      "rounded"
    );

    const projectName = document.createElement("span");
    projectName.textContent = project.name;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#10005;";
    deleteButton.classList.add(
      "text-pink-500",
      "font-bold",
      "hover:text-pink-700"
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
  projectHeader.classList.add("text-xl", "font-bold", "mb-4", "text-pink-700");
  todoList.appendChild(projectHeader);

  const addTodoButton = document.createElement("button");
  addTodoButton.textContent = "Add Todo";
  addTodoButton.classList.add(
    "bg-pink-500",
    "hover:bg-pink-600",
    "text-white",
    "font-bold",
    "px-4",
    "py-2",
    "rounded",
    "mb-4"
  );
  addTodoButton.addEventListener("click", () => showAddTodoModal(projectName));
  todoList.appendChild(addTodoButton);

  project.getTodos().forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add(
      "mb-4",
      "p-4",
      "border",
      "border-pink-300",
      "rounded",
      "bg-white",
      "shadow-md"
    );

    const titleElement = document.createElement("h4");
    titleElement.textContent = todo.title;
    titleElement.classList.add("font-bold", "text-lg", "mb-2");

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = todo.description;
    descriptionElement.classList.add("text-gray-600", "mb-2");

    const dueDateElement = document.createElement("p");
    dueDateElement.textContent = `Due: ${todo.dueDate || "Not set"}`;
    dueDateElement.classList.add("text-sm", "text-gray-500", "mb-2");

    const priorityElement = document.createElement("span");
    priorityElement.textContent = `Priority: ${todo.priority}`;
    priorityElement.classList.add("text-sm", "font-bold", "mr-2");

    if (todo.priority === "high") priorityElement.classList.add("text-red-500");
    else if (todo.priority === "medium")
      priorityElement.classList.add("text-orange-500");
    else priorityElement.classList.add("text-green-500");

    const completeButton = document.createElement("button");
    completeButton.textContent = todo.completed ? "Undo" : "Complete";
    completeButton.classList.add(
      "bg-pink-500",
      "hover:bg-pink-600",
      "text-white",
      "font-bold",
      "px-2",
      "py-1",
      "rounded",
      "text-sm"
    );

    completeButton.addEventListener("click", () => {
      todo.completed = !todo.completed;
      todoElement.classList.toggle("opacity-50");
      completeButton.textContent = todo.completed ? "Undo" : "Complete";
      projectManager.saveToLocalStorage();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add(
      "bg-red-500",
      "hover:bg-red-600",
      "text-white",
      "font-bold",
      "px-2",
      "py-1",
      "rounded",
      "text-sm",
      "ml-2"
    );

    deleteButton.addEventListener("click", () => {
      project.removeTodo(todo);
      projectManager.saveToLocalStorage();
      renderTodos(projectName);
    });

    todoElement.appendChild(titleElement);
    todoElement.appendChild(descriptionElement);
    todoElement.appendChild(dueDateElement);
    todoElement.appendChild(priorityElement);
    todoElement.appendChild(completeButton);
    todoElement.appendChild(deleteButton);

    if (todo.completed) {
      todoElement.classList.add("opacity-50");
    }

    todoList.appendChild(todoElement);
  });
};
