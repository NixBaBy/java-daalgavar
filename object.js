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
  { name: "tugu", age: 10, grades: [100, 100, 100, 100, 100], gender: "male" },
  {
    name: "bata",
    age: 13,
    grades: [90, 90, 90, 90, 90],
    gender: "male",
  },
  {
    name: "hulan",
    age: 10,
    grades: [100, 100, 100, 100, 100],
    gender: "female",
  },
  { name: "saraa", age: 10, grades: [20, 20, 20, 20, 20], gender: "female" },
  {
    name: "nawchaa",
    age: 10,
    grades: [20, 20, 20, 20, 20],
    gender: "female",
  },
  {
    name: "tsetsegee",
    age: 10,
    grades: [20, 20, 20, 20, 20],
    gender: "female",
  },
];
//  zuvhun b usgeer ehlsn neriig returnguger oloh
const getBStudents = (students) =>
  students.filter((student) => student.name[0] == "b");
console.log(getBStudents(students));
// const getAges = (students) => students.map((student) => student.age);
// const ages = getAges(students);
// console.log({ ages });

// zuvhun ergtei suragchdiig ol baga bichigleltei
const getMaleStudents = (students) =>
  students.filter((student) => student.gender == "male");
console.log(getMaleStudents(students));

// eregtei suragchid ner hewleh*****************************************************************************************************
const findGenderMale1 = (male) => {
  let genderMale = [];
  for (let i = 0; i < male.length; i++) {
    if (male[i].gender == "male") {
      genderMale.push(male[i].name);
    }
  }
  return genderMale;
};
let maleStudents1 = findGenderMale1(students);
console.log("eregtei suragchid:", maleStudents1);
// emegtei suragchid ner *****************************************************************************************************
const findGenderFemale1 = (female) => {
  let genderFemale = [];
  for (let i = 0; i < female.length; i++) {
    if (female[i].gender == "female") {
      genderFemale.push(female[i].name);
    }
  }
  return genderFemale;
};
let femaleStudents1 = findGenderFemale1(students);
console.log("emegtei suragchid", femaleStudents1);
// eregtei suragchid uguh*****************************************************************************************************
const findGenderMale = (male) => {
  let genderMale = [];
  for (let i = 0; i < male.length; i++) {
    if (male[i].gender == "male") {
      genderMale.push(male[i]);
    }
  }
  return genderMale;
};
let maleStudents = findGenderMale(students);

// emegtei suragchid uguh *****************************************************************************************************
const findGenderFemale = (female) => {
  let genderFemale = [];
  for (let i = 0; i < female.length; i++) {
    if (female[i].gender == "female") {
      genderFemale.push(female[i]);
    }
  }
  return genderFemale;
};
let femaleStudents = findGenderFemale(students);

// neg eregtei suragchiiin dunge oloh *************************************************************************************
const findOneStudentAverageGrades = (oneMaleStudent) => {
  let grades = oneMaleStudent.grades;
  let num = 0;
  for (let i = 0; i < grades.length; i++) {
    num = num + grades[i];
  }
  let average = num / grades.length;
  return average;
};
let oneStudentGrade = findOneStudentAverageGrades(maleStudents[0]);

// buh eregtei suragchiiin dunge oloh *************************************************************************************
const findAllStudentAverageGrade = (maleStudent) => {
  let num = 0;
  for (let i = 0; i < maleStudent.length; i++) {
    let average = findOneStudentAverageGrades(students[i]);
    num = num + average;
  }
  let allStudentAverage = num / maleStudent.length;
  return allStudentAverage;
};
let allStudentsGrade = findAllStudentAverageGrade(maleStudents);
console.log("eregtei suragchidiin dundaj dun:", allStudentsGrade);

// neg emegtei suragchiiin dunge oloh *************************************************************************************
const findOneFemaleStudentAverageGrade = (oneFemaleStudent) => {
  let grades = oneFemaleStudent.grades;
  let num = 0;
  for (let i = 0; i < grades.length; i++) {
    num = num + grades[i];
  }
  let average = num / grades.length;
  return average;
};
let oneFemaleGrade = findOneFemaleStudentAverageGrade(femaleStudents[0]);

// buh emegtei suragchiiin dunge oloh *************************************************************************************

const findAllFemaleStudentGrade = (allFemaleStudent) => {
  let num = 0;
  for (let i = 0; i < femaleStudents.length; i++) {
    let femaleAverage = findOneFemaleStudentAverageGrade(femaleStudents[i]);
    num = num + femaleAverage;
  }
  let answer = num / femaleStudents.length;
  return answer;
};
let femaleStudentsAverage = findAllFemaleStudentGrade(femaleStudents);
console.log("emegtei suragchdiin dundaj dun:", femaleStudentsAverage);

//  ergtei genderiin haritsaag oloh
const findMaleGenderPer = (genderPer) => {
  maleStudentsPer = (maleStudents.length / students.length) * 100;
};
findMaleGenderPer(students);
console.log("eregtei suragchdiin huwi", maleStudentsPer, "%");

//  emegtei genderiin haritsaag oloh

const findFemaleGenderPer = (genderPer) => {
  femaleStudentsPer = (femaleStudents.length / students.length) * 100;
};
findFemaleGenderPer(students);
console.log("emegtei suragchdiin huwi", femaleStudentsPer, "%");
