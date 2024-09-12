import ProjectManager from "./projectManager.js";
import { renderProjects } from "./dom.js";
import createProject from "./project.js";

function showModal() {
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
      <div class="modal-header mb-4">
        <h2 class="text-2xl font-bold text-pink-700">Add Project</h2>
      </div>
      <div class="modal-body mb-6">
        <input type="text" id="project-name" placeholder="Project name" class="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500">
      </div>
      <div class="modal-footer flex justify-end space-x-2">
        <button id="cancel-button" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Cancel</button>
        <button id="add-button" class="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400">Add</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const modalContent = modal.querySelector(".modal-content");
  const projectNameInput = modal.querySelector("#project-name");
  const cancelButton = modal.querySelector("#cancel-button");
  const addButton = modal.querySelector("#add-button");

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
    const projectName = projectNameInput.value.trim();
    if (projectName) {
      const newProject = createProject(projectName);
      ProjectManager.addProject(newProject);
      renderProjects();
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

export default showModal;
