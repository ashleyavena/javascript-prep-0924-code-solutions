// create your loops here.

function whileLoop1() {
  let index = 0;
  const firstArray = [];
  while (index < 10) {
    firstArray.push(index);
    index++;
  }
  return firstArray;
}

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  let index = 0;
  const secondArray = [];
  while (index <= 18) {
    secondArray.push(index);
    index += 2;
  }
  return secondArray;
}
const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  const thirdArray = [];
  for (let index = 0; index < 10; index++) {
    thirdArray.push(index);
  }
  return thirdArray;
}
const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time to explosion:' + index + ' ');
  }
}
forLoop2();

function forInLoop1(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}

const object = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
const forInLoop1Result = forInLoop1(object);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const arrayTwo = [];
  for (const key in object) {
    arrayTwo.push(object[key]);
  }
  return arrayTwo;
}
const forInLoop2Result = forInLoop2(object);
console.log(forInLoop2Result);
