let sum = 0;
let a = 1;
let b = 2;
let count = 0;

//console.log(x);

const x = 0;
sum = addAndSubtract(a, b, 0);
sum = addAndSubtract(a, 6, 2);

function addAndSubtract(a, b, c) {
  count++;

  console.log('--- Funktionsanrop nr: ' + count + '---');
  console.log('A är: ' + a + ' B är: ' + b);

  a = a + b;

  //const y = a - c;

  if (c > 0) {
    var y = a - c;
  } else {
    let y = a;
  }

  console.log('A är efter förändring: ' + a);
  console.log('Y är: ' + y);
  return y;
}

console.log('--- Utanför funktionen --- ');
console.log('count är: ' + count + ' sum är: ' + sum);
console.log('A är: ' + a + ' B är: ' + b);
//console.log('Y är: ' + y);

example1('hello', 'world');

function example1(param1, param2) {
  console.log('Funktion: example1, parametrar: ', param1, param2);
  return 'Returnerar ' + param1 + ' ' + param2;
}

console.log(example1('console', 'log'));

const example2 = function (param1, param2) {
  console.log('Funktion: example2, parametrar: ', param1, param2);
  return 'Returnerar ' + param1 + ' ' + param2;
};

const example3 = (param) => {
  console.log('Funktion: example3, parameter: ', param);
};

example3('test');

const example4 = () => console.log('Arrow function med bara en rad');

example4();

const arrowFunction = (question) => {
  if (question) {
    let answer = 'world';
  }
  return question + ' ' + answer;
};

/* let call2 = arrowFunction('hello');
const call1 = arrowFunction();

console.log(call1);
console.log(call2); */

console.log(0 == 0);
console.log(0 == false);
console.log(0 == undefined);
console.log(0 == null);
console.log(0 == '');

console.log(null == null);
console.log(null == false);
console.log(null == undefined);
console.log(null == 0);
console.log(null == '');
console.log(null == '0');

console.log(undefined ? 'truthy' : 'falsy');
console.log(null ? 'truthy' : 'falsy');
console.log(0 ? 'truthy' : 'falsy');
console.log('' ? 'truthy' : 'falsy');
console.log(-1 ? 'truthy' : 'falsy');
console.log(1 ? 'truthy' : 'falsy');
console.log({} ? 'truthy' : 'falsy');
