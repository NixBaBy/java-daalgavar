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
//  array dotrh hamgiin baga utgiig ol
// array dotorh hamgiin baga gehdee sondgoi utgiig ol
// array dotorh hamgiiin ih tegsh toog ol

//  array dotrh hamgiin baga utgiig ol
// let numbers = [40, 20, 30, 46, 235, 87, 233, 98, 127, 10];
// const findLittle = (arr) => {
//   let littleNum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (littleNum > arr[i + 1]) {
//       littleNum = arr[i + 1];
//     }
//   }
//   console.log(littleNum);
// };
// findLittle(numbers);

// array dotorh hamgiin baga gehdee sondgoi utgiig ol
let numbers = [44, 5, 25, 46, 235, 87, 233, 98, 127, 11];
const findLittle = (arr) => {
  let littleNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
};
let answer1 = findLittle(numbers);
