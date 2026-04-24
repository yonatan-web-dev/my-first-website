// Load saved tasks when page opens
window.onload = function () {
    loadTasks();
};

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    createTask(taskText);
    saveTasks();

    input.value = "";
}

function createTask(taskText, completed = false) {
    let li = document.createElement("li");
    li.innerText = taskText;

    if (completed) {
        li.classList.add("completed");
    }

    // Toggle complete
    li.onclick = function () {
        li.classList.toggle("completed");
        saveTasks();
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    deleteBtn.onclick = function (e) {
        e.stopPropagation(); // prevent toggle when deleting
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
}

// Save tasks to localStorage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTask(task.text, task.completed);
    });
}

// Clear all tasks
function clearAll() {
    document.getElementById("taskList").innerHTML = "";
    localStorage.removeItem("tasks");
}

// ENTER key support
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});