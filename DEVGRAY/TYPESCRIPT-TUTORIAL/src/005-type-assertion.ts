type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific
let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; // more specific

console.log(a, b, c); //hello hello hello

let d = <One>"world";
console.log(d); //world

let e = <string | number>"world";
console.log(e); //world

//Narrowing Return values and assertions

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

//be carefull- TS see no problem- but a string is returned
let myVal2: number = addOrConcat(2, 2, "concat") as number;

console.log(myVal, myVal2);

//The DOM
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img")! as HTMLImageElement;

img.src;
myImg.src;
