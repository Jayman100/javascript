const btn = document.querySelector(".off");

// Add your code here

btn.addEventListener("click", changeOn);
// btn.addEventListener("click", changeOff);

function changeOn() {
  if (btn.innerText === "Machine is off") {
    btn.innerText = "Machine is on";
  } else if (btn.innerText === "Machine is on") {
    btn.innerText = "Machine is off";
  }
}
