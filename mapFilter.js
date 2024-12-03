// let students = [
//   { name: "Boldoo", age: 15, grades: [10, 20, 30, 90, 80], gender: "male" },
//   { name: "Saraa", age: 14, grades: [70, 60, 85, 90, 75], gender: "female" },
//   { name: "Tuvshuu", age: 16, grades: [55, 40, 75, 80, 90], gender: "male" },
//   { name: "Anu", age: 15, grades: [95, 85, 70, 90, 88], gender: "female" },
//   { name: "Enkhee", age: 17, grades: [50, 45, 60, 70, 80], gender: "male" },
//   { name: "Temuulen", age: 14, grades: [60, 70, 90, 80, 95], gender: "male" },
//   { name: "Nandin", age: 15, grades: [80, 85, 90, 75, 88], gender: "female" },
//   { name: "Batsaikhan", age: 16, grades: [40, 50, 60, 70, 80], gender: "male" },
//   { name: "Ariunaa", age: 14, grades: [75, 85, 95, 90, 80], gender: "female" },
//   {
//     name: "Zoljargal",
//     age: 17,
//     grades: [55, 65, 75, 85, 95],
//     gender: "female",
//   },
//   { name: "Bat-Erdene", age: 15, grades: [40, 50, 60, 70, 80], gender: "male" },
//   { name: "Uchral", age: 16, grades: [85, 90, 95, 88, 80], gender: "female" },
//   { name: "Amaraa", age: 14, grades: [60, 70, 75, 85, 90], gender: "male" },
//   { name: "Odnoo", age: 15, grades: [50, 60, 70, 80, 90], gender: "female" },
//   { name: "Erdenee", age: 19, grades: [45, 55, 65, 75, 85], gender: "male" },
//   { name: "Sukhbat", age: 14, grades: [90, 95, 88, 85, 80], gender: "male" },
//   { name: "Gantulga", age: 16, grades: [40, 60, 70, 80, 90], gender: "male" },
//   { name: "Tsolmon", age: 19, grades: [80, 85, 90, 95, 88], gender: "female" },
//   { name: "Khuslen", age: 14, grades: [70, 75, 80, 85, 90], gender: "female" },
//   { name: "Bayar", age: 19, grades: [60, 70, 80, 90, 95], gender: "male" },
// ];
// // buh nasand hursen huniig ol filter
let findAdult = students.filter((adult) => {
  return adult.age > 18;
});
// console.log({ findAdult });
// //  zuvhun nernuudiig butsaa map
// let onlyNames = students.map((names) => {
//   return names.name;
// });
// console.log(onlyNames);
// // //  nasaar sortl
// let ageSort = students.sort((student1, student2) => {
//   return student2.age - student1.age;
// });
// console.log(ageSort);
// // dungiin dundaj map
// const averageGrades = (averageGrades) => {
//   let average = averageGrades.map((student) => {
//     let num = 0;
//     student.grades.map((grade) => {
//       num = num + grade;
//     });
//     return num / students.length;
//   });
//   return average;
// };
// let average1 = averageGrades(students);
// console.log(average1);
// // dungiin dundjaar sortl
// let averageGradesSort = average1.sort((student1, student2) => {
//   return student2 - student1;
// });
// console.log(averageGradesSort);

// ********************
const employees = [
  {
    id: 1,
    name: "Alice",
    department: "Engineering",
    salary: 85000,
    performance: [4, 5, 3, 4],
    projects: [
      { projectId: "P101", status: "completed", hoursSpent: 120 },
      { projectId: "P102", status: "in-progress", hoursSpent: 60 },
    ],
  },
  {
    id: 2,
    name: "Bob",
    department: "HR",
    salary: 60000,
    performance: [3, 4, 4, 3],
    projects: [
      { projectId: "P201", status: "completed", hoursSpent: 90 },
      { projectId: "P202", status: "completed", hoursSpent: 110 },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    department: "Engineering",
    salary: 95000,
    performance: [5, 5, 4, 5],
    projects: [
      { projectId: "P301", status: "completed", hoursSpent: 200 },
      { projectId: "P302", status: "in-progress", hoursSpent: 80 },
    ],
  },
  {
    id: 4,
    name: "Diana",
    department: "Marketing",
    salary: 72000,
    performance: [4, 4, 4, 3],
    projects: [
      { projectId: "P401", status: "completed", hoursSpent: 150 },
      { projectId: "P402", status: "in-progress", hoursSpent: 50 },
    ],
  },
  {
    id: 5,
    name: "Edward",
    department: "Sales",
    salary: 65000,
    performance: [3, 4, 3, 2],
    projects: [
      { projectId: "P501", status: "completed", hoursSpent: 100 },
      { projectId: "P502", status: "in-progress", hoursSpent: 70 },
    ],
  },
  {
    id: 6,
    name: "Fiona",
    department: "Finance",
    salary: 90000,
    performance: [5, 4, 5, 4],
    projects: [
      { projectId: "P601", status: "completed", hoursSpent: 160 },
      { projectId: "P602", status: "completed", hoursSpent: 140 },
    ],
  },
  {
    id: 7,
    name: "George",
    department: "Engineering",
    salary: 87000,
    performance: [4, 3, 4, 4],
    projects: [
      { projectId: "P701", status: "completed", hoursSpent: 130 },
      { projectId: "P702", status: "in-progress", hoursSpent: 90 },
    ],
  },
  {
    id: 8,
    name: "Hannah",
    department: "HR",
    salary: 62000,
    performance: [3, 3, 4, 3],
    projects: [
      { projectId: "P801", status: "completed", hoursSpent: 80 },
      { projectId: "P802", status: "in-progress", hoursSpent: 50 },
    ],
  },
  {
    id: 9,
    name: "Irene",
    department: "Marketing",
    salary: 78000,
    performance: [4, 5, 5, 4],
    projects: [
      { projectId: "P901", status: "completed", hoursSpent: 140 },
      { projectId: "P902", status: "completed", hoursSpent: 160 },
    ],
  },
  {
    id: 10,
    name: "Jack",
    department: "Sales",
    salary: 72000,
    performance: [4, 4, 3, 4],
    projects: [
      { projectId: "P1001", status: "completed", hoursSpent: 110 },
      { projectId: "P1002", status: "in-progress", hoursSpent: 70 },
    ],
  },
  {
    id: 11,
    name: "Karen",
    department: "Finance",
    salary: 85000,
    performance: [4, 4, 4, 5],
    projects: [
      { projectId: "P1101", status: "completed", hoursSpent: 120 },
      { projectId: "P1102", status: "completed", hoursSpent: 140 },
    ],
  },
  {
    id: 12,
    name: "Liam",
    department: "Engineering",
    salary: 93000,
    performance: [5, 5, 4, 5],
    projects: [
      { projectId: "P1201", status: "completed", hoursSpent: 210 },
      { projectId: "P1202", status: "in-progress", hoursSpent: 100 },
    ],
  },
];
// 1. Average Performance Write a function to get an array
//    of names for employees whose average performance score is
//    greater than or equal to 4.5.
let averagePer = employees.map((names) => {
  sum = 0;
  names.performance.map((per) => {
    sum += per;
  });
  return sum / employees.performance.length;
});
console.log(averagePer);
