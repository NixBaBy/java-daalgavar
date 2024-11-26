// C program to print Equilateral triangle (Pyramid) star pattern
let row = 5;
let rowcnt = 0;
for (let i = 0; i < row; i++) {
  let str = "";
  for (let j = 0; j < row * 2; j++) {
    if (i + j >= row - 1 && i + j <= row + rowcnt - 1) {
      str += "*";
    } else str += " ";
  }
  rowcnt += 2;
  console.log(str);
}
// C program to print square or rectangle star pattern
const square = (n) => {
  for (let i = 1; i <= n; i++) {
    let m = "*****";
    console.log(m);
  }
};
square(10);

// 2. functiond 3 too uguud hamgiin iheesee 2dhiign olno
//input: (10, 11, 30)
//output: 11
const hoyrdhToo = (a, b, c) => {
  if ((a > b && a < c) || (a < b && a > c)) return a;
  if ((b > a && b < c) || (b < a && b > c)) return b;
  if ((c > a && c < b) || (c < a && c > b)) return c;
};
console.log(hoyrdhToo(11, 12, 13));

// 3. Functiond n too orj irhed ter too hurtel hevlene.
//    hevlehdee 3t huvaagddag bol "Fizz" 5t huvaagddag bol "Buzz"
//    2uulandn huvaagddag bol FizzBuzz
//input: 15
const too = (m) => {
  for (let i = 1; i <= m; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};
too(15);
