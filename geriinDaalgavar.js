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

// 12.4 gertee hiiw
const contactsString =
  "Alice:99123456,Bob:99678901,Charlie:99543210,David:99321098,Eve:99234567,Frank:99456789,Grace:99789012,Hannah:99876543,Ivy:99987654,Jack:99111234"; // Ene string deer uuriinhuu ner utasaa nemeed nereern haihad zuvhun dugaarn garj ireh// object array -> [{name:Alice, phone: 99123456}]let contactsArray = contactsString.split(",");let objectsArray = contactsArray.map((contact) => {  let personArr = contact.split(":");  return {    name: personArr[0],    phone: personArr[1],  };});let me = {  name: "Bilguun",  phone: 99112233,};objectsArray.push(me);const searchContact = (searchValue) => {  let fountContact = objectsArray.find((contact) => {    return (      contact.name.toLowerCase() === searchValue.toLowerCase() ||      contact.phone === searchValue    );  });  return fountContact || "Oldsongui";};console.log(searchContact("BILGUUN"));

// 3. Input: "97699123456"
//    Utasnii dugaariig formatalj zuv bolgoj haruulah
//    Output: "(976) 99123456"
let number = "97690131305";
let replacedNumber = number.replace("976", "(976) ");
console.log(replacedNumber);
// 4. Input: "I am fucking tired", 'fucking'
//    Haraaliin ugiin censor hiih
//    Output: "I am **** tired"
let censoredWord = "bitii huts fucking solior";
let replacedcensoredWord = censoredWord.replace("fucking", "****");
console.log(replacedcensoredWord);

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
//  challange
//  get students that the name includes B letter // name.include() method

// get students tath their name length is longer than 5 characters
//  nasn sondgoi too baihin bol ol
// employ
// tsalinn 70k gaas ih
// department engineer gesnig ol
//  2project 2lngiin complet hiisn ajilchdiig ol
