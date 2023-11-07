const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// Add your code here
// ctx.fillStyle = color;
// ctx.fillRect(x, y, width, height);
// Don't edit the code below here!
function drawSquare(xr, yr, wr, hr, cl) {
  ctx.fillStyle = cl;
  ctx.fillRect(xr, yr, wr, hr);
}

drawSquare(x, y, width, height, color);
const section = document.querySelector("section");
