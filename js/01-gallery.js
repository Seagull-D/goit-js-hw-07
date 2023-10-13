import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imageItems = galleryItems.map((image) => {
  const item = document.createElement("li");
  item.innerHTML = `
    <a href="${image.original}" class="gallery__item">
      <img src="${image.preview}" alt="${image.description}" class="gallery__image" />
    </a>
  `;
  return item;
});

gallery.append(...imageItems);

console.log(imageItems);
