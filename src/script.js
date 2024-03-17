document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addTaskBtn");
  const inputField = document.getElementById("taskInput");
  const tasksList = document.getElementById("tasksList");

  function addTask() {
    const taskText = inputField.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.className = "task-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-checkbox";

      const label = document.createElement("label");
      label.textContent = taskText;
      label.className = "task-label";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = function () {
        tasksList.removeChild(li);
      };

      checkbox.addEventListener("change", function () {
        if (this.checked) {
          label.classList.add("completed");
        } else {
          label.classList.remove("completed");
        }
      });

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteBtn);
      tasksList.appendChild(li);

      inputField.value = ""; // Clear input field
    }
  }

  addButton.addEventListener("click", addTask);
  
  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
