/* exported head */
function head(array) {
  return array[0];
}
console.log(head());

function last(array) {
  const length = array.length;
  return array[length - 1];
}
console.log(last());

function tail(array) {
  const result = [];
  for (let index = 1; index < array.length; index++) {
    result.push(array[index]);
  }
  return result;
}
console.log(tail());

function initial(array) {
  const result = [];
  for (let index = 0; index < array.length - 1; index++) {
    result.push(array[index]);
  }
  return result;
}
console.log(initial());

function reverse(array) {
  const result = [];
  for (let index = array.length - 1; index >= 0; index--) {
    result.push(array[index]);
  }
  return result;
}
console.log(reverse());

function compact(array) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] && !Number.isNaN(array[index])) {
      result.push(array[index]);
    }
  }
  return result;
}
console.log(compact());
