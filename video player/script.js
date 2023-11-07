const fileSelect = document.querySelector(".file-select");
const fileElem = document.querySelector(".file-elem");

fileSelect.addEventListener("click", (e) => {
  if (fileElem) {
    fileElem.click();
  }
});
