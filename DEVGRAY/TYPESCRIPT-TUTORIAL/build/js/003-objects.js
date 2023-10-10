"use strict";
let myObj;
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
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
let JP = {
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
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(JP));
//----------------------------------
//Narrowing with optional properties
//----------------------------------
const greetGuitarist1 = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello! world";
};
console.log(greetGuitarist1(JP));
