"use strict";
//literal types
let myFirstName;
let userName;
userName = "Amy";
//--------------------------------------
// function
//--------------------------------------
const add = (a, b) => {
    return a + b;
};
//----------------------------
// function with no return value
//----------------------------
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
//-------------------------
// using function keyword
//-------------------------
let substract = function (c, d) {
    return c - d;
};
logMsg(substract(3, 4));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
let divide = function (c, d) {
    return c / d;
};
logMsg(divide(4, 2));
//----------------------
//optional parameter
//----------------------
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//----------------------
//default parameters
//----------------------
const sumAll = (a = 3, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 2));
logMsg(sumAll(undefined, 2));
//-----------------
//Rest parameters
//-----------------
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(2, 3, 4, 5));
//------------------------
//never type
//-----------------------
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type gaurd
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This should never happen!");
};
