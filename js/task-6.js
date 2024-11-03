function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputCreate = document.querySelector("#controls input[type='number']");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const allBoxes = document.querySelector("#boxes");
inputCreate.parentNode.classList.add("controls");
allBoxes.classList.add("boxes");
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxes.push(div);
  }
  allBoxes.innerHTML = "";
  allBoxes.append(...boxes);
}
function createBoxes(emount) {
  const emount = Number(inputCreate.value);

  if (emount >= 1 && emount <= 100) {
    createBoxes(emount);
    inputCreate.value = "";
    inputCreate.style.borderColor = "";
  } else {
    inputCreate.style.borderColor = "red";
  }
  console.log(emount);
}

function destroyBoxes() {
  allBoxes.innerHTML = "";
  inputCreate.value = "";
  inputCreate.style.borderColor = "";
}
