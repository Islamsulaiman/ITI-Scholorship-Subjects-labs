const fs = require("fs")


function listAll(todo){
    console.log(todo)
}

function listFilter(todo, option){
    console.log("listFilter")

    // for(let i = 0; i<todo.length; i++){

    // }
    todo.forEach(task => {
        if(task.taskStatus === option){
            console.log(task)
        }



    });
}



module.exports={
    listAll:listAll,
    listFilter:listFilter
}