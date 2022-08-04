// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const listEl = document.querySelector('.gallery');


const images = galleryItems
    .map(
        ({ preview, original, description }) =>
            `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`
    )

    .join(" ");
listEl.insertAdjacentHTML("beforeend", images);
new SimpleLightbox('.gallery a', { captionDelay: 250 });

console.log(galleryItems);
