//Utility types

//----------------
//PARTIAL
//-----------------
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compci123",
  title: "final project",
  grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// {
//     "studentId": "compci123",
//     "title": "final project",
//     "grade": 95
// }
//------------------------------
//REQUIRED AND READONLY
//-----------------------------
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true
};

// assignVerified.grade = 88;
console.log(recordAssignment({ ...assignGraded, verified: true }));
// {
//     "studentId": "compci123",
//     "title": "final project",
//     "grade": 95,
//     "verified": true
// }
//--------------------------------------------
//Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF"
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U"
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 }
};
//----------------------
// Pick and Omit
//----------------------\

type AssignedResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignedResult = {
  studentId: "compci1234",
  grade: 86
};

type AssignedPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignedPreview = {
  studentId: "k123",
  title: "Final Project"
};
//-------------------
//Return type
//---------------
// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
console.log(typeof createNewAssign);
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);
//----------------------------
//Parameters
//--------------------------
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);
//--------------------------------------------------
//Awaited - helps us with the ReturnType of Promise
//-------------------------------------------------
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
