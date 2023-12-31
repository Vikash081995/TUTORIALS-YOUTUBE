//Type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

interface Guitarist2 {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

type UserId = stringOrNumber;

//literal types
let myFirstName: "Dave";
let userName: "Dave" | "john" | "Amy";
userName = "Amy";

//--------------------------------------
// function
//--------------------------------------
const add = (a: number, b: number): number => {
  return a + b;
};
//----------------------------
// function with no return value
//----------------------------
const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
//-------------------------
// using function keyword
//-------------------------
let substract = function (c: number, d: number): number {
  return c - d;
};
logMsg(substract(3, 4));
//-------------------------
//function type aliases
//-------------------------
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));
//------------------------
//function interface
//------------------------
interface mathFunc {
  (a: number, b: number): number;
}

let divide: mathFunc = function (c, d) {
  return c / d;
};

logMsg(divide(4, 2));
//----------------------
//optional parameter
//----------------------
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
//----------------------
//default parameters
//----------------------
const sumAll = (a: number = 3, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 2));
logMsg(sumAll(undefined, 2));
//-----------------
//Rest parameters
//-----------------
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(2, 3, 4, 5));
//------------------------
//never type
//-----------------------
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//custom type gaurd
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
//use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen!");
};
