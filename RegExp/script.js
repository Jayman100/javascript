// const myRe = /d(b+)d/g;
// const myArray = myRe.exec("cdbbdbsbz");

// console.log(myArray);

// const str = "fee fi fo fum";
// const re = /\w+\s/g;

// console.log(str.match(re));

// const personList = `First_Name: John, Last_Name: Doe
// First_Name: Jane, Last_Name: Smith`;

// const regexpNames =
//   /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/gm;

// console.log(personList.matchAll(regexpNames));

// for (const match of personList.matchAll(regexpNames)) {
//   console.log(match);
//   console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
// }

// const personList = `First_Name: John, Last_Name: Doe
// First_Name: Jane, Last_Name: Smith`;

// const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
// for (const match of personList.matchAll(regexpNames)) {
//   console.log(match);
//   console.log(`Hello ${match[1]} ${match[2]}`);
// }

// const quote = `Single quote "'" and double quote '"'`;
// const regexpQuotes = /(['"]).*?\1/g;
// for (const match of quote.matchAll(regexpQuotes)) {
//   // console.log(match);
//   console.log(match[0]);
// }

// const code = `function add(x, y) {
//   return x + y;
// }`;
// const functionRegexp =
//   /(function\s+)(?<name>[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*)/du;
// const match = functionRegexp.exec(code);

// console.log(match);

// const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
// const order = "Let me get some bacon and eggs, please";

// console.log(breakfasts.join("|"));
// const hajj = order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));

// console.log(hajj);
// Returns ['bacon', 'eggs']

const createPassInput = document.querySelector(".user__password");

const confirmPassInput = document.querySelector(".user__confirmpassword");

const passRequire = document.querySelector(".userpassword-requirements");

const passRequireLi = document.querySelectorAll(
  ".userpassword-requirements li"
);

createPassInput.addEventListener("keyup", handleRequirements);
confirmPassInput.addEventListener("keyup", handlePassMatch);

function handleRequirements() {
  const createPassValue = createPassInput.value;

  createPassValue.length > 0
    ? (passRequire.style.display = "block")
    : (passRequire.style.display = "none");

  function checkSpecialChar(value) {
    return /\W/g.test(value);
  }

  function checkUppercase(value) {
    return /[A-Z]/g.test(value);
  }

  function checkLowercase(value) {
    return /[a-z]/g.test(value);
  }

  function checkNum(value) {
    return /\d/g.test(value);
  }

  checkUppercase(createPassValue) === true
    ? (passRequireLi[0].style.color = "green")
    : (passRequireLi[0].style.color = "red");
  checkLowercase(createPassValue) === true
    ? (passRequireLi[1].style.color = "green")
    : (passRequireLi[1].style.color = "red");
  checkNum(createPassValue) === true
    ? (passRequireLi[2].style.color = "green")
    : (passRequireLi[2].style.color = "red");
  checkSpecialChar(createPassValue) === true
    ? (passRequireLi[3].style.color = "green")
    : (passRequireLi[3].style.color = "red");
}

const passwordMatch = document.querySelector(".passwordMatch");

function handlePassMatch() {
  if (createPassInput.value !== confirmPassInput.value) {
    passwordMatch.style.display = "block";
  } else {
    passwordMatch.style.display = "none";
  }
}

const gmailInput = document.querySelector(".user__mail");
const mailMatch = document.querySelector(".mailMatch");
const btn = document.querySelector(".btn");

btn.addEventListener("click", handleClick);

function handleClick() {
  function matchGmail(gmail) {
    const regMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return /(\w+).| (\w+|)@(w+|\.).\w+/.test(gmail);
    return regMail.test(gmail);
  }

  if (matchGmail(gmailInput.value)) {
    mailMatch.style.display = "none";
  } else {
    mailMatch.style.display = "block";
  }
  // console.log(matchGmail(gmailInput.value));
}
