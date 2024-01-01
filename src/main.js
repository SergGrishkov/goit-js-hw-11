import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('input');
const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('body>span');

const BASE_URL = 'https://pixabay.com/api/';

const params = {
  key: '41531560-af55148938f1784ffe04592f4',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

document.addEventListener('DOMContentLoaded', () => {
  loaderEl.style.display = 'none';
});

function getPicture(searchParams) {
  return fetch(`${BASE_URL}?${new URLSearchParams(searchParams)}`)
    .then(response => {
      if (!response.ok) {
        loaderEl.style.display = 'none';
        throw Error(response.status);
      }
      return response.json();
    })
    .then(({ hits }) => {
      if (hits.length > 0) {
        loaderEl.style.display = 'none';
        gallery.innerHTML = renderImages(hits);
        new SimpleLightbox('.gallery a', {
          nav: true,
          captionDelay: 250,
          captionsData: 'alt',
          close: true,
          enableKeyboard: true,
          docClose: true,
        }).refresh();
      } else {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        loaderEl.style.display = 'none';
      }
    })
    .catch(e => {
      console.log(e);
    })
    .finally(() => {
      formEl.reset();
    });
}

formEl.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.type === 'submit') {
    loaderEl.style.display = 'block';
    params.q = inputEl.value;
    getPicture(params);
  }
});

function renderImages(listImages) {
  return listImages.reduce(
    (acc, image) =>
      acc +
      `<li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
      <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
      />
    </a>
    <div class="info-img">
    <p>Likes<span>${image.likes}</span></p>
    <p>Views<span>${image.views}</span></p>
    <p>Comments<span>${image.comments}</span></p>
    <p>Downloads<span>${image.downloads}</span></p>
    </div>
  </li>`,
    ''
  );
}
