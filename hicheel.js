// map array aar for shig dawtalt guilgen yuch hamagu butsaaj bolno
let grades = [12, 457, 9, 2, 8, 543, 2, 8, 124, 675];
grades.map((a) => {
  console.log(a);
});
// sort daraalluulah tonii ih bagaar nernii daraallaar
let grades1 = [12, 457, 9, 2, 8, 543, 2, 8, 124, 675];
grades1.sort((a, b) => {
  return a - b;
});
// filter
let guilge = [123, 345, 6587, 123, 786, -34512, -3456, -2345];
let orlogo = guilge.filter((i) => i > 0);
let zarlag = guilge.filter((i) => i < 0);
console.log(orlogo);
console.log(zarlag);
// split gej yu yumbe : string iig -> array ruu hurvuulna
// "hello world" -> ["hello", "world"]
let string1 = "hello world";
let splited = string1.split(" ");
console.log(splited);
// replace gej yu yumbe
// ug olood solidg method
let string2 = "hello world";
let replaced = string2.replace("world", "tuguldur");
console.log(replaced);
// find  array ees yum haigaad olood butsaadg
const names = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "John", age: 30 },
  { name: "Jane", age: 35 },
  { name: "Joe", age: 40 },
];
let findName = names.find((person) => {
  return (person.name = "Alice");
});
console.log(findName);
// spread operator  2array naihad neg blgj bolno (urdn ... 3tseg awna)
let number1 = [1, 2, 3, 4, 5];
let number2 = [5, 4, 7, 89, 1];
let allNumber = [...number1, ...number2];
console.log(allNumber);
