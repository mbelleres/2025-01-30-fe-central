const firstName = "Eddie";
const lastName = "Ortero";
const isHappy = true;
const list = ["Tobi", 4, false];
const obj = {
  key: "value",
  name: "Eddie",
  address: {
    street: "Main St",
    city: "City Name",
    state: "CA",
  },
};
const nothing = null;
let test;
const symbol1 = Symbol('test');

// console.log(firstName)
// console.log(lastName)
// console.log(isHappy)
// console.log(list)
// console.log(obj)
// console.log(nothing)
// console.log(test)
console.log(symbol1)

const number = 5;
const number1 = "5";
const number2 = 2;

console.log("test1", number == number1);
console.log("test2", number === number1);

console.log(number + number2 - 3);
console.log(number - number2);
console.log(number / number2);
console.log(number * number2);
console.log(number % number2);
console.log(number > number2);
console.log(number < number2);

console.log("string concat:", firstName + " " + lastName);
