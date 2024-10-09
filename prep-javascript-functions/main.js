function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log('HoursToMinutes exercise', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
const greeting = getGreeting('Ashley');
console.log(greeting);

function addAndMultipleBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = addAndMultipleBy5(5, 10);
console.log('the result is', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(10, 7);
console.log('the difference is', difference);

function getCircleCircumference(radius) {
  return radius * 3.14 * 2;
}
const circumference = getCircleCircumference(5);
console.log('the circumference is', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Ashley', 'Avena');
console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}
const numbercubed = cube(5);
console.log('the cubed value is', numbercubed);
