// Parametros por defecto en funciones

function newFunction(name, age, country) {
  var name = name || 'adrian';
  var age = age || 27;
  var country = country || 'CO';
  console.log(name, age, country);
}

// es6

function newFunction2(name = 'adrian', age = 27, country = 'CO') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'MX');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilínea

let lorem = 'Esta es una frase dentro de un párrafo \n'
+ 'Esta es otra frase dentro de otro párrafo.';

// es6

let lorem2 = `Erase una vez una historia feliz
ahora es sólo un cuento de horror`;

console.log(lorem);
console.log(lorem2);

// Destructuración (Destructuring assignment)

let person = {
  'name': 'adrian',
  'age': 27,
  'country': 'CO'
}

console.log(person.name, person.age);

let { name } = person;
console.log(name);

// Spread operator

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// let

{
  var globalVar = 'Global Var';
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

// const

const a = 'b';
a = 'a';
console.log(a);

// Crear objetos

let myName = 'adrian';
let myAge = 27;
// es5
obj = {name: myName, age: myAge};
// es6
obj2 = {myName, myAge};
console.log(obj2);

// Funciones flecha (Arrow functions)

const names = [
  {name: 'adrian', age: 27},
  {name: 'Jessica', age: 25}
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  // ...
}

const listOfNames4 = name => {
  // ...
}

const square = num => num * num;

// Promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('hola'))
  .catch(error => console.log(error));

// Clases

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

// Módulos (Modules), export e import

import hello from './module.js';

hello();

// generators

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);