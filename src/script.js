document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('addTaskBtn');
    const inputField = document.getElementById('taskInput');
    const tasksList = document.getElementById('tasksList');

    // Function to add a task
    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'task-item';

            const span = document.createElement('span');
            span.textContent = taskText;
            span.className = 'task-text';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = function() {
                tasksList.removeChild(li);
            };

            li.appendChild(span);
            li.appendChild(deleteBtn);
            tasksList.appendChild(li);

            inputField.value = ''; // Clear input field
        }
    }

    addButton.addEventListener('click', addTask);

    // Allow pressing Enter to add a task
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
