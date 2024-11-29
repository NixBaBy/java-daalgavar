// let students = [
//   { name: "dorjoo", age: 15, gender: "male" },
//   { name: "dulma", age: 30, gender: "female" },
//   { name: "dondog", age: 40, gender: "male" },
//   { name: "bata", age: 10, gender: "male" },
//   { name: "tsetsge", age: 25, gender: "female" },
// ];
// const findMale = (input) => {
//   let genderMale = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].gender == "male") {
//       genderMale.push(input[i]);
//     }
//   }
//   return genderMale;
// };
// let answer = findMale(students);
// console.log("Males", answer);
// const findFemale = (input) => {
//   let genderFemale = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].gender == "female") {
//       genderFemale.push(input[i]);
//     }
//   }
//   return genderFemale;
// };
// let answer1 = findFemale(students);
// console.log("Females", answer1);

//  suragchdiin dungiin dundaj ol
let students = [
  { name: "boldo", age: 10, grades: [100, 100, 100, 100, 100], gender: "male" },
  { name: "tugu", age: 10, grades: [90, 90, 90, 90, 90], gender: "male" },
  {
    name: "sapara",
    age: 43,
    grades: [100, 100, 100, 100, 100],
    gender: "male",
  },
];
// neg suragchiin dungiin dundaj
const findOneStudentAverageGrade = (oneStudent) => {
  let grades = oneStudent.grades;
  let num = 0;
  for (let i = 0; i < grades.length; i++) {
    num = num + grades[i];
  }
  let average = num / grades.length;
  return average;
};
// buh suragchiin dungiiin dundaj
const findAllStudentAverageGrade = (allStudent) => {
  let num = 0;
  for (let i = 0; i < students.length; i++) {
    let average = findOneStudentAverageGrade(allStudent[i]);
    num = num + average;
  }
  let allAverage = num / allStudent.length;
  return allAverage;
};
let answer = findAllStudentAverageGrade(students);
console.log(answer);

// buh suragchiin nasnii dundaj
const findAverageAge = (allStudent) => {
  let allAges = 0;
  for (let i = 0; i < allStudent.length; i++) {
    allAges = allAges + allStudent[i].age;
  }
  let averageAge = allAges / allStudent.length;
  return averageAge;
};
let answer1 = findAverageAge(students);
console.log(answer1);
