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
let year = 2028;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    console.log("ene leap jil bish");
  } else {
    if (year % 400 == 0) {
      console.log("ene leap jil bish");
    } else {
      console.log("ene leap jil mun");
    }
  }
} else {
  console.log("ene leap jil bish");
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
