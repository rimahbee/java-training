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
//console.log(true, false, "true", "false");

// methods can return booleans
//let email = 'luigi@thenetninja.co.uk';
//let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('!');
//let result = names.includes('bowser');

//console.log(result);

// comparison operators
//let age = 25;

/* console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25); */

//let name = 'shaun';

//console.log(name == 'shaun');
//console.log(name == 'Shaun');
//console.log(name > 'crystal');  // s comes later in the alphabet than c, so it is greater
//console.log(name > 'Shaun');   // lowercase letters are greater than uppercase letters
//console.log(name > 'Crystal');

// loose comparison (different types can still be equal)

//console.log(age != 25);
//console.log(age != '25');

// string comparison (different types cannot be equal)

//console.log(age === 25);
//console.log(age === '25');
//console.log(age !== 25);
//console.log(age !== '25');

// type conversion
//let score = '100';

//score = Number(score);
//console.log(score + 1);
//console.log(typeof score);

//let result = Number('hello');
//let result = String(50);
//let result = Boolean(0);
//let result = Boolean('');

//console.log(result, typeof result);

// VIDEO 3 -- Loops & Conditionals

// for loops

/* for(let i = 0; i < 5; i++){
  console.log('in loop:', i);
}

console.log('loop finished'); */

//const names = ['shaun', 'mario', 'luigi'];

/* for(let i = 0; i < names.length; i++){
  //console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
} */

// while loops
//const names = ['shaun', 'mario', 'luigi'];
/* let i = 0;

while(i < 5){
  console.log('in loop: ', i);
  i++;
} */

/* let i = 0;
while(i < names.length){
  console.log(names[i]);
  i++;
} */

/* let i = 3;
do{
  console.log('val of i is: ', i);
  i++;
} while(i < 5); */

// if statements
/* const age = 25;

if(age > 20){
  console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3){
  console.log("that's a lot of ninjas");
} */

// logical operators - OR || and AND &&

/* const password = 'p@ss12';

if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length >= 5){
  console.log('that password is strong enough');
} else {
  console.log('password is not strong enough');
} */

// logical NOT (!)

/* let user = false;

if(!user){
  console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false); */

// break and continue

/* const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue;
  }

  console.log('your score: ', scores[i]);

  if(scores[i] === 100){
    console.log('congrats, you got the top score!');
    break;
  }
} */

// switch statements

/* const grade = 'A';

switch(grade){
  case 'A':
    console.log('you got an A!');
    break;
  case 'B':
    console.log('you got an B!');
    break;
  case 'C':
    console.log('you got an C!');
    break;
  case 'D':
    console.log('you got an D!');
    break;
  case 'E':
    console.log('you got an E!');
    break;
  default:
    console.log('not a valid grade');
} */

// variables & block scope
/* const age = 30;


if(true){
  const age = 40;
  const name = 'shaun';
  console.log('inside first code block: ', age, name);

  if(true){
    const age = 50;
    console.log('inside second code block: ', age);
    var test = 'hello';
  }
}

console.log('outside code block: ', age, name, test); */

// VIDEO 4 -- Functions & Methods

// function expression
/* const speak =  function(){
  console.log('good day');
}; */

//greet();
//greet();
//speak();
//speak();
//greet();

// function declaration
/* function greet(){
  console.log('hello there');
} */

// arguments & parameters
/* const speak =  function(name = 'luigi', time = 'night'){
  console.log(`good ${time} ${name}`);
}; */

//speak('mario', 'morning');
//speak();
//speak('shaun');

// returning values

/* const calcArea = function(radius){
  return 3.14 * radius**2;
}; */



// arrow functions

/* const calcArea = radius => 3.14 * radius**2;


const area = calcArea(5);
console.log('area is:', area); */

/* const greet = function(){
  return 'hello, world';
}; */

/* const greet = () => 'hello, world';
const result = greet();
console.log(result); */

/* const bill = function(products, tax){
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products [i] * tax;
  }
  return total;
} */

/* const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products [i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2)); */

//const name = 'shaun';

// functions

//const greet = () => 'hello';

//let resultOne = greet();
//console.log(resultOne);

// methods

//let resultTwo = name.toUpperCase();
//console.log(resultTwo);

// callbacks & foreach

/* const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

myFunc(value => {
  console.log(value);
}); */

/* let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}; */

/* people.forEach((person, index) => {
  console.log(index, person);
}); */

//people.forEach(logPerson);

// get a reference to the 'ul'
/* const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html; */

// VIDEO 5 -- Object Literals

/* const blogs = [
  { title: 'why mac & cheese rules', likes: 30 },
  { title: '10 things to make with marmite', likes: 50 }
];

console.log(blogs); */

/* let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
  ],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
    //console.log(this.blogs);
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    })
  }
};

user.logBlogs(); */

//user.logBlogs();
//console.log(this);

/* console.log(user);
console.log(user.name);
//user.age = 35;
console.log(user.age);

const key = 'location';
console.log(user['name']);
console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);
console.log(user[key]);

console.log(typeof user); */

//user.login();
//user.logout();

// Math objects

/* console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100)); */

// primitive values

/* let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); */

// reference values

/* const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo); */

// VIDEO 6 -- JavaScript & the DOM

//const para = document.querySelector('body > h1');

//console.log(para);

//const paras = document.querySelectorAll('p');

/* paras.forEach(para => {
  console.log(para);
}); */
//console.log(paras[2]);

//const errors = document.querySelectorAll('.error');
//console.log(errors);

// get an element by ID

//const title = document.getElementById('page-title');
//console.log(title);

// get elements by their class name

//const errors = document.getElementsByClassName('error');
//console.log(errors);
//console.log(errors[0]);

// get elements by their tag name

//const paras = document.getElementsByTagName('p');
//console.log(paras);
//console.log(paras[1]);

//const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText = 'ninjas are awesome!';

//const paras = document.querySelectorAll('p');

/* paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += ' new text';
}); */

//const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

//const people = ['mario', 'luigi', 'yoshi'];

/* people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
}); */

/* const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'TheNet Ninja Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green'); */

//const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;');

//console.log(title.style);
//console.log(title.style.color);

//title.style.margin = '50px';
//title.style.color = 'crimson';
//title.style.fontSize = '60px';
//title.style.margin = '';

/* const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success'); */

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  }
  if(p.innerText.includes('success')){
    p.classList.add('success');
  }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');
