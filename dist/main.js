(()=>{"use strict";var e={408:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n=o.p+"images/bg-pink.jpg"}},t={};function o(n){var d=t[n];if(void 0!==d)return d.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/todoListApp/";const n=function(e){return{name:e,todos:[],addTodo(e){this.todos.push(e)},removeTodo(e){const t=this.todos.indexOf(e);t>-1&&this.todos.splice(t,1)},getTodos(){return this.todos}}},d=function(e,t,o,n,d,i){return{title:e,description:t,dueDate:o,priority:n,notes:d,checklist:i,completed:!1}},i=(()=>{const e=[],t=()=>{localStorage.setItem("projects",JSON.stringify(e))};return{addProject(o){e.push(o),t()},removeProject(o){const n=e.findIndex((e=>e.name===o));n>-1&&(e.splice(n,1),t())},getProject:t=>e.find((e=>e.name===t)),getAllProjects:()=>e,loadProjects(){(()=>{const t=localStorage.getItem("projects");t&&JSON.parse(t).forEach((t=>{const o=n(t.name);t.todos.forEach((e=>{const t=d(e.title,e.description,e.dueDate,e.priority,e.notes,e.checklist);t.completed=e.completed,o.addTodo(t)})),e.push(o)}))})()},saveToLocalStorage(){t()}}})(),c=()=>{const e=document.getElementById("project-list");e?(e.innerHTML="",i.getAllProjects().forEach((t=>{const o=document.createElement("li");o.classList.add("flex","justify-between","items-center","cursor-pointer","hover:bg-pink-200","p-2","mb-2","rounded");const n=document.createElement("span");n.textContent=t.name;const d=document.createElement("button");d.innerHTML="&#10005;",d.classList.add("text-pink-500","font-bold","hover:text-pink-700"),o.appendChild(n),o.appendChild(d),n.addEventListener("click",(()=>{r(t.name)})),d.addEventListener("click",(e=>{e.stopPropagation(),i.removeProject(t.name),c(),r()})),e.appendChild(o)}))):console.error("Project list element not found")},r=e=>{const t=document.getElementById("todo-list-items");if(!t)return void console.error("Todo list element not found");t.innerHTML="";const o=i.getProject(e);if(!o)return void console.error(`Project "${e}" not found`);const n=document.createElement("h3");n.textContent=e,n.classList.add("text-xl","font-bold","mb-4","text-pink-700"),t.appendChild(n);const c=document.createElement("button");c.textContent="Add Todo",c.classList.add("bg-pink-500","hover:bg-pink-600","text-white","font-bold","px-4","py-2","rounded","mb-4"),c.addEventListener("click",(()=>function(e){const t=document.createElement("div");t.classList.add("modal","fixed","inset-0","flex","items-center","justify-center","z-50"),t.style.backgroundColor="rgba(0, 0, 0, 0.5)",t.innerHTML='\n    <div class="modal-content bg-white rounded-lg shadow-xl p-6 w-96 max-w-md mx-auto">\n      <h2 class="text-2xl font-bold mb-4 text-pink-700">Add Todo</h2>\n      <input type="text" id="todo-title" placeholder="Title" class="w-full mb-2 p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">\n      <textarea id="todo-description" placeholder="Description" class="w-full mb-2 p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500" rows="3"></textarea>\n      <input type="date" id="todo-due-date" class="w-full mb-2 p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">\n      <select id="todo-priority" class="w-full mb-4 p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">\n        <option value="low">Low</option>\n        <option value="medium">Medium</option>\n        <option value="high">High</option>\n      </select>\n      <div class="flex justify-end space-x-2">\n        <button id="cancel-todo" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Cancel</button>\n        <button id="add-todo" class="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400">Add</button>\n      </div>\n    </div>\n  ',document.body.appendChild(t);const o=t.querySelector(".modal-content"),n=t.querySelector("#cancel-todo"),c=t.querySelector("#add-todo");function s(){t.style.opacity=0,t.addEventListener("transitionend",(()=>{t.remove()}),{once:!0})}t.style.opacity=0,t.style.transition="opacity 0.3s ease-in-out",setTimeout((()=>{t.style.opacity=1}),50),n.addEventListener("click",s),c.addEventListener("click",(()=>{const t=document.getElementById("todo-title").value.trim(),o=document.getElementById("todo-description").value.trim(),n=document.getElementById("todo-due-date").value,c=document.getElementById("todo-priority").value;if(t){const a=d(t,o,n,c);i.getProject(e).addTodo(a),i.saveToLocalStorage(),r(e),s()}})),t.addEventListener("click",(e=>{e.target===t&&s()})),o.addEventListener("click",(e=>{e.stopPropagation()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&s()}),{once:!0})}(e))),t.appendChild(c),o.getTodos().forEach((n=>{const d=document.createElement("div");d.classList.add("mb-4","p-4","border","border-pink-300","rounded","bg-white","shadow-md");const c=document.createElement("h4");c.textContent=n.title,c.classList.add("font-bold","text-lg","mb-2");const s=document.createElement("p");s.textContent=n.description,s.classList.add("text-gray-600","mb-2");const a=document.createElement("p");a.textContent=`Due: ${n.dueDate||"Not set"}`,a.classList.add("text-sm","text-gray-500","mb-2");const l=document.createElement("span");l.textContent=`Priority: ${n.priority}`,l.classList.add("text-sm","font-bold","mr-2"),"high"===n.priority?l.classList.add("text-red-500"):"medium"===n.priority?l.classList.add("text-orange-500"):l.classList.add("text-green-500");const u=document.createElement("button");u.textContent=n.completed?"Undo":"Complete",u.classList.add("bg-pink-500","hover:bg-pink-600","text-white","font-bold","px-2","py-1","rounded","text-sm"),u.addEventListener("click",(()=>{n.completed=!n.completed,d.classList.toggle("opacity-50"),u.textContent=n.completed?"Undo":"Complete",i.saveToLocalStorage()}));const p=document.createElement("button");p.textContent="Delete",p.classList.add("bg-red-500","hover:bg-red-600","text-white","font-bold","px-2","py-1","rounded","text-sm","ml-2"),p.addEventListener("click",(()=>{o.removeTodo(n),i.saveToLocalStorage(),r(e)})),d.appendChild(c),d.appendChild(s),d.appendChild(a),d.appendChild(l),d.appendChild(u),d.appendChild(p),n.completed&&d.classList.add("opacity-50"),t.appendChild(d)}))},s=function(){const e=document.createElement("div");e.classList.add("modal","fixed","inset-0","flex","items-center","justify-center","z-50"),e.style.backgroundColor="rgba(0, 0, 0, 0.5)",e.innerHTML='\n    <div class="modal-content bg-white rounded-lg shadow-xl p-6 w-96 max-w-md mx-auto">\n      <div class="modal-header mb-4">\n        <h2 class="text-2xl font-bold text-pink-700">Add Project</h2>\n      </div>\n      <div class="modal-body mb-6">\n        <input type="text" id="project-name" placeholder="Project name" class="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500">\n      </div>\n      <div class="modal-footer flex justify-end space-x-2">\n        <button id="cancel-button" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Cancel</button>\n        <button id="add-button" class="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400">Add</button>\n      </div>\n    </div>\n  ',document.body.appendChild(e);const t=e.querySelector(".modal-content"),o=e.querySelector("#project-name"),d=e.querySelector("#cancel-button"),r=e.querySelector("#add-button");function s(){e.style.opacity=0,e.addEventListener("transitionend",(()=>{e.remove()}),{once:!0})}e.style.opacity=0,e.style.transition="opacity 0.3s ease-in-out",setTimeout((()=>{e.style.opacity=1}),50),d.addEventListener("click",s),r.addEventListener("click",(()=>{const e=o.value.trim();if(e){const t=n(e);i.addProject(t),c(),s()}})),e.addEventListener("click",(t=>{t.target===e&&s()})),t.addEventListener("click",(e=>{e.stopPropagation()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&s()}),{once:!0})};document.addEventListener("DOMContentLoaded",(()=>{console.log("DOM Content Loaded"),i.loadProjects(),c();const e=document.getElementById("add-project");e?e.addEventListener("click",s):console.error("Add Project button not found");const t=o(408);document.body.style.backgroundImage=t,document.body.style.backgroundAttachment="fixed"}))})();