// const person = {
//   name: {
//     first: "Smith",
//     last: "Bob",
//   },
//   age: 20,
//   bio() {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
//   },

//   introduceSelf() {
//     console.log(`Hi! i'm ${this.name[0]}`);
//   },
// };

// function logProperty(propertyName) {
//   console.log(person[propertyName]);
// }

// logProperty("name");
// logProperty("age");

// //? Using the constructor method

// function createPerson(name) {
//   this.name = name;
//   this.introduceSelf = function () {
//     console.log(`Hi! i'm ${this.name}`);
//   };
// }

// const myname = new createPerson("jayman");
// console.log(myname.name);
// console.log(myname.introduceSelf());

// //? Creating a prototype
// const myDate = new Date();

// myDate.getFullYear = function () {
//   console.log("fuck Date");
// };

// const datingShit = Object.create(myDate);
// datingShit.getFullYear();

// const cat = new createCat("Sadie", "police", "Black");

// function createCat(name, breed, color) {
//   this.name = name;
//   this.breed = breed;
//   this.color = color;
//   this.greeting = function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}.`);
//   };
// }

// cat.greeting();
// console.log(cat.name);
// console.log(cat.breed);

// const school = {
//   introduceSelf() {
//     return `My name is ${this.name}, and i will be teaching you ${this.teaches}`;
//   },
// };

// function professor(name, teaches) {
//   this.name = name;
//   this.teaches = teaches;
// }

// // this copy the school properties to the constructor function
// Object.assign(professor.prototype, school);

// const newProf = new professor("Jayman", "Math");

// console.log(newProf.introduceSelf());

// const StudentName = prompt("what is your name?");
// const nationality = prompt("Where are you from?");
// const year = prompt("What year are you?");

// function StudentInfo(name, country, level) {
//   this.name = name;
//   this.country = country;
//   this.level = level;

//   this.introduceSelf = function () {
//     return `My name is ${this.name}, i'm from ${this.country} and i'm in my ${this.level} year`;
//   };
// }

// const student1 = new StudentInfo(StudentName, nationality, year);

// window.alert(student1.introduceSelf());
// console.log(student1.introduceSelf());

// class person {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   introduceSelf() {
//     return `My name is ${this.name}`;
//   }
// }

// const staffs = new person("wilson");

// console.log(staffs.introduceSelf());

// class student extends person {
//   #year;

//   constructor(name, year) {
//     super(name);
//     this.#year = year;
//   }

//   introduceSelf() {
//     return `My name is ${this.name} and i'm in my ${this.#year} year`;
//   }

//   canStudyArchery() {
//     return this.#year > 1;
//   }
// }

// const student1 = new student("jayman", 2);

// console.log(student1.canStudyArchery());

// if (student1.canStudyArchery()) {
//   console.log(`make payment`);
// }

// class Shape {
//   name;
//   sides;
//   sideLength;

//   constructor(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }
// }

// class Square extends Shape {
//   constructor(sideLength) {
//     super("square", 4, sideLength);
//   }

//   calArea() {
//     console.log(`${this.sideLength * this.sideLength}`);
//   }
// }

// const square = new Square(4);

// console.log(square.name);
// square.calArea();
// async function populate() {
//   const requestURL =
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//   const request = new Request(requestURL);

//   const response = await fetch(request);
//   const superHeroes = await response.json();

//   populateHeader(superHeroes);
//   populateHeroes(superHeroes);

//   function populateHeader(obj) {
//     const header = document.querySelector("header");
//     const myH1 = document.createElement("h1");
//     myH1.textContent = obj.squadName;
//     header.appendChild(myH1);

//     const myPara = document.createElement("p");
//     myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
//     header.appendChild(myPara);
//   }

//   function populateHeroes(obj) {
//     const section = document.querySelector("section");
//     const heroes = obj.members;

//     for (const hero of heroes) {
//       const myArticle = document.createElement("article");
//       const myH2 = document.createElement("h2");
//       const myPara1 = document.createElement("p");
//       const myPara2 = document.createElement("p");
//       const myPara3 = document.createElement("p");
//       const myList = document.createElement("ul");

//       myH2.textContent = hero.name;
//       myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
//       myPara2.textContent = `Age: ${hero.age}`;
//       myPara3.textContent = "Superpowers:";

//       const superPowers = hero.powers;
//       for (const power of superPowers) {
//         const listItem = document.createElement("li");
//         listItem.textContent = power;
//         myList.appendChild(listItem);
//       }

//       myArticle.appendChild(myH2);
//       myArticle.appendChild(myPara1);
//       myArticle.appendChild(myPara2);
//       myArticle.appendChild(myPara3);
//       myArticle.appendChild(myList);

//       section.appendChild(myArticle);
//     }
//   }
// }

// populate();

const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  catString = JSON.parse(catString);
  console.log(catString);

  function checkLastItem(array1, array2) {
    return array1.name === array2[array2.length - 1].name;
  }
  for (const catName of catString) {
    if (checkLastItem(catName, catString)) {
      motherInfo += `and ${catName.name}.`;
    } else {
      motherInfo += `${catName.name}, `;
    }

    const catKittens = catName.kittens;
    for (const catKitten of catKittens) {
      console.log(catKitten.gender);

      if (checkLastItem(catKitten, catKittens)) {
        kittenInfo += `and ${catKitten.name} - ${catKitten.gender}`;
      } else {
        kittenInfo += `${catKitten.name} - ${catKitten.gender}, `;
      }
    }
  }
  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
