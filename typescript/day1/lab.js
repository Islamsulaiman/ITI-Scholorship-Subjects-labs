"use strict";
//Typescript Lab 
// Task 1 -> code this questions 
Object.defineProperty(exports, "__esModule", { value: true });
// // Q1 : Make a typescript project using npm 
// // Q2 : declare a constant of type number and assign 5 to it 
// const num1: number = 5;
// // Q3 : decalre a function that accepts your name and age and return string of "I'm <name> and i'm <age> years old"
// function user (name: string, age: number): string{
//     return `I'm ${name} and I'm ${age} years old`
// }
// console.log(user("islam", 27))
// // Q4 : make an array of your favorite marvel heroes names 
// const marvelAvengers : string[] = ["Thanos", "Iron man", "Natash romanov"]
// // Q5 : make a type Hero that contains name , superpower and age 
// type hero = {
//     name: string,
//     superpower: string,
//     age: number
// }
// Q6 : make a function that accept array of type Hero and return only names of heros 
function heroArray(heros) {
    let herosNames = [];
    heros.forEach(hero => herosNames.push(hero.name));
    return herosNames;
}
const heroArray1 = [{ name: 'thanos', superpower: "eat", age: 12 }, { name: 'iron man', superpower: "eat", age: 12 }];
console.log(`hero  names array is : ${heroArray(heroArray1)}`);
let thisIsTrue = true;
// Q10 : make an array that can accept only strings 
const onlyStrings = ['TS', 'JS', 'Angular'];
// Q11 : make an array that can accept only Hero type 
let onleHero;
// Q12 : make an array that can accept both Hero or Numbers 
let heroAndNumber;
// Q13 : make a strict variable called userType than can be only assigned to "admin" or "individual" or "company"
const userType = 'admin';
// Q14 : make function that accept a Hero and return only his friends and if he have no friends return his super power 
function heroId(oneHero) {
    if (oneHero.friend) {
        return oneHero.friend;
    }
    return oneHero.name;
}
// Q15 : make a tuple that contains your name , age , dateOfBirth , university
let myTuple;
myTuple = ["islam", 28, "1995", "AASTMT"];
myTuple.push(23);
console.log(`myTuple is ${myTuple}`);
// Q16 : Write a comment under your tuple and write what are problems we can probably face in tuples 
//      The problem is that I can push to a tuple without taking care of It's structure.
// Q17 : Write an Enum that contains days of the week (sat , sun , mon , ....etc) 
var weekDays;
(function (weekDays) {
    weekDays[weekDays["saturday"] = 0] = "saturday";
    weekDays[weekDays["sunday"] = 1] = "sunday";
    weekDays[weekDays["monday"] = 2] = "monday";
    weekDays[weekDays["tuseday"] = 3] = "tuseday";
    weekDays[weekDays["wednesday"] = 4] = "wednesday";
    weekDays[weekDays["thurusday"] = 5] = "thurusday";
    weekDays[weekDays["friday"] = 6] = "friday";
})(weekDays || (weekDays = {}));
// Q18 : Assign a string to the first and third elements and make possible changes 
var weekDays2;
(function (weekDays2) {
    weekDays2["saturday"] = "sat";
    weekDays2[weekDays2["sunday"] = 2] = "sunday";
    weekDays2["monday"] = "mon";
    weekDays2[weekDays2["tuseday"] = 3] = "tuseday";
    weekDays2[weekDays2["wednesday"] = 4] = "wednesday";
    weekDays2[weekDays2["thurusday"] = 5] = "thurusday";
    weekDays2[weekDays2["friday"] = 6] = "friday";
})(weekDays2 || (weekDays2 = {}));
// Q21 : make a class on your own with any data and methods and makes his getters and setters for all values 
class User {
    constructor(name, age, history, movies) {
        this.name = name;
        this.age = age;
        this.history = history;
        this.movies = movies;
    }
    get user_name() {
        return this.name;
    }
    get user_age() {
        return this.age;
    }
    set user_name(name) {
        this.name = name;
    }
    set user_age(age) {
        this.age = age;
    }
    set set_history(history) {
        this.history = history;
    }
    get get_history() {
        return this.history;
    }
    whoIam() {
        return `My name is ${this.name} and Iam ${this.age} years old`;
    }
}
const islam = new User('islam', 27, "cough", ['end game', 'spider man into the verse']);
console.log(islam.whoIam());
// Q22 : make one of your class properties is protected and one is private 
console.log(`History is = ${islam.get_history}`);
// Q23 : make your class implements your marvel interface 
// added in the main class
// Q24 : make an abstract class and make your class inherit it 
class MarvelClass {
    constructor(name) {
        this.syperHeroName = name;
    }
    display() { }
}
class superHero extends MarvelClass {
    constructor(syperHeroName, age) {
        super(syperHeroName); // must call super()
        this.superHeroAge = age;
    }
    // find(name:string): MarvelClass { 
    //     // execute AJAX request to find an employee from a db
    //     return new Employee(name, 1);
    // }
    display() {
        return `Hero name is ${this.syperHeroName} and she is very old with ${this.superHeroAge} years of age `;
    }
}
let emp = new superHero("Natash", 100);
console.log(emp.display());
