function functionDeclaration() {
  console.log('functionDeclaration');
}

const functionExpression = (x) => {
  console.log('functionExpression, parameter: ', x);
};

functionExpression(functionDeclaration);

function functionTakesOtherFunction(x) {
  console.log('functionTakesOtherFunction, parameter', x);
  x();
}

//functionTakesOtherFunction(1);
/* functionTakesOtherFunction(functionDeclaration);

functionTakesOtherFunction(function () {
  console.log('Anonym funktion');
});
functionTakesOtherFunction(() => {
  console.log('Anonym arrowfunktion');
});
functionTakesOtherFunction(functionDeclaration()); */

function waitingForClick(callback) {
  console.log(
    'Väntar på att någon ska klicka på en knapp, när detta är gjort, anropa tillbaka hit: ',
    callback
  );
  callback();
}

function handleClick(e) {
  console.log('Någon klickade på knappen! Parameter, ', e);
}

waitingForClick(handleClick);

const section = document.querySelector('.section');
console.log(section);
section.addEventListener('click', handleClick);
section.addEventListener('mouseover', (e) =>
  console.log('Anonym arrow-funktion som körs vid mouseover')
);

const handleBlur = (e) => {
  console.log('Eventlyssnaren handleBlur, eventobjekt', e);
};
