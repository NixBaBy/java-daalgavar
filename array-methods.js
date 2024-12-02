// tegsh hamgiin baga toog ol

// let ages = [10, 2, 865, 123, 8, 5, 32, 876, 234, 9];
// const findMinNumbers = (input) => {
//   let minNum = input[0];
//   for (let i = 0; i < input.length; i++) {
//     if (minNum > input[i + 1]) {
//       minNum = input[i + 1];
//     }
//   }
//   return minNum;
// };
// const findEven = (input) => {
//   let evenNum = [];
//   for (let i = 1; i < input.length; i++) {
//     if (input[i] % 2 != 0) {
//       evenNum.push(input[i]);
//     }
//   }
//   return evenNum;
// };
// let answer = findEven(ages);
// let answer2 = findMinNumbers(answer);
// console.log(answer2);

//  orlogo zarlaga ylgadag  ***************************

let guilge = [12, 456, 758, 1237, 8652, 4536, -1366, -1325, -1246, -138, -124];
// orlogo oloh function
const findOrlogo = (input) => {
  let orlogo = [];

  for (let i = 1; i < input.length; i++) {
    if (input[i] > 0) {
      orlogo.push(input[i]);
    }
  }
  return orlogo;
};
let answer = findOrlogo(guilge);

console.log("orlogonuud:", answer);
// niit orlogo oldog function
const totalOrlogo = (num) => {
  let totalOrlogo = 0;
  for (let i = 1; i < num.length; i++) {
    totalOrlogo = totalOrlogo + num[i];
  }
  return totalOrlogo;
};
let answer2 = totalOrlogo(answer);
console.log("niit orlogo:", answer2);
// zarlaga oldog function
const findZarlaga = (input) => {
  let zarlaga = [];
  for (let i = 1; i < input.length; i++) {
    if (input[i] < 0) {
      zarlaga.push(input[i]);
    }
  }
  return zarlaga;
};
let answer1 = findZarlaga(guilge);
console.log("zarlagnuud", answer1);

// niit zarlaga oldog function
const findTotalZarlaga = (input) => {
  let totalZarlaga = 0;
  for (let i = 0; i < input.length; i++) {
    totalZarlaga = totalZarlaga + input[i];
  }
  return totalZarlaga;
};
let answer3 = findTotalZarlaga(answer1);
console.log("niit zarlaga", answer3);

const chatProgram = (a, b, c) => {
  a();
  b();
  c();
};
let askQuestion = chatProgram(
  () => {
    console.log("bye");
  },
  () => {
    console.log("again ");
  },
  () => {
    console.log("tuguldur");
  }
);
