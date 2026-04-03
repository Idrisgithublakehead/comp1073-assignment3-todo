// Tuguldur Natsagdorj 200585649
//step 4 and 5

const dingSound = new Audio("sounds/ding.wav");

//get elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//add button event
addBtn.addEventListener("click", function(){
    const taskText = taskInput.value.trim();
    
    //prevent empty taks
    if (taskText === "") return;
    
    //create list
    const li = document.createElement("li");
    
    //create checkbox
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    
    //create span for text
    const span = document.createElement("span");
    span.textContent = taskText;
    
    //create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    
    //checkbox event (change)
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {

            dingSound.currentTime = 0;
dingSound.play();
          
            //add line-through
            span.style.textDecoration = "line-through";
          
            //move to bottom
            taskList.appendChild(li);
        } else {
          
            //remove line-through
            span.style.textDecoration = "none";
        }
});

//delete button event
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
 
    //addd elements to li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    //add li to list
    taskList.appendChild(li);

    // input
    taskInput.value = "";
});