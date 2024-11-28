// tegsh hamgiin baga toog ol

let ages = [10, 2, 865, 123, 8, 5, 32, 876, 234, 9];
const findMinNumbers = (input) => {
  let minNum = input[0];
  for (let i = 0; i < input.length; i++) {
    if (minNum > input[i + 1]) {
      minNum = input[i + 1];
    }
  }
  return minNum;
};
const findEven = (input) => {
  let evenNum = [];
  for (let i = 1; i < input.length; i++) {
    if (input[i] % 2 != 0) {
      evenNum.push(input[i]);
    }
  }
  return evenNum;
};
let answer = findEven(ages);
let answer2 = findMinNumbers(answer);
console.log(answer2);

// sondgoi hamgiin ih toog ol
let scores = [10, 2, 865, 123, 8, 5, 32, 876, 234, 9];
const findOddNumbers = (input) => {
  let oddNumber = [];
  for (let i = 1; i < input.length; i++) {
    if (input[i] % 2 != 0) {
      oddNumber.push(input[i]);
    }
  }
  return oddNumber;
};
const findMaxNumbers = (input) => {
    MaxNumber = 
}

//  orlogo zarlaga ylgadag
let guilge = [
  12, 456, 758, 1237, 8652, 4536, -1245366, -1325, -1246, -138, -124,
];
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
console.log("orlogonuud", answer);

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
