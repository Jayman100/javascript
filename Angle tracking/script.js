const moveLeftObject = document.querySelector(".left-eye");
const moveRightObject = document.querySelector(".right-eye");
const moveLeftObjectRect = moveLeftObject.getBoundingClientRect();
const moveRightObjectRect = moveRightObject.getBoundingClientRect();
document.addEventListener("mousemove", move);

console.log(moveLeftObjectRect);
function move(e) {
  const mX = e.clientX;
  const mY = e.clientY;
  const x = mX - (moveLeftObjectRect.left + moveLeftObjectRect.width / 2);
  const y = mY - (moveLeftObjectRect.top + moveLeftObjectRect.height / 2);
  console.log(`x: ${x} ; y: ${y}`);

  //   const rotationDegree = (Math.atan(y / x) * 180) / Math.PI;
  let rotationDegree2 = (Math.atan2(y, x) * 180) / Math.PI + 90;
  if (rotationDegree2 < 0) {
    rotationDegree2 = 360 - rotationDegree2 * -1;
  }
  //   console.log("rotation degree: ", rotationDegree);
  console.log("rotation degree2: ", rotationDegree2);
  moveLeftObject.style.rotate = rotationDegree2 + "deg";

  const mrX = e.clientX;
  const mrY = e.clientY;
  const xr = mX - (moveRightObjectRect.left + moveRightObjectRect.width / 2);
  const yr = mY - (moveRightObjectRect.top + moveRightObjectRect.height / 2);
  console.log(`x: ${x} ; y: ${y}`);

  //   const rotationDegree = (Math.atan(y / x) * 180) / Math.PI;
  let rotationDegree1 = (Math.atan2(yr, xr) * 180) / Math.PI + 90;
  if (rotationDegree1 < 0) {
    rotationDegree1 = 360 - rotationDegree1 * -1;
  }
  //   console.log("rotation degree: ", rotationDegree);
  console.log("rotation degree2: ", rotationDegree2);
  moveRightObject.style.rotate = rotationDegree1 + "deg";
}
