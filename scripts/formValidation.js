function myValidation(){
    let userNewTask = document.getElementById("newTask").value;
    if(userNewTask.includes("<") || userNewTask.includes(">")){
        document.getElementById("errorMessage").style.display = "block";
    }else{
        document.getElementById("errorMessage").style.display = "none";
        let listTask = document.createElement("li");
        let taskText = document.createTextNode(userNewTask);
        let x = listTask.appendChild(taskText);
        let y = document.getElementById("newTaskList").appendChild(listTask);
    };
};