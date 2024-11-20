/** 
// 1dh dasgal alimni nit une bananii niiit une iig oloh
let apple = 15;
let banana = 10;
let applepr = 1.5;
let bananapr = 0.8;
console.log("niit alim:", apple * applepr, "niit banana:", banana * bananapr);

// 2dh dasgal eyreg surg sondgoi tegsh oloh
let x = -103;
if (x % 2 == 0) {
  if (x > 0) {
    console.log("ene eyreg bolon tegsh too");
  } else {
    console.log("ene eyreg bolon surug too");
  }
} else {
  if (x > 0) {
    console.log("ene sondgoi bolon eyreg too");
  } else {
    console.log("ene surug bolon sondgoi too");
  }
}

// 3dh dasgal login system
let name = "tuguldur";
let pass = 123;
if (name == "tuguldur") {
  if (pass == 123) {
    console.log("ta newterlee");
  } else {
    console.log("tanii pass buruu bn");
  }
} else {
  if (pass == 123) {
    console.log("tanii ner buruu bn");
  } else {
    console.log("tanii ner pass 2la buruu bn");
  }
}

//  4dh dasgal child teeneg adult oloh
let person = 11;
if (person > 13) {
  if (person < 19) {
    console.log("uswur nasnii huuhed");
  } else {
    console.log("ta nasand hursen");
  }
} else {
  console.log("ta huuhed ");
}
//  5dh dasgal the 4 operations and print the result.
let num1 = 22;
let num2 = 10;
// + uildel
console.log(num1, "+", num2, "=", num1 + num2);
// - uildel
console.log(num1, "-", num2, "=", num1 - num2);
// * uildel
console.log(num1, "*", num2, "=", num1 * num2);
//  huwaah uildel
console.log(num1, "%", num2, "=", num1 / num2);

// 6dh dasgal unen hudliig oloh prag
let a = "emegtei";
if (a == "eregtei") {
  console.log("ta eregtei mun bn ");
} else {
  console.log("ta eregtei bish bn");
}

//  7dh dasgal celsi fahrenheitru huwirgana
let cels = 100;
console.log("Fahrenheit:", cels * (9 / 5) + 32);

// 8dh dasgal Write a program to check if a year is a leap year or not.
let year = 2024;
if (year % 100 == 0) {
  if (year % 400 == 0) {
    console.log("ene leap jil mun bn");
  } else {
    console.log("ene leap jil bish bn");
  }
} else {
  if (year % 4 == 0) {
    console.log("ene leap jil mun bn");
  } else {
    console.log("ene leap jil bish bn");
  }
}

// 9dh dasgal Write a program to find the smallest of three numbers.
let boow = 20;
let boow2 = 15;
let boow3 = 11;
if (boow < boow2) {
  if (boow2 > boow3) {
    console.log("boow2 hamgiin hund");
  } else {
    console.log("boow3 hamgiin hund");
  }
} else {
  if (boow > boow3) {
    console.log("boow hamgiin hund");
  } else {
    console.log("boow3 hamgiin hund");
  }
}

<<<<<<< HEAD
// dun shalgah
let dun = 99;
if (dun > 90 && dun < 100) {
  console.log("A");
} else {
  if (dun < 90 && dun > 80) {
    console.log("B");
  } else {
    if (dun < 80 && dun > 70) {
      console.log("C");
    } else {
      if (dun < 70 && dun > 60) {
        console.log("D");
      } else {
        if (dun < 60 && dun > 50) {
          console.log("F");
        }
      }
    }
  }
}
*/

// index css java
let body = document.getElementsByTagName("body")[0];
function setColor(name) {
  body.style.backgroundColor = name;
=======
//  2024.11.20 for loop  ******************************************************************
// 1-100 tegsh
for (let i = 2; i <= 100; i = i + 2) {
  console.log(i);
}
//  100-1  buurah sondgoi

for (let i = 99; i > 0; i = i - 2) {
  console.log(i);
}
//
let num = 1024;
let hariu = 0;
for (let i = 1; i <= 10; i = i + 1) {
  hariu = num * i;
  console.log(num, "*", i, "=", hariu);
}
// Write a  find sum of all natural numbers between 1 to n.
let n = 10;
let b = 0;
for (let i = 1; i <= n; i = i + 1) {
  if (i % 2 == 0) {
    b = b + i;
  }
}
console.log(b);
// Write a C program to find all factors of a number.
let too = 12;
for (i = 1; i <= too; i = i + 1) {
  if (too % i == 0) {
    console.log(i);
  }
>>>>>>> ea13a81c97f1ad364d6b51b9dda1df0a0d36f171
}
