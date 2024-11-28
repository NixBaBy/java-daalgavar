let students = [
  { name: "dorjoo", age: 15, gender: "male" },
  { name: "dulma", age: 30, gender: "female" },
  { name: "dondog", age: 40, gender: "male" },
  { name: "bata", age: 10, gender: "male" },
  { name: "tsetsge", age: 25, gender: "female" },
];
const findMale = (input) => {
  let genderMale = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].gender == "male") {
      genderMale.push(input[i]);
    }
  }
  return genderMale;
};
let answer = findMale(students);
console.log("Males", answer);
const findFemale = (input) => {
  let genderFemale = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].gender == "female") {
      genderFemale.push(input[i]);
    }
  }
  return genderFemale;
};
let answer1 = findFemale(students);
console.log("Females", answer1);
