const fs = require('fs')

function deleteAll(todo){

    todo = []
    fs.writeFileSync("./data.json", JSON.stringify(todo))
    console.log("all reecords are deleted!!")
}

function deleteSingle(todo, taskId){


    let targetTaskId = todo.findIndex(task => task.id === taskId)     //if no match it return -1, if match it return the index of the matched

    if(targetTaskId === -1){
        console.log("PLease enter valid task Id")

    }else{
        todo.splice(targetTaskId, 1) // delet the target task from todo array
        console.log(`Task number : ${taskId} were deleted`)
        fs.writeFileSync("./data.json", JSON.stringify(todo))
    }



}




module.exports={
    deleteAll: deleteAll,
    deleteSingle: deleteSingle
}