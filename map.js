  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results = [];
for(let num of nums) {
  results.push(num * 2);
}
console.log(results)

// Using map()
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified further w/ map()
const simplified = nums.map(function (num) { return num * 2});
console.log(simplified);

// Simplfied even further w/ map() + arrow function
const arrow = nums.map(num => num * 2); //turned callback function into an arrow function
console.log(arrow);



// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];
//returns as an array of arrays
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// return as objects
const objStudentWithId = students.map(elem => (
  {
    name: elem.name,
    id: elem.id
  } 
));
console.log(objStudentWithId);


// None of these work!!! Return when you learn how!!!
//Using spread syntax to add the 'age' key-value pair
// let newObj = { ...students, age: '32', '26','28'};
// Object.assign(students, {age: 32, age: 26, age:28});
// console.log(students);

