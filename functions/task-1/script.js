// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };

// console.log(factorial(4));

// function loop(x) {
//   if (x >= 10) {
//     return;
//   }

//   loop(x + 1);
//   console.log(x);
// }

// loop(2);

// const myArray = ["jayman", "Ola", "jamiu", "Garba"];

// const newArray = myArray.map((name, idx) => `${name} (${idx})`);

// console.log(newArray);

const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.createElement("p");

// Add your code here

function chooseName(array) {
  return array[randomNum];
}

const nameLength = names.length;
const randomNum = random(nameLength);
console.log(randomNum);

function random(length) {
  return Math.floor(Math.random() * length);
}

para.textContent = chooseName(names);
// function chooseName() {
//   const randomNumber = Math.floor(Math.random() * names.length);
//   const choice = names[randomNumber];
//   para.textContent = choice;
// }

// chooseName();

// Don't edit the code below here!

const section = document.querySelector("section");

section.appendChild(para);
