// *****
// *****
// *****
// *****
const square = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= num; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
square(15);

// *****
// *   *
// *   *
// *****
const square = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= num; i++) {
      if (j == 1 || j == num || i == 1 || i == num) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
};
square(5);

// ----*****
// ---*****
// --*****
// -*****
// *****
const rhombus = (num) => {
  for (let j = 0; j < num; j++) {
    let str = "";
    for (let i = 0; i < num - j - 1; i++) {
      str = str + "-";
    }
    for (let i = 0; i < num; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
rhombus(5);

// ----*****
// ---*   *
// --*   *
// -*   *
// *****
const rhombus = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= num - j; i++) {
      str = str + "-";
    }
    for (let i = 1; i <= num; i++) {
      if (i == 1 || i == num || j == 1 || j == num) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
};
// *****
// -*****
// --*****
// ---*****
// ----*****

const mirroredRhombus = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i < j; i++) {
      str = str + " ";
    }
    for (let i = 1; i <= num; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
mirroredRhombus(5);

// *****
// -*   *
// --*   *
// ---*   *
// ----*****
const mirroredRhombus = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i < j; i++) {
      str = str + " ";
    }
    for (let i = 1; i <= num; i++) {
      if (i == 1 || i == num || j == 1 || j == num) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
};
mirroredRhombus(5);

// *
// **
// ***
// ****
// *****
const rightTriangle = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
rightTriangle(5);

// *
// **
// * *
// *  *
// *****
const hollowRightTriangle = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= j; i++) {
      if (i == 1 || i == j || j == 1 || j == num) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
};
hollowRightTriangle(5);

// ----*
// ---**
// --***
// -****
// *****

const mirroredRightTriangle = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= num - j; i++) {
      str = str + " ";
    }
    for (let i = 1; i <= j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
mirroredRightTriangle(5);

// ----*
// ---**
// --* *
// -*  *
// *****
const hollowRightTriangle = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= num - j; i++) {
      str = str + " ";
    }
    for (let i = 1; i <= j; i++) {
      if (i == 1 || i == j || j == 1 || j == num) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
};
hollowRightTriangle(5);
// *****
// ****-
// ***--
// **---
// *----
const rightTriangle = (num) => {
  for (let j = 0; j < num; j++) {
    let str = "";
    for (let i = 1; i <= num - j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
rightTriangle(5);

// *****
// *  *-
// * *--
// **---
// *----
const rightTriangle = (num) => {
  for (let j = 0; j < num; j++) {
    let str = "";
    for (let i = 1; i <= num - j; i++) {
      if (j == 0 || j == num - 1 || i == 1 || i == num - j) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
};

// *****
// -****
// --***
// ---**
// ----*
const invertedMirroredRight = (num) => {
  for (let j = 0; j < num; j++) {
    let str = "";
    for (let i = 0; i < j; i++) {
      str = str + " ";
    }
    for (let i = 0; i < num - j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
invertedMirroredRight(5);

// *****
// -*  *
// --* *
// ---**
// ----*
const hollowInvertedMirroredRight = (num) => {
  for (let j = 0; j < num; j++) {
    let str = "";
    for (let i = 0; i < j; i++) {
      str = str + " ";
    }
    for (let i = 1; i <= num - j; i++) {
      if (i == 1 || i == num - j || j == 0 || j == num) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
};
hollowInvertedMirroredRight(5);
//     *
//    ***
//   *****
//  *******
// *********
const pyramid = (num) => {
  for (let j = 0; j < num; j++) {
    str = "";
    for (let i = 1; i <= num - j; i++) {
      str = str + " ";
    }
    for (let i = 0; i < j * 2 + 1; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
pyramid(5);

//     *
//    * *
//   *   *
//  *     *
// *********
const pyramid = (num) => {
  for (let j = 0; j < num; j++) {
    str = "";
    for (let i = 1; i <= num - j; i++) {
      str = str + " ";
    }
    for (let i = 0; i <= j * 2; i++) {
      if (j == 0 || j == num - 1 || i == 0 || i == j * 2) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
};
pyramid(5);

// *********
//  *******
//   *****
//    ***
//     *

const invertedPyramid = (num) => {
  for (let j = 0; j < num; j++) {
    str = "";
    for (let i = 1; i <= j; i++) {
      str = str + " ";
    }
    for (let i = 0; i <= num - j * 2 + 3; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
invertedPyramid(5);

// *********
//  *     *
//   *   *
//    * *
//     *

const invertedPyramid = (num) => {
  for (let j = 0; j < num; j++) {
    str = "";
    for (let i = 1; i <= j; i++) {
      str = str + " ";
    }
    for (let i = 0; i <= num - j * 2 + 3; i++) {
      if (j == 0 || j == num - 1 || i == 0 || i == num - j * 2 + 3) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
};
invertedPyramid(5);

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

const halfDiamond = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
  for (let j = 1; j < num; j++) {
    let str = "";
    for (let i = 1; i <= num - j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
halfDiamond(10);

//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

const mirroredHalfDiamond = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= num - j; i++) {
      str = str + " ";
    }
    for (let i = 1; i <= j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= j; i++) {
      str = str + " ";
    }
    for (let i = 1; i <= num - j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
mirroredHalfDiamond(7);

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
const diamondStar = (num) => {
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= num - j; i++) {
      str = str + " ";
    }
    for (let i = 1; i < j * 2; i++) {
      str = str + "*";
    }
    console.log(str);
  }
  for (let j = 1; j <= num; j++) {
    let str = "";
    for (let i = 1; i <= j; i++) {
      str = str + "-";
    }
    for (let i = 0; i <= num - j * 1; i++) {
      str = str + "*";
    }
    console.log(str);
  }
};
diamondStar(5);
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
