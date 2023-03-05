const fs = require("fs");

let taskId;
function add(newTask, todoList){

    //1 push to array
    //1.1 create object
    if((todoList.length ) < 1){
         taskId = 1;
    }else{
        taskId = todoList[todoList.length -1].id + 1;
    }
    const newEnetryObject = {id: taskId, task: newTask, taskStatus: "to-do"} 

    //1.2 push to array
    todoList.push(newEnetryObject)

    //2 write to file
    fs.writeFileSync("./data.json", JSON.stringify(todoList))

}


module.exports ={
    add: add
}
