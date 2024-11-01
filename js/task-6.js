function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputCreate = document.querySelector("#controls input[type='number']");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const allBoxes = document.querySelector("#boxes");

inputCreate.addEventListener("input", enterToInput);
createBtn.addEventListener("click", createElem);
destroyBtn.addEventListener("click", destroyElem);
console.dir(inputCreate);
const boxes = [];

function enterToInput(evt) {
  console.dir(evt.currentTarget);
  const value = Number(evt.currentTarget.valueAsNumber);
  if (value >= 1 && value <= 100) {
    console.log(value);
    let boxSize = 30;
    for (let i = 0; i < value; i++) {
      const div = document.createElement("div");
      div.style.width = `${boxSize}px`;
      div.style.height = `${boxSize}px`;
      div.style.backgroundColor = getRandomHexColor();
      boxSize += 10;
      boxes.push(div);
    }
  } else {
    inputCreate.style.borderColor = "red";
    allBoxes.innerHTML = "";
  }
}
console.log(boxes);
function createElem() {
  allBoxes.append(...boxes);
  inputCre.value = "";
}

function destroyElem() {
  allBoxes.innerHTML = "";
}
console.log(boxes);
