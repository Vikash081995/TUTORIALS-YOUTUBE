"use strict";
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
const student = {
    name: "Doug",
    GPA: 3.5,
    clasess: [100, 200]
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}:${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(student[key]);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
