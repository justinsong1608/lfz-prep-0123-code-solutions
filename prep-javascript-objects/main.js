var person = {
  firstName: 'Justin',
  lastName: 'Song',
  hobby: 'Playing sports'
};
console.log(person);
var fullName = "The person's name is: " + person.firstName + ' ' + person.lastName;
console.log(fullName);
person.job = 'Student';
console.log("The person's current job is: " + person.job);
person.previousJob = 'Teacher';
console.log("The person's previous job is: " + person.previousJob);
console.log('The complete person object: ');
console.log(person);
