const fs = require("fs")


function edit(todo, taskId, newValue){

    //get task id 
    let targetTaskId = todo.findIndex(task => task.id === taskId)     //if no match it return -1, if match it return the index of the matched

    if(targetTaskId === -1){
        console.log("PLease enter valid task Id")

    }else{
        todo[targetTaskId].task = newValue;

        console.log(`Task number : ${taskId} were edited to ${newValue}`)
        fs.writeFileSync("./data.json", JSON.stringify(todo))
    }
     
}

function editFilter(){

}

module.exports= {
    edit:edit,
    editFilter: editFilter
}