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


