let input = "Hello world! I am Fullstack Developer tuguldruasklfdsjkl";
splited = input.split(" ");
// 1. INPUT: "Hello world! I am Fullstack Developer tuguldruasklfdsjkl"
//    Ehendeh hamgiin urt ugiin olj hevleh
//    OUTPUT: "Fullstack"
const findLengthWord = (word) => {
  for (let i = 0; i < word.length; i++) {
    lengthWord = word[0];
    if (lengthWord.length < word[i].length) {
      lengthWord = word[i];
    }
  }
  return lengthWord;
};
let answer = findLengthWord(splited);
console.log(answer);
// 2. INPUT: "Hello world! I am Fullstack Developer"
//    Hamgiin ehnii hamgiin suuliing ug hoyriin bairiig solij hevleh
//    OUTPUT: "Developer world! I am Fullstack Hello"
let first = input.replace(splited[splited.length - 1], splited[0]);
let last = first.replace(splited[0], splited[splited.length - 1]);
console.log(last);
// 3. Input: "97699123456"
//    Utasnii dugaariig formatalj zuv bolgoj haruulah
//    Output: "(976) 99123456"
let phoneNumber = "178902435809";
let formattedNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
console.log(formattedNumber);

// 4. Input: "I am fucking tired", 'fucking'
//    Haraaliin ugiin censor hiih
//    Output: "I am **** tired"

// Example
const inputText = "I am fucking tired";
const wordToCensor = "fucking";
const output = censorWord(inputText, wordToCensor);
console.log(output); // "I am **** tired"
