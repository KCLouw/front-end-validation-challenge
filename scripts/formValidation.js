function myValidation(){
    let userNewTask = document.getElementById("newTask").value;
    let listTask = document.createElement("li");
    let taskText = document.createTextNode(userNewTask);
    let x = listTask.appendChild(taskText);
    let y = document.getElementById("newTaskList").appendChild(x);
    console.log(y);
    console.log(x);
    console.log(listTask);
    console.log(taskText);
    if(userNewTask.includes("<" || ">")){
        document.getElementById("errorMessage").style.display = "block";
    }else{
        document.getElementById("errorMessage").innerHTML = " ";
    }
}