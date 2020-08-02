

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

// Converted to arrow function
printHello = () => "Hello there!";

// Converted to an arrow function
addition = (a, b) => a + b;

doubleAddition = (c, d) => addition(c, d) * 2;

// Practice for loops

let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
}