let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

// ------------------------------
//Object type Inference
// ------------------------------
const exampleObj = {
  prop1: "Dave",
  prop2: true
};

exampleObj.prop1 = "John";
// ------------------------------
//Object type annotations
// ------------------------------
type Guitarist = {
  name: string;
  //optional object properties
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"]
};
let JP: Guitarist = {
  name: "Eddie",
  active: true,
  albums: [1984, 5150, "OU812"]
};
//Object assignment
evh = JP;
JP = evh;
// ------------------------------
// Object type as parameters
// ------------------------------
const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(JP));
//----------------------------------
//type vs interface
//----------------------------------
interface guitarist {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
}
//----------------------------------
//Narrowing with optional properties
//----------------------------------
const greetGuitarist1 = (guitarist: guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello! world";
};
console.log(greetGuitarist1(JP));
