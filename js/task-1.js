"use strict";

const categories = document.querySelector("#categories");
console.log(`Number of categories: ${counter(categories)}`);

function counter(list) {
  const listArr = [...list.children];
  let num = 0;
  listArr.forEach((element) => {
    num += listArr.length;
  });
  return num;
}

const categoryName = document.querySelectorAll(".item h2 ");

const elemNumber = document.querySelectorAll(".item ul");

categoryName.forEach((item, index) => {
  console.log(`Category: ${item.textContent}`);
  console.log(`Elements: ${[...elemNumber[index].children].length}`);
});
