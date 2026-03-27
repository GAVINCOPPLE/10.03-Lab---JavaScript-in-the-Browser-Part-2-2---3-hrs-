window.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const text = taskInput.value.trim();
        if (text === "") return;

        const li = document.createElement("li");
        li.innerHTML = `${text} <button class="done-btn">X</button>`;
        
        li.querySelector(".done-btn").addEventListener("click", () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
        taskInput.focus();
    }

    addBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") addTask();
    });

    document.querySelectorAll(".done-btn").forEach(btn => {
        btn.addEventListener("click", (e) => e.target.parentElement.remove());
    });
});