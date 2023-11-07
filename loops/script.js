// Step 1 : Get handle for the parent element
const mainElement = document.querySelector(".boxContainer");

// step 2 : Get handle for sample element
const sampleElement = document.querySelector(".ball");

// get the btn handle
const btnCreate = document.querySelector(".btn");

btnCreate.addEventListener("click", create);

function create() {
  for (counter = 1; counter <= 5; counter++) {
    // console.log(counter);
    // step 3: clone sample element
    // const newSampleElement = sampleElement.cloneNode(true);

    // creating new element instead of cloning
    const newSampleElement = document.createElement("div");

    // adding class name to the newly created element
    newSampleElement.classList.add("ball");

    // step 4: append the parent element
    mainElement.appendChild(newSampleElement);

    newSampleElement.textContent = counter;

    // styling the newly created element
    newSampleElement.style.display = "flex";
  }
}

// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   // console.log(i);
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }

// let n = 0;
// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     continue;
//   }

//   n += i;
//   console.log(n);
// }

// Continue label example
// let i = 0;
// let j = 10;
// checkiandj: while (i < 4) {
//   // i++;
//   // console.log(i);
//   i += 1;
//   checkj: while (j > 4) {
//     // console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue checkj;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;

//   console.log(x);
// }

// let i = 0;
// while (i < 5) {
//   i++;
//   if (i === 2) {
//     break;
//   }

//   console.log(i);
// }

// let i = 10;
// do {
//   console.log(i);

//   i--;
// } while (i > 0);

// for (let i = 10; i > 0 && i < 10; i--) {
//   console.log(i);
// }

const myArray = ["jayman", "happy", "always"];

myArray.forEach(check);

function check(n, i) {
  console.log(n);
  console.log(i);
  console.log(n[i]);
}

// for (const prop in myArray) {
//   console.log(prop);
// } // returns an object properties

// for (i = 0; i < myArray.length; i++) {
//   console.log(i);
// } // returns the array numeric indexes

// for (const array of myArray) {
//   console.log(array);
// }  // returns the array items

const person = {
  name: "jayman",
  age: 24,
  occupation: "web developer",
};

for (const prop in person) {
  console.log(`person.${prop} = ${person[prop]}`);
}

// function isEven(x) {
//   if (x % 2 === 0) {
//     return true;
//   }

//   return false;
// }

// for (let i = 10; i >= 1; i--) {
//   // console.log(i);
//   if (isEven(i)) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }

// let n1 = 10;

// for (let i = 0; i < n1; i++) {
//   let b = i * 2;

//   // console.log(b);

//   if (b <= n1) {
//     if (b == 0) {
//     } else {
//       console.log("Count", b);
//     }
//   }
// }

const helloWorld = document.querySelector(".hello");

console.log(helloWorld.textContent);
console.log(helloWorld.innerHTML);
console.log(helloWorld.innerText);

console.log(document.querySelector("body").textContent);
console.log(document.querySelector("body").innerText);

// let i = 1;
// do {
//   if (i < 1) {
//   } else {
//     i += 1;
//     console.log(i);
//   }
//   i++;
// } while (i <= 20);

//Breaking to a label example
// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }
