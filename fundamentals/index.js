/*
To-Do:
Disable the the check button, before inputing a number, and add try..catch to only accept numbers as input.

checkRandom.disabled = true;
*/

const randomNumber = Math.ceil(Math.random() * 100);
const inputNumber = document.querySelector("#inputNumber");

const checkRandom = document.querySelector(".checkRandom");

console.log("Guess a number!!!");
checkRandom.onclick = function () {
  console.log("clicked");

  const input = Number(inputNumber.value);
  const errorCheck = document.querySelector(".errorText");
  // errorCheck.textContent = "yay!!!";

  console.log(`The random number is ${randomNumber}`);

  if (input === randomNumber) {
    errorCheck.textContent = `yay!!! you are right, ${input} is the correct number`;
    errorCheck.style.color = "green";
  } else if (input > randomNumber) {
    errorCheck.textContent = `${input} is greater random number`;
    errorCheck.style.color = "red";
  } else if (input < randomNumber) {
    errorCheck.textContent = `${input} is less than random number`;
    errorCheck.style.color = "purple";
  } else {
    errorCheck.textContent = "input a number";
    errorCheck.style.color = "black";
  }
};

try {
  try {
    const myFloat = Number.parseFloat(x);
    console.log("our float is ", myFloat);
  } catch (fuccup) {
    console.log("our fuccup is -> ", fuccup);
    throw fuccup;
  }
} catch (gotcha) {
  console.log("on the outer levle, the error / is ", gotcha, "yoyo");
}

// try {
//   // throw "javelin";
//   // throw { name: "Bubba", message: "salmon" };
//   throw new Error("A strick"); // Built-in object or error object-> Error(name), A strick(message)
//   console.log("hello");
// } catch (err) {
//   // const errLength = err.length;
//   // console.log(errLength);
//   console.log("caught", err);
// } finally {
//   console.log("Took you a long time");
// }

const inputName = document.querySelector("#inputName");
const checkName = document.querySelector(".checkName");

checkName.onclick = function () {
  console.log("clicked");

  const errorCheck = document.querySelector(".nameErrorText");
  const name = inputName.value;

  const nameLength = name.length;
  console.log(nameLength);

  const convert = isNaN(name);
  console.log(convert);
  try {
    switch (convert) {
      case false:
        throw new TypeError("This is a number");
        break;
      default:
        errorCheck.textContent = "cool";
    }
  } catch (e) {
    errorCheck.textContent = e.message;
  }
};

//   try {
//     if (nameLength >= 4) {
//       errorCheck.textContent = "";
//       errorCheck.style.display = "none";
//       console.log("hmmm goood");
//     } else {
//       throw new Error(
//         `Name entered has ${nameLength} characters , it should 4 or more.`
//       );
//     }
//   } catch (nameError) {
//     console.log(nameError.message);
//     errorCheck.textContent = nameError.message;
//     errorCheck.style.backgroundColor = "green";
//     errorCheck.style.color = "yellow";
//     errorCheck.style.display = "inline-block";
//     errorCheck.style.padding = "10px 20px";
//     errorCheck.style.marginTop = "10px";
//   }
// };

// button disabled
// const nameField = document.getElementById("userName");
// const sendButton = document.getElementById("sendButton");

// sendButton.disabled = true;
// // [note: this is disabled since it causes this article to always load with this example focused and scrolled into view]
// //nameField.focus();

// nameField.addEventListener("input", (event) => {
//   const elem = event.target;
//   const valid = elem.value.length !== 0;

//   if (valid && sendButton.disabled) {
//     sendButton.disabled = false;
//   } else if (!valid && !sendButton.disabled) {
//     sendButton.disabled = true;
//   }
// });
