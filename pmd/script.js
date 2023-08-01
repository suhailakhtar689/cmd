const tasks = [
    {id: 1, title: "task 1", assignee: "user A"},
    {id: 2, title: "task 2", assignee: "user B"},
    {id: 3, title: "task 3", assignee: "user C"},
];

const users = ["user A", "user B", "user C"];

function renderTasks() {
    const tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `${task.title} (Assignee: ${task.assignee})`;
        tasksContainer.appendChild(li);
    });
}

function renderTasks() {
    const usersContainer = document.getElementById("users");
    usersContainer.innerHTML ="";

    users.forEach(user => {
     const li = document.createElement("li");
     li.innerHTML = user;
     usersContainer.appendChild(li);
    });
}


document.getElementById("tasks").addEventListener("click", event => {
    if(event.target.tagName.toLowerCase() === "li") {
        const assignee = prompt("Assign task to:");
        const taskId = parseInt(event.target.dataset.id);

        tasks.forEach(task => {
           if(task.id === taskId) {
            task.assignee = assignee;
           }
        });

        renderTasks();
    }
});

renderTasks();
renderUsers();










