const buttons = document.getElementsByTagName('button');
const inputFields = document.querySelectorAll('.input-field');
console.log(buttons);
console.log(inputFields);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleClick);
}
inputFields.forEach((field) => {
  field.addEventListener('blur', handleBlur);
});

const output = document.getElementById('output');
const dynamicDisplay = document.getElementById('dynamicDisplay');

function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
  const html = `<p>Fältet ${name} har värdet ${value}</p>`;
  output.insertAdjacentHTML('beforeend', html);
}

function handleClick(e) {
  e.preventDefault();
  const targetName = e.target.id;

  const colorField = settings.color;
  const contentField = settings.content;

  const newElement = document.createElement('div');
  newElement.classList.add('new-element');
  newElement.style.backgroundColor = colorField.value;
  newElement.innerHTML = contentField.value;

  dynamicDisplay.insertAdjacentElement('beforeend', newElement);
  console.log(targetName);
}
