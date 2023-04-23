const pageInput = document.getElementById('page');
const limitInput = document.getElementById('limit');
const requestBtn = document.getElementById('request');
const imagesDiv = document.getElementById('images');

let lastRequestPage = localStorage.getItem('page');
let lastRequestLimit = localStorage.getItem('limit');

if (lastRequestPage && lastRequestLimit) {
  pageInput.value = lastRequestPage;
  limitInput.value = lastRequestLimit;
  makeRequest(lastRequestPage, lastRequestLimit);
}

requestBtn.addEventListener('click', function() {
  const page = Number(pageInput.value);
  const limit = Number(limitInput.value);

  if (isNaN(page) || isNaN(limit) || page < 1 || page > 10 || limit < 1 || limit > 10) {
    imagesDiv.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
  } else {
    makeRequest(page, limit);
    localStorage.setItem('page', page);
    localStorage.setItem('limit', limit);
  }
});

function makeRequest(page, limit) {
  const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      imagesDiv.innerHTML = '';
      data.forEach(image => {
        const img = document.createElement('img');
        img.src = image.download_url;
        imagesDiv.appendChild(img);
      });
    })
    .catch(error => {
      imagesDiv.textContent = 'Ошибка при выполнении запроса';
      console.error(error);
    });
}