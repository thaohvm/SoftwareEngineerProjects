const form = document.querySelector('#taskform');
const taskInput = document.querySelector('input[name=newtask');
const taskList = document.querySelector('#task-list');

taskList.addEventListener('click', function(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
    else if (e.target.tagName == "LI") {
        e.target.style.textDecoration = 'line-through';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "Remove"

    newTask.innerText = taskInput.value;
    newTask.appendChild(removeBtn);
    taskList.appendChild(newTask);
    taskInput.value = '';
})

localStorage.setItem("task-list", JSON.stringify(taskList));
JSON.parse(localStorage.getItem("task-list"))
