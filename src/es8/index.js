// Object.entries(objeto) retorna el objeto convertido en arreglo con key value pairs

const data1 = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana'
}

const entries = Object.entries(data1);
console.log(entries);
console.log(entries.length);

// Object.values(objeto) retorna un arreglo con los valores de un objeto

const data2 = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana'
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

// Padding

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'));

// Trailing commas

const obj = {
  name: 'adrian',
}

// Async Await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => resolve('Hello World'), 3000);
    } else {
      reject(new Error('Test Error'));
    }
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();