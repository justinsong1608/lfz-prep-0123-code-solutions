function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var result = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise: ', result);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greeting = getGreeting('World');
console.log('getGreeting Exercise: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var m5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise: ', m5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var d5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivdeBy5 Exercise: ', d5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumber Exercise: ', subtract);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}
var circle = getCircleCircumference(5);
console.log('getCircleCirumference Exercise: ', circle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var name = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise: ', name);

function cube(number) {
  return number * number * number;
}
var cubic = cube(5);
console.log('cube Exercise: ', cubic);
