const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";

  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// ctx.tr;
// Add your code here

window.addEventListener("keydown", moveCircle);

function moveCircle(e) {
  if (e.key === "w") {
    y -= 2;
  } else if (e.key === "a") {
    x -= 2;
  } else if (e.key === "s") {
    y += 2;
  } else if (e.key === "d") {
    x += 2;
  }

  drawCircle(x, y, size);
}
