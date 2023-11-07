// Create handlers for input and button

const inputField = document.querySelector("#number");
const submitBtn = document.querySelector(".submit-btn");
const resetBtn = document.querySelector(".reset-btn");
//create listener for the btn on click

submitBtn.addEventListener("click", submit);
inputField.addEventListener("keyup", check);
// resetBtn.addEventListener("click", reset);

//create handler for the input value, even-number , odd-number and prime-number

const evenNumber = document.querySelector(".even-number");
const oddNumber = document.querySelector(".odd-number");
const primeNumber = document.querySelector(".prime-number");

const evenNumberPara = document.querySelector(".even-number-para");

const errorCheck = document.querySelector(".error-check");
// create function to check if a number is even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }

  return false;
}

// create a function to check if a number is prime

function isPrime(x) {
  for (let i = 2; i < x; i++) {
    console.log(i);
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2));
// create the submit function

function submit() {
  const input = inputField.value;

  //create a loop that go through

  for (let i = 1; i <= input; i++) {
    if (isEven(i)) {
      const evenNumPara = document.createElement("p");
      evenNumPara.classList.add("even-number-para");
      evenNumber.appendChild(evenNumPara);
      evenNumPara.innerText = i;

      resetBtn.addEventListener("click", () => {
        evenNumber.removeChild(evenNumPara);
      });
    } else {
      const oddNumPara = document.createElement("p");
      oddNumPara.classList.add("odd-number-para");
      oddNumber.appendChild(oddNumPara);
      oddNumPara.innerText = i;

      resetBtn.addEventListener("click", () => {
        oddNumber.removeChild(oddNumPara);
      });
    }
  }

  let i = 2;
  while (i <= input) {
    if (isPrime(i)) {
      const primeNumPara = document.createElement("p");
      primeNumPara.classList.add("prime-number-para");
      primeNumber.appendChild(primeNumPara);
      primeNumPara.innerText = i;

      resetBtn.addEventListener("click", () => {
        primeNumber.removeChild(primeNumPara);
      });
    }

    i++;
  }

  inputField.value = " ";
}

function check() {
  try {
    if (isNaN(inputField.value)) {
      throw new Error("please enter a number");
    } else {
      errorCheck.textContent = "";
    }
  } catch (e) {
    errorCheck.textContent = e.message;
  }
}
