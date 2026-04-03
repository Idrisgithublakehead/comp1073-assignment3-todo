// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task when button is clicked
addBtn.addEventListener('click', addTask);

// Also add task when user presses Enter in the input field
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    // Don't add empty tasks
    if (taskText === '') return;

    // Create a new list item
    const li = document.createElement('li');

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Strike through text when checked
    checkbox.addEventListener('change', function () {
        span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        span.style.opacity = checkbox.checked ? '0.45' : '1';
        li.classList.toggle('completed', checkbox.checked);
    });

    // Create the task text span
    const span = document.createElement('span');
    span.textContent = taskText;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('delete-btn');

    // EVENT HANDLER: remove the task item when delete button is clicked
    deleteBtn.addEventListener('click', function () {
        li.classList.add('removing');
        // Wait for the fade-out animation to finish before removing from DOM
        li.addEventListener('animationend', function () {
            taskList.removeChild(li);
        });
    });

    // Assemble the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
    taskInput.focus();
}
