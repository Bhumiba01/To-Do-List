const inputBox = document.getElementById("task-input");
const listContainer = document.getElementById("task-list-items");

function addTask() {
    if(inputBox.value === ''){
        alert("You must write some task");
    }
    else{
        let li = document.createElement("li");
        
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}