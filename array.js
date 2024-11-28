let ages = [20, 20, 30, 40, 50, 10];
function findSumOfAges(ages) {
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
  }
  return sum;
}
let answer = findSumOfAges(ages);
console.log("niilber ni:", answer);

function findAverageAge(ages) {
  const sumAges = findSumOfAges(ages);
  console.log("dundaj ni:", sumAges / ages.length);
}
findAverageAge(ages);

// array dotorh hamgiiin ih tegsh toog ol

//  array dotrh hamgiin baga utgiig ol

// let scores = [20, 20, 30, 40, 50, 10, 5, 3, 15];
// const findMinNumbers = (num) => {
//   let minNum = num[0];
//   for (let i = 0; i < num.length; i++) {
//     if (minNum > num[i + 1]) {
//       minNum = num[i + 1];
//     }
//   }
//   return minNum;
// };
// let answer = findMinNumbers(scores);
// console.log(answer);

// array dotorh hamgiin baga gehdee sondgoi utgiig ol

let scores = [2, 20, 30, 40, 50, 10, 5, 4, 15];
const findMinOdd = (num) => {
  let oddNum = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      oddNum.push(num[i]);
    }
  }
  return oddNum;
};
let answer = findMinOdd(scores);

const findMinNumbers = (num) => {
  let minNum = num[0];
  for (let i = 0; i < num.length; i++) {
    if (minNum > num[i + 1]) {
      minNum = num[i + 1];
    }
  }
  return minNum;
};
let answer1 = findMinNumbers(answer);
console.log(answer1);
