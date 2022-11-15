const addTask = document.getElementById("addTask");
const list = document.querySelector("#tasksList");
const temp = document.querySelector(".task-item");
let taskTemplate = temp.cloneNode(true);

list.removeChild(temp);

addTask.addEventListener("click", () => {
  list.appendChild(taskTemplate);
  taskTemplate = taskTemplate.cloneNode(true);
});
