import ProjectManager from "./projectManager.js";
import { renderTodos } from "./dom.js";
import createTodo from "./createTodo.js";

function showAddTodoModal(projectName) {
  const modal = document.createElement("div");
  modal.classList.add(
    "modal",
    "fixed",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "z-50"
  );
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modal.innerHTML = `
    <div class="modal-content bg-white rounded-lg shadow-xl p-6 w-96 max-w-md mx-auto">
      <h2 class="text-2xl font-bold mb-4 text-pink-700">Add Todo</h2>
      <input type="text" id="todo-title" placeholder="Title" class="w-full mb-2 p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">
      <textarea id="todo-description" placeholder="Description" class="w-full mb-2 p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500" rows="3"></textarea>
      <input type="date" id="todo-due-date" class="w-full mb-2 p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">
      <select id="todo-priority" class="w-full mb-4 p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <div class="flex justify-end space-x-2">
        <button id="cancel-todo" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Cancel</button>
        <button id="add-todo" class="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400">Add</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const modalContent = modal.querySelector(".modal-content");
  const cancelButton = modal.querySelector("#cancel-todo");
  const addButton = modal.querySelector("#add-todo");

  modal.style.opacity = 0;
  modal.style.transition = "opacity 0.3s ease-in-out";

  setTimeout(() => {
    modal.style.opacity = 1;
  }, 50);

  function closeModal() {
    modal.style.opacity = 0;
    modal.addEventListener(
      "transitionend",
      () => {
        modal.remove();
      },
      { once: true }
    );
  }

  cancelButton.addEventListener("click", closeModal);

  addButton.addEventListener("click", () => {
    const title = document.getElementById("todo-title").value.trim();
    const description = document
      .getElementById("todo-description")
      .value.trim();
    const dueDate = document.getElementById("todo-due-date").value;
    const priority = document.getElementById("todo-priority").value;

    if (title) {
      const newTodo = createTodo(title, description, dueDate, priority);
      const project = ProjectManager.getProject(projectName);
      project.addTodo(newTodo);
      ProjectManager.saveToLocalStorage();
      renderTodos(projectName);
      closeModal();
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    { once: true }
  );
}

export default showAddTodoModal;
