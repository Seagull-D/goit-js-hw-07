"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const wigetContainer = document.querySelector(".widget");
const spanColor = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");

colorButton.addEventListener("click", changeColor);

function changeColor(evt) {
  wigetContainer.parentNode.style.backgroundColor = getRandomHexColor();
  spanColor.style.backgroundColor =
    wigetContainer.parentNode.style.backgroundColor;
  spanColor.parentNode.style.color = getRandomHexColor();
}
