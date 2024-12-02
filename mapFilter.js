let students = [
  { name: "Boldoo", age: 15, grades: [10, 20, 30, 90, 80], gender: "male" },
  { name: "Saraa", age: 14, grades: [70, 60, 85, 90, 75], gender: "female" },
  { name: "Tuvshuu", age: 16, grades: [55, 40, 75, 80, 90], gender: "male" },
  { name: "Anu", age: 15, grades: [95, 85, 70, 90, 88], gender: "female" },
  { name: "Enkhee", age: 17, grades: [50, 45, 60, 70, 80], gender: "male" },
  { name: "Temuulen", age: 14, grades: [60, 70, 90, 80, 95], gender: "male" },
  { name: "Nandin", age: 15, grades: [80, 85, 90, 75, 88], gender: "female" },
  { name: "Batsaikhan", age: 16, grades: [40, 50, 60, 70, 80], gender: "male" },
  { name: "Ariunaa", age: 14, grades: [75, 85, 95, 90, 80], gender: "female" },
  {
    name: "Zoljargal",
    age: 17,
    grades: [55, 65, 75, 85, 95],
    gender: "female",
  },
  { name: "Bat-Erdene", age: 15, grades: [40, 50, 60, 70, 80], gender: "male" },
  { name: "Uchral", age: 16, grades: [85, 90, 95, 88, 80], gender: "female" },
  { name: "Amaraa", age: 14, grades: [60, 70, 75, 85, 90], gender: "male" },
  { name: "Odnoo", age: 15, grades: [50, 60, 70, 80, 90], gender: "female" },
  { name: "Erdenee", age: 19, grades: [45, 55, 65, 75, 85], gender: "male" },
  { name: "Sukhbat", age: 14, grades: [90, 95, 88, 85, 80], gender: "male" },
  { name: "Gantulga", age: 16, grades: [40, 60, 70, 80, 90], gender: "male" },
  { name: "Tsolmon", age: 19, grades: [80, 85, 90, 95, 88], gender: "female" },
  { name: "Khuslen", age: 14, grades: [70, 75, 80, 85, 90], gender: "female" },
  { name: "Bayar", age: 19, grades: [60, 70, 80, 90, 95], gender: "male" },
];
// buh nasand hursen huniig ol filter
let findAdult = students.filter((adult) => {
  return adult.age > 18;
});
console.log({ findAdult });
//  zuvhun nernuudiig butsaa map
let onlyNames = students.map((names) => {
  return names.name;
});
console.log(onlyNames);
// //  nasaar sortl
let ageSort = students.sort((student1, student2) => {
  return student2.age - student1.age;
});
console.log(ageSort);
// dungiin dundaj map
const averageGrades = (averageGrades) => {
  let average = averageGrades.map((student) => {
    let num = 0;
    student.grades.map((grade) => {
      num = num + grade;
    });
    return num / students.length;
  });
  return average;
};
let average1 = averageGrades(students);
console.log(average1);
// dungiin dundjaar sortl
let averageGradesSort = average1.sort((student1, student2) => {
  return student2 - student1;
});
console.log(averageGradesSort);
