const person = {
  firstName: 'Misa',
  lastName: 'Amane',
  hobby: 'supporting kira',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("the person's name is", fullName);

person.job = 'assisting kira';
console.log("the person's job is", person.job);

person['previousJob'] = 'model';
console.log("the person's previous job was", person['previousJob']);

console.log('the complete person object:', person);
console.log(typeof person);
