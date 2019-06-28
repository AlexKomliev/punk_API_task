

/**
 * Dynamit Code Day Punk API
 */

const printElement = (element) => {
  let str = '';
  const { name, image_url: imageUrl, abv } = element;

  str += '<div class="grid-element">';
  str += `<div class="element-img"><img src="${imageUrl}" alt="${name}"></div>`;
  str += '<div class="element-text">';
  str += `<div class="beer-name">${name}</div>`;
  str += `<div class="beer-abv">${abv}%</div>`;
  str += '</div>';

  document.getElementById('beers').innerHTML += str;
};

const removeElement = element => element.parentNode.removeChild(element);

const changeScreen = element => element.parentNode.classList.remove('start-screen');

const requestData = () => {
  // Punk API endpoint
  const apiPage = Math.floor(Math.random() * 10) + 1;
  const API_ENDPOINT = `https://api.punkapi.com/v2/beers?page=${apiPage}&per_page=14`;

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then((result) => {
      result.forEach(printElement);
    });
};

const addListener = () => {
  const mainButton = document.getElementById('brew');
  mainButton.addEventListener('click', () => {
    requestData();
    changeScreen(mainButton);
    removeElement(mainButton);
  });
};

document.addEventListener('DOMContentLoaded', addListener);

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName === 'Enter') {
    document.getElementById('brew').click();
  }
});
