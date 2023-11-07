const buttonBar = document.querySelector(".button-bar");
// const btn = document.querySelectorAll("button");

// console.log(btn);

// Add your code here
buttonBar.addEventListener("click", changeBackground);

function changeBackground(e) {
  //   e.target.style.backgroundColor = dataColor;
  buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
}
