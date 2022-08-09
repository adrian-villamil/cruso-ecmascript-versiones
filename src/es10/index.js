// flat()

let array1 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

console.log(array.flat(2));

// flagMap()

let array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap(value => [value, value * 2]));

// trimStart() - trimEnd()

let hello1 = '      hello world';

console.log(hello1);
console.log(hello1.trimStart());

let hello2 = 'hello world     ';
console.log(hello2);
console.log(hello2.trimEnd());

// try catch without the error parameter in the catch sentence

try {

} catch {
  error
}

// fromEntries(array)

let entries = [["name", "adrian"], ["age", 27]];
console.log(Object.fromEntries(entries));

// Symbol(string)

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);