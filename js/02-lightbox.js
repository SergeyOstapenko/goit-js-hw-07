import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galerryContainer = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(({ original, preview, description }) => {
    return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                src="${preview}"
                alt="${description}" />
            </a>`;
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

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
