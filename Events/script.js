// const btnChange = document.querySelector(".btn-change");
// const btnAbort = document.querySelector(".btn-abort");
// const controller = new AbortController();
// const { signal } = controller;

// btnChange.addEventListener("click", changeBackground, { signal });
// btnAbort.addEventListener("click", removeListener, { signal });

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   try {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
//   } catch (e) {
//     if (e.name === "AbortError") {
//       console.error(e.message);
//     }
//   }
// }

// function removeListener() {
//   controller.abort("yeah");
//   // console.log(controller.signal);

//   console.log(signal.reason);
// }

// btn.removeEventListener("click", changeBackground);

// const controller = new AbortController();

// btn.addEventListener("click",
//   () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
//   },
//   { signal: controller.signal } // pass an AbortSignal to this handler
// );

const array = [1, 2, 3, 4];
console.log(array?.[1]); //optional chaining - read more

console.log(array[0b11]);

console.log(array.map((i) => i * 2));

array.push([5, 6]);

console.log(array);

console.log(array.flat());

array?.[4].push([7, 8]);

console.log(array);

console.log(array.flat());

arrayB = array.flat();

console.log(arrayB.flat());

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

console.log(Array.from(ingredientsList));
console.log(Object.keys(array));
console.log(object.value(array));
