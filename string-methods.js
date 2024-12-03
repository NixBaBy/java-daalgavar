// //  string method
// let text = "bilguun";
// console.log(text[0], text[text.length - 1]);

// //  replace
// let text2 = "hello world";
// let replace = text2.replace("ello", "i");
// console.log("replaced:", replace);

// let text = "replace doo, doo, doo, doo, doo, doo.";
// let lyricsArr = [
//   "Baby shark,",
//   "Mommy shark,",
//   "Daddy shark,",
//   "Grandma shark,",
//   "Grandpa shark,",
//   "Let's go hunt,",
// ];
// lyricsArr.map((lyrics) => {
//   let line = text.replace("replace", lyrics);
//   for (let i = 0; i < 3; i++) {
//     console.log(line);
//   }
//   console.log(lyrics + "!");
// });

//CHALLENGES
// 1. INPUT: "Hello world! I am Fullstack Developer"
//    Ehendeh hamgiin urt ugiin olj hevleh
//    OUTPUT: "Fullstack"
let text = "Hello world! I am Fullstack Developer tuguldurbolsuga";

const oneWord = (tusug) => {
  const words = text.split(" ");
  return words;
};
let wordsOneword = oneWord();
const findLengthWord = (word) => {
  let lengthWord = word[0];
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > lengthWord.length) {
      lengthWord = word[i];
    }
  }
  return lengthWord;
};
let answer = findLengthWord(wordsOneword);
console.log(answer);

// 2. INPUT: "Hello world! I am Fullstack Developer"
//    Hamgiin ehnii hamgiin suuliing ug hoyriin bairiig solij hevleh
//    OUTPUT: "Developer world! I am Fullstack Hello"
let text = "Hello world! I am Fullstack Developer tuguldurbolsuga";
let splited = text.split(" ");
let first = text.replace(splited[splited.length - 1], splited[0]);
let last = first.replace(splited[0], splited[splited.length - 1]);
console.log(last);
