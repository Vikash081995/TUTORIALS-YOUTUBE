"use strict";
//convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; // more specific
console.log(a, b, c); //hello hello hello
let d = "world";
console.log(d); //world
let e = "world";
console.log(e); //world
//Narrowing Return values and assertions
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//be carefull- TS see no problem- but a string is returned
let myVal2 = addOrConcat(2, 2, "concat");
console.log(myVal, myVal2);
//The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
img.src;
myImg.src;
