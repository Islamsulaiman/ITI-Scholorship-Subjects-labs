//Typescript Lab 
// Task 1 -> code this questions 

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
    function heroArray(heros: hero[]):string[] {

        let herosNames: string[]=[]
         heros.forEach(hero=> herosNames.push(hero.name))
         return herosNames
    }
    const heroArray1: hero[] = [{name: 'thanos', superpower:"eat", age: 12}, {name: 'iron man', superpower:"eat", age: 12}]
    console.log(`hero  names array is : ${heroArray(heroArray1)}`)


    // // Q7 : make id for every Heroes and make it only for read 
    // type hero = {
    //     readonly id:number
    //     name: string,
    //     superpower: string,
    //     age: number
    // }


    // Q8 : make an friends array for every hero and make it optional 
    type friends = {
        friend: string []
    }

    type hero = {
        name: string,
        superpower: string,
        age: number,
        friend? :friends 
    }

    // Q9 : make a type alias for boolean primitive data type and make it "truthyFalsy"
    type truthyFalsy = boolean
    let thisIsTrue : truthyFalsy = true;

    // Q10 : make an array that can accept only strings 

    const onlyStrings : string[] = ['TS', 'JS', 'Angular']

    // Q11 : make an array that can accept only Hero type 

    let onleHero : hero[];

    // Q12 : make an array that can accept both Hero or Numbers 

    let heroAndNumber :(hero|number)[];

    // Q13 : make a strict variable called userType than can be only assigned to "admin" or "individual" or "company"

    const userType :"admin" | "individual" | "company" = 'admin'

    // Q14 : make function that accept a Hero and return only his friends and if he have no friends return his super power 

    function heroId(oneHero: hero): any{
        if(oneHero.friend){
            return oneHero.friend
        }
        return oneHero.name

    }

    // Q15 : make a tuple that contains your name , age , dateOfBirth , university

    let myTuple : [string, number, string, string]
    myTuple  = ["islam", 28, "1995", "AASTMT"]
    myTuple.push(23)

    console.log(`myTuple is ${myTuple}`)

    // Q16 : Write a comment under your tuple and write what are problems we can probably face in tuples 
    
                //      The problem is that I can push to a tuple without taking care of It's structure.

    // Q17 : Write an Enum that contains days of the week (sat , sun , mon , ....etc) 

    enum weekDays{
        saturday,
        sunday,
        monday,
        tuseday,
        wednesday,
        thurusday,
        friday
    }

    // Q18 : Assign a string to the first and third elements and make possible changes 

    enum weekDays2{
        saturday = "sat",
        sunday = 2,
        monday = "mon",
        tuseday = 3,
        wednesday,
        thurusday,
        friday
    }

    // Q19 : change your type hero to an interface 

    interface heroInter{
        name: string,
        superpower: string,
        age: number,
    }

    // Q20 : make an interface and name it Marvel that contains an array of marvel movies 

    interface Marvel{
        movies: string[]
    }

    // Q20 : make an interface and name it HeroMarvel and make it contains Hero and Marvel interfaces together 

    interface heroMarvel extends heroInter, Marvel{}

    // Q21 : make a class on your own with any data and methods and makes his getters and setters for all values 

    class User implements Marvel{
        name: string;
        age: number;
        private history: string
        //after implementing
        movies: string[]

        constructor(name: string, age: number, history: string, movies:string[]){
            this.name = name;
            this.age = age
            this.history=history
            this.movies=movies
        }
        

         get user_name(){
            return this.name
        }

         get user_age(){
            return this.age
        }
         set user_name(name: string){
            this.name = name
        }
         set user_age(age:number){
            this.age=age
        }

         set set_history(history: string){
            this.history=history
        }

         get get_history(){
            return this.history
        }

        public whoIam(){
            return `My name is ${this.name} and Iam ${this.age} years old`
        }
    }

    const islam = new User('islam', 27, "cough", ['end game', 'spider man into the verse'])
    console.log(islam.whoIam())

    // Q22 : make one of your class properties is protected and one is private 

    console.log(`History is = ${islam.get_history}`)

    // Q23 : make your class implements your marvel interface 

        // added in the main class

    // Q24 : make an abstract class and make your class inherit it 


    abstract class MarvelClass {
        syperHeroName: string;
        
        constructor(name: string) {
            this.syperHeroName = name;
        }
    
        display(): void{}
    
        
    }
    
    class superHero extends MarvelClass { 
        superHeroAge: number;
        
        constructor(syperHeroName: string, age: number) { 
            super(syperHeroName); // must call super()
            this.superHeroAge = age;
        }
    
        // find(name:string): MarvelClass { 
        //     // execute AJAX request to find an employee from a db
        //     return new Employee(name, 1);
        // }

        display(): string{
            return `Hero name is ${this.syperHeroName} and she is very old with ${this.superHeroAge} years of age `
        }

    }
    
    let emp: MarvelClass = new superHero("Natash", 100);
    console.log(emp.display()); 
    
    




// Task 2 -> Let's show the world how amazing developer we are !!
    /*
    make a small article about any concept in typescript you liked and publish it on dev.to website 
    and send the link to your instructor 
    Link to website -> https://dev.to/
    */

// Task 3 -> register to hackerrank and solve this problems using typescript only
//link to website -> https://www.hackerrank.com/
    /* 
        1- https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
        2- https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true 
        3- https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
        4- https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true 
        5- https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
        6- https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
        7- https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
        8-https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
        9-https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true 
    */



// Guides to Help you : 
// Important Article on Typescript : https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
// Typescript playground : https://www.typescriptlang.org/play?target=0#code/Q
//

export {}