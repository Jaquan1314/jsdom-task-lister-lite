document.addEventListener("DOMContentLoaded", (event) => {
  // your code here
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", newTask)
});

function newTask(event) {
  event.preventDefault()
  const text = document.querySelector("#new-task-description")
  const newTodo = document.createElement("li")
  const tasks = document.querySelector("#tasks")
  newTodo.textContent = text.value
  tasks.append(newTodo)
  event.target.reset()
}
