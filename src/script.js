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

      const textSpan = document.createElement("span");
      textSpan.textContent = taskText;
      textSpan.className = "task-text";

      const editInput = document.createElement("textarea");
      editInput.className = "edit-task-input";
      editInput.value = taskText;
      editInput.style.display = "none";
      editInput.rows = 1;
      editInput.addEventListener("input", function () {
        this.style.height = "auto"; // Reset height to ensure shrinking if text is removed
        this.style.height = this.scrollHeight + "px";
      });

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "edit-btn";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = function () {
        tasksList.removeChild(li);
      };

      editBtn.onclick = function () {
        const isEditing = editInput.style.display === "none";
        editInput.style.display = isEditing ? "block" : "none";
        textSpan.style.display = isEditing ? "none" : "block";
        editBtn.textContent = isEditing ? "Save" : "Edit";
        if (!isEditing) {
          textSpan.textContent = editInput.value; // Save new text
        }
      };

      checkbox.addEventListener("change", function () {
        if (this.checked) {
          textSpan.classList.add("completed");
        } else {
          textSpan.classList.remove("completed");
        }
      });

      li.appendChild(checkbox);
      li.appendChild(textSpan);
      li.appendChild(editInput);
      li.appendChild(editBtn);
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
