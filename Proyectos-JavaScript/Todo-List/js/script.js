const taskinput = document.getElementById("task-input");
const addtaskbtn = document.getElementById("add-task-btn");
const tasklist = document.getElementById("task-list");

let taskItem;

function addtask() {
  const tasktext = taskinput.value.trim();
  if (tasktext !== "") {
    taskItem = document.createElement("li");
    taskItem.innerHTML = `<span>${tasktext}</span>
        <button class="delete-btn">Eliminar </button>
        `;
    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteTask);
    tasklist.appendChild(taskItem);
    taskinput.value = "";
  }
}

function toggleComplete(){
    this.classList.toggle("complete");
}

function deleteTask(){
    this.parentElement.remove();
}

addtaskbtn.addEventListener("click", addtask);
taskinput.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        addtask()
    }
})


tasklist.addEventListener("click",function(e){
    if(e.target.tagName ==="SPAN"){
        e.target.classList.toggle("complete");
    }
})


tasklist.addEventListener("click",function(e){
    if(e.target.classList.contains(("delete-btn"))){
        e.target.parentElement.remove();
    }
})