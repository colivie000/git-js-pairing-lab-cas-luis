//Code your solutions in this file
function fiveTo0neHundred() {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
console.log("Function fiveToOneHundred");
fiveTo0neHundred();

function multiplesOfThree() {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}
console.log("Function multiplesOfThree");
multiplesOfThree();

function multiplesOfThreeOrFive() {
    for (let i = 3; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
console.log("Function multiplesOfThreeOrFive ");
multiplesOfThreeOrFive();

function untilNum(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}
console.log("Function untilNum");
untilNum(5);

function multiply(num1, num2) {
    return num1 * num2
}
console.log("Function multiply");
console.log(multiply(2, 4));

function add(num1, num2) {
    if (num1 === num2) {
        return ((num1 + num2) * 3);
    }
    else {
        return num1 + num2;
    }
}
console.log("Function add");
console.log(add(5, 5));
console.log(add(5, 10));

function isNegative(num) {
    if (num < 0) {
        return true
    }
    else {
        return false
    }
}
console.log("Function isNegative");
console.log(isNegative(7));

function triangleArea(num1, num2) {
    return ((num1 * num2) / 2);
}
console.log("Functon traingleArea");
console.log(triangleArea(6, 8));

function betweenTwentyAndFourty(num) {
    if (num > 20 && num < 40) {
        return true;
    }
    else {
        return false;
    }
}
console.log("Function betweenTwentyAndFourty");
console.log(betweenTwentyAndFourty(24));

function largest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log("Function largest");
console.log(largest(2, 5, 7));
