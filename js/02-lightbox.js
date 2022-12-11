import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>`
    )
    .join("");

gallery.innerHTML = galleryMarkup;

// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// (on html)

// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».

var lightbox = new SimpleLightbox('.gallery a', {
    /* options */

    // Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryItems);
