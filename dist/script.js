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
const capitalizedCity =
  typeof myCity === "string"
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
  } else if (typeof num === "string") {
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
