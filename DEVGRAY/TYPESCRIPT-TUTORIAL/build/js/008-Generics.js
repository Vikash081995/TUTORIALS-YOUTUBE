"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const processUser = (user) => {
    //process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
