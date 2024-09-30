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

  console.log('--- Funktionsanrop nr: ' + count + ' ---');
  console.log('A är: ' + a + ' B är: ' + b);

  a = a + b;

  //const y = a - c;

  if (c > 0) {
    var y = a - c;
  } else {
    let y = a;
  }

  console.log('A  är efter förändring: ' + a);
  console.log('Y är: ' + y);
  return y;
}

console.log('--- Utanför funktionen ---');
console.log('count är: ' + count + ' sum är: ' + sum);
console.log('A är: ' + a + ' B är: ' + b);
//console.log('Y är: ' + y);

example1('hello', 'world');

function example1(param1, param2) {
  console.log('Funktion: example1, parametrar', param1, param2);
  return 'Returnerar ' + param1 + ' ' + param2;
}

console.log(example1('console', 'log'));

const example2 = function (param1, param2) {
  console.log('Funktion: example2, parametrar', param1, param2);
  return 'Returnerar ' + param1 + ' ' + param2;
};

example2('function', 'expression');

const example3 = (param) => {
  console.log('Funktion: example3, parametrar:', param);
};

example3('Arrow-function');

const example4 = () => console.log('Arrow-function med bara en rad');

example4();

/* Denna kod representerar slutresultatet om ni följer lektionsdokumentet. 
Om ni vill testa att koppla det till er webbsida, ange 
<script src="script-lektionsdokument.js"></script> istället för <script src="script.js"></script> direkt innan </body> */
