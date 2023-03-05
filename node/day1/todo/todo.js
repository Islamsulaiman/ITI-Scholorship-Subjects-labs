const fs = require("fs");

const additional = require("./add")
const list = require("./list")
const edit = require("./edit")
const deleteTasks = require("././delete")


const [,,cmd,arg, option] = process.argv;



const todo = JSON.parse( fs.readFileSync("./data.json", {encoding: "utf-8"}));  



if(cmd === "add"){

    additional.add(arg, todo)

}else if(cmd === "list") {

    //1 validate the entered option
    const filterArray = ["to-do","in-progress","done"]
    const filterOption = filterArray.includes(option)   //returns true if the user entred one of the filterArray values

    if(arg != "-s" && arg){
        console.log("Please enter a valid option")

    }else if (arg === "-s" && !filterOption){
        console.log("Please enter a valid filter option")

    }else if(arg === "-s" && arg){
        list.listFilter(todo, option)
    }else{
        list.listAll(todo)
    }
    

}else if(cmd === "edit"){

    edit.edit(todo, parseInt(arg), option);

}else if(cmd === "delete"){


    if(typeof parseInt(arg) === "number" && parseInt(arg) >= 1){

        deleteTasks.deleteSingle(todo, parseInt(arg))

    }else if (arg === "all"){

        deleteTasks.deleteAll(todo)
    }
    

}

// console.log(todo);

