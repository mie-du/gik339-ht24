const contactFormElement = document.getElementById('contactForm');

console.log(contactFormElement);
console.log(contactForm);

console.log(window);
console.log(document);
const subSection = document.querySelector('.sub-section');
subSection.style.background = 'lime';

const subSectionAll = document.querySelectorAll('.sub-section');
console.log(subSectionAll);
subSectionAll.forEach((section) => {
  section.style.background = 'cyan';
});

const classNameCollection = document.getElementsByClassName('sub-section');
console.log(classNameCollection);
//classNameCollection.forEach(() => {});

console.log(document.body);
console.log(document.body.children[0]);
console.log(document.body.children[0].parentElement);
