"use strict";
//Basic types :
const a = 10;
const b = "Dikshant";
const c = false;
const d = "Everything at once!";
// Arrays and Tuples :
const items = ["hello", "hi", "bye"]; //array of strings permit
const marks = [90, 77, 88, 45, 95]; //array of numbers
const data = ["Dikshant", 92, true];
//unkown vs any
let myName = "dikshant";
const capitalizedName = myName.toUpperCase(); //NO checking ensured
let myCity = 12; //Checking ensured
const capitalizedCity = typeof myCity === "string"
    ? myCity.toUpperCase()
    : "How can a number be a city?"; //ERRORR
console.log(myCity); //ERROR
//never type
const abcd = () => {
    while (true) {
        console.log("Run Infinite");
    }
};
abcd();
console.log("After function");
//enums
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
// let myColor: Color = "GREEN"; //ERROR in typechecking
let myColor = Color.Green;
// type-inference : TS is based on this. A variable by default can infer its type based on the values it's assigned
let var1; //infered as any
let var2 = "Dikshant"; //infered as string
let var3 = false; //infered as boolean
let dumb; //infered as never type as its not possible
//Union-types : when we want a variable to have any one of type from the specified types
const unionTest = (num) => {
    if (typeof num === "number") {
        console.log(num.toFixed(2)); //you get methods only related to number
    }
    else if (typeof num === "string") {
        console.log(num.toUpperCase()); //you get methods only related to string
    }
};
unionTest("12"); // even though we pass a string
const user = {
    name: "Dikshant Kanela",
    college: "MSIT",
    city: "Delhi",
    rollNumber: 57,
};
const pop = 10000;
const virtus = {
    name: "Virtus GT",
    model: 2024,
    brand: "Volkswagen",
    call() {
        console.log("My name is VW Virtus GT");
    },
};
function getEmployee(data) {
    console.log("Card Number : " + data.ID);
    console.log("Employee Name : " + data.name);
    console.log("Job title : " + data.position);
}
const myDetails = {
    name: "Dikshant",
    age: 19,
    position: "SWE",
    ID: 57,
};
getEmployee(myDetails);
// interfaces vs types :
// 1.) Type: More flexible, can define unions, intersections, and more
// 2.) Interface can merge
// 3.)// Interface supports extending whereas in type we have to use intersection
// classes : They act as a structure of objects and also have functionality and methods unlike interfaces
class Pendrive {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getNameAndPrice() {
        console.log(this.name + this.price);
    }
}
const p1 = new Pendrive("Sandisk", 500);
//Access Modifier (of Properties/Methods) : 1. Public - Can be used anywhere 2. Private - Can only be used inside the class 3. Can only be used in the class or extended class
p1.name = "HP";
// p1.price = 2000 //ERROR : private properties cant be modified outside the class, not even in extended class
class Phone {
    constructor() {
        this.owner = "Dikshant Kanela";
        this.name = "iPhone 15 Pro Max"; // = ka matlab value dena : ka matlab type batana
        this.cost = 150000;
    }
    getNameAndCost() {
        console.log(this.name + this.cost);
    }
}
class CellPhone extends Phone {
    constructor() {
        super(...arguments);
        this.city = "Delhi";
    }
    getCity() {
        console.log(this.name); //is accessible in extended class
    }
}
// ** Readonly Modifier - once applied you can onlhy use it for assigning in constructor and cannot modify it outside the class and even in any method of the class! **
class Bike {
    constructor(name, brand, cost, discount) {
        this.name = name;
        this.brand = brand;
        this.cost = cost; //lhs are the properties of the class
        this.discount = discount; //rhs are the parameter names of constructor!
    }
    getDiscount() {
        // console.log(this.discount)
        this.discount = 1212; //NOT ALLOWED 
    }
}
//get : Allows to access (log) the propety like an object property but is actually a method
//set   Allows to access (log) the propety like an object property but is actually a method
class Food {
    constructor(name, meal) {
        this.name = name;
        if (meal === "veg" || "non-veg") {
            this.meal = meal;
        }
        else {
            throw Error("Meal can only be veg or non-veg");
        }
    }
    get food() {
        return this.name; //returns/logs the name property like an object
    }
    set food(meal) {
        this.meal = meal; //used to modofy the name property like an object
    }
}
const favFood = new Food("Panner", "Veg");
console.log(favFood.food); //getter
favFood.name = "Cholle Bhature"; //setter
//Literal types : Keep the type as a specific value!!
let dikshantIsAwesome;
// dikshantIsAwesome = false //error
let car;
car = "Skoda";
car = "VW";
// car = "Maruti" // error
//spread operator inside function params : 
function pqrs(name, ...others) {
    console.log(others); //an array => [Aryan,Aman,Shubham]
}
pqrs("Dikshant", "Aryan", "Aman", "Shubham");
