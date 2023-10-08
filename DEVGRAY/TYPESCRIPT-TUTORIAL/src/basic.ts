//basics-data types
let myName: string = "Dave Gray";
let meaningOfLife: number;
let isLoading: boolean;
//union type
let album: string | number;

myName = "John";
meaningOfLife = 42;
isLoading = true;
album = "Van Halen";

//function parameters
const sum = (a: number, b: number) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean | string;
