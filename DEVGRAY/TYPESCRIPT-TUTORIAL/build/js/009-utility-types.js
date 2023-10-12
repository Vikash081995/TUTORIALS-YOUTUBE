"use strict";
//Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compci123",
    title: "final project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// {
//     "studentId": "compci123",
//     "title": "final project",
//     "grade": 95
// }
//------------------------------
//REQUIRED AND READONLY
//-----------------------------
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 88;
console.log(recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true })));
// {
//     "studentId": "compci123",
//     "title": "final project",
//     "grade": 95,
//     "verified": true
// }
//--------------------------------------------
//Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 }
};
const score = {
    studentId: "compci1234",
    grade: 86
};
const preview = {
    studentId: "k123",
    title: "Final Project"
};
//-------------------
//Return type
//---------------
// type newAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
console.log(typeof createNewAssign);
const tsAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);
const assignArgs = ["generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
