import projectManager from "./projectManager.js";
import showModal from "./addProjectModal.js";
import { renderProjects, renderTodos } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded");
    projectManager.loadProjects();
    renderProjects();

    const addProjectButton = document.getElementById("add-project");
    if (addProjectButton) {
        addProjectButton.addEventListener("click", showModal);
    } else {
        console.error("Add Project button not found");
    }
});