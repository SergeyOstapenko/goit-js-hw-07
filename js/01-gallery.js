import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const galerryContainer = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(({ original, preview, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
          />
      </a>
  </div> `;
  })
  .join("");

galerryContainer.insertAdjacentHTML("beforeend", createGallery);
galerryContainer.addEventListener("click", onContainerClick);

function onContainerClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target);

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
