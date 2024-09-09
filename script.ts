//Basic types :
const a: number = 10;
const b: string = "Dikshant";
const c: boolean = false;
const d: any = "Everything at once!";

// Arrays and Tuples :
const items: string[] = ["hello", "hi", "bye"]; //array of strings permit
const marks: number[] = [90, 77, 88, 45, 95]; //array of numbers

const data: [string, number, boolean] = ["Dikshant", 92, true];

//unkown vs any
let myName: any = "dikshant";
const capitalizedName = myName.toUpperCase(); //NO checking ensured

let myCity: unknown = 12; //Checking ensured
const capitalizedCity =
  typeof myCity === "string"
    ? myCity.toUpperCase()
    : "How can a number be a city?"; //ERRORR
console.log(myCity); //ERROR

//never type
const abcd = (): never => {
  while (true) {
    console.log("Run Infinite");
  }
};

abcd();
console.log("After function");

//enums
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

// let myColor: Color = "GREEN"; //ERROR in typechecking
let myColor: Color = Color.Green;

// type-inference : TS is based on this. A variable by default can infer its type based on the values it's assigned
let var1; //infered as any
let var2 = "Dikshant"; //infered as string
let var3 = false; //infered as boolean
let dumb: string & number; //infered as never type as its not possible

//Union-types : when we want a variable to have any one of type from the specified types

const unionTest = (num: number | string) => {
  if (typeof num === "number") {
    console.log(num.toFixed(2)); //you get methods only related to number
  } else if (typeof num === "string") {
    console.log(num.toUpperCase()); //you get methods only related to string
  }
};

unionTest("12"); // even though we pass a string

//Intersection types : used to combine multiple types into one type which can be used in a future variable

type College = {
  // a single type with two properties
  college: string;
  city: string;
};

type Student = {
  // a single type with two properties
  name: string;
  rollNumber: number;
};

// New Combined type of the two :
type StudentCollege = Student & College; // This will combine the properties of the two types

const user: StudentCollege = {
  name: "Dikshant Kanela",
  college: "MSIT",
  city: "Delhi",
  rollNumber: 57,
};

// type alias : Used to create readable types using existing types
type Population = number;
const pop: Population = 10000;

// interfaces : they only define the contract or structure that an object MUST follow
interface Car {
  name: string;
  model: number;
  brand: string;
  call(): void; //only contract, not functionality
}

const virtus: Car = {
  name: "Virtus GT",
  model: 2024,
  brand: "Volkswagen",
  call() {
    console.log("My name is VW Virtus GT");
  },
};

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  ID: number;
  position: string;
}

function getEmployee(data: Employee) {
  console.log("Card Number : " + data.ID);
  console.log("Employee Name : " + data.name);
  console.log("Job title : " + data.position);
}

const myDetails: Employee = {
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
  public name: string; //property of class
  private price: number; //property of class
  constructor(name: string, price: number) {
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
  private owner = "Dikshant Kanela"
  protected name = "iPhone 15 Pro Max"; // = ka matlab value dena : ka matlab type batana
  public cost = 150000;
  private getNameAndCost() {
    console.log(this.name + this.cost);
  }
}

class CellPhone extends Phone{
  protected city = "Delhi";
  getCity(){
    console.log(this.name) //is accessible in extended class
  }

}

// ** Readonly Modifier - once applied you can onlhy use it for assigning in constructor and cannot modify it outside the class and even in any method of the class! **
class Bike{
 public name:string;
 public brand:string;
 public cost:number;
 public readonly discount:number;

  constructor(name:string,brand:string,cost:number,discount:number){
     this.name = name;
     this.brand = brand;
     this.cost = cost;  //lhs are the properties of the class
     this.discount = discount //rhs are the parameter names of constructor!
  }
  
  getDiscount(){
    // console.log(this.discount)
    this.discount = 1212 //NOT ALLOWED 
  }

}

//get : Allows to access (log) the propety like an object property but is actually a method
//set   Allows to access (log) the propety like an object property but is actually a method

class Food{
  public name:string;
  public meal:string;

  constructor(name:string,meal:string){
    this.name = name;
    if(meal === "veg" || "non-veg"){
      this.meal = meal;
    }
    else{
      throw Error("Meal can only be veg or non-veg");
    }
    
  }
 
  get food(){
    return this.name; //returns/logs the name property like an object
  }
  
  set food(meal:string){
    this.meal = meal; //used to modofy the name property like an object
  }
}

const favFood = new Food("Panner","Veg")
console.log(favFood.food); //getter
favFood.name = "Cholle Bhature"; //setter

//Literal types : Keep the type as a specific value!!

let dikshantIsAwesome:true;
// dikshantIsAwesome = false //error

let car:"VW" | "Skoda"
car = "Skoda";
car = "VW";
// car = "Maruti" // error

//spread operator inside function params : 
function pqrs(name:string,...others:string[]){
   console.log(others) //an array => [Aryan,Aman,Shubham]
}

pqrs("Dikshant","Aryan","Aman","Shubham")