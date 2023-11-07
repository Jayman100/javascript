const file = document.querySelector(".image-input");
const img = document.querySelector(".original-img");

file.addEventListener("change", handleFiles);

function handleFiles() {
  const fileObject = file.files[0];

  const imgURL = window.URL.createObjectURL(fileObject);

  img.src = imgURL;

  const fileObjectReader = new FileReader();
  fileObjectReader.readAsArrayBuffer(fileObject);

  fileObjectReader.onload = () => {
    const fileObjectReaderResult = fileObjectReader.result;
    console.log(`fileReader result: ${fileObjectReaderResult}`);

    //? Since the file is read as arrayBuffer, it will return an arrayBuffer which cannot be manipulated directly the content of the buffer but we can create  a typedArray object or Dateview object  to read and write the content : For this we will create a typedArray.

    let newBuffer = new Uint8Array(fileObjectReaderResult);

    console.log("unsigned typedArray:", newBuffer);

    const newBufferLength = newBuffer.length;

    // let newBufferArray;
    for (let i = 0; i < newBufferLength; i++) {
      //   newBufferArray = [newBuffer[i]];
      if (i > 500 && i < 900) {
        newBuffer[i] = Math.ceil(newBuffer[i] / 6);
      }
    }

    console.log(newBuffer);

    // console.log(newBufferArray);

    //? create a blob

    const outputBlob = new Blob([newBuffer], { type: "image/*" });

    const outputImg = document.querySelector(".grey-img");
    console.log(outputBlob);

    const outputURL = window.URL.createObjectURL(outputBlob);
    outputImg.src = outputURL;
  };
}

// let newArray = [];

// let colNumber = 4;

// for (let i = 0; i < newBufferLength; i += colNumber) {
//   newArray.push(newBuffer.slice(i, i + colNumber));
// }
// console.log(newArray);
