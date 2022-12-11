import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const gallery = document.querySelector(".gallery");

// Реализация делегирования на div.gallery и получение url большого изображения.

const galleryMarkup = galleryItems
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
    .join("");

gallery.innerHTML = galleryMarkup;
    
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// (on html)

// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

gallery.addEventListener("click", showModalWindow);

/**
 * open/close modal window
 * @param {Object evt}
 * @returns -
 */

function showModalWindow(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    };

// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
    
    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}">`,
        {
            onShow: () => {
                document.addEventListener("keydown", onEscapeKeyDown);
            },
            onClose: () => {
                document.removeEventListener("keydown", onEscapeKeyDown);
            },
        }
    );
    instance.show();

    /**
   * checks the condition for closing the modal window
   * @param {Object evt}
   * @returns function
   */
  function onEscapeKeyDown(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  }
};

console.log(galleryItems);