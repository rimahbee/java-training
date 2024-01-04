// VIDEO 1 -- Intro & Setup

//let age = 25;
//let year = 2019;

// log things to console
// console.log(age, year);

/* age = 30;
console.log(age);

const points = 100;
console.log(points); */

//var score = 75;
//console.log(score);

// VIDEO 2 -- Syntax Basics & Types

//strings
//console.log('hello, world');

//let email = 'mario@thenetninja.co.uk';
//console.log(email);

// string concatenation
//let firstName = 'Brandon';
//let lastName = 'Sanderson';

//let fullName = firstName + ' ' + lastName;
//console.log(fullName);

// getting characters
//console.log(fullName[2]);

// string length
//console.log(fullName.length);

// string methods
//console.log(fullName.toUpperCase());
//let result = fullName.toLowerCase();
//console.log(result, fullName);

//let index = email.indexOf('@');
//console.log(index);

// common string methods
//let email = 'mario@thenetninja.co.uk';

//let result = email.lastIndexOf('n');

//let result = email.slice(0, 5);

//let result = email.substr(4, 10);

//let result = email.replace('m', 'w');

//let result = email.replace('n', 'w');

//console.log(result);

//let radius = 10;
//const pi = 3.14;

//console.log(radius, pi);

// math operators +, -, *, /, **, %

//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius**2;

// order of operation - B I(E) D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

//let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;
//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes);

// NaN - not a number

//console.log(5 / 'hello');
//console.log(5 * 'hello');

//let result = 'the blog has ' + likes + ' likes';
//console.log(result);

// template strings
//const title = 'Best reads of 2019';
//const author = 'Mario';
//const likes = 30;

// concatenation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
//console.log(result);

// template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);

// creating html templates
/* let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes </span>
`; */

//console.log(html);

// arrays

//let ninjas = ['shaun', 'ryu', 'chun-li'];

//ninjas[1] = 'ken';
//console.log(ninjas[1]);

//let ages = [20, 25, 30, 35];
//console.log(ages[2]);

//let random = ['shaun', 'crystal', 30, 20];
//console.log(random);

//console.log(ninjas.length);

// array methods

//let result = ninjas.join('-');
//let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal']);
//let result = ninjas.push('ken');    // returns length of new array, alters original value
//result = ninjas.pop();        // returns the value that was popped off the array

//console.log(result);

// null + undefined variables

//let age = null;
//console.log(age, age + 3, `the age is ${age}`);

// booleans + comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('!');
//let result = names.includes('bowser');

//console.log(result);

// comparison operators
let age = 25;

/* console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25); */

let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');  // s comes later in the alphabet than c, so it is greater
console.log(name > 'Shaun');   // lowercase letters are greater than uppercase letters
console.log(name > 'Crystal');