const btnEl = document.querySelector('.js-btn');
const animeContEl = document.querySelector('.js-anime-container');
const animeImgEl = document.querySelector('.js-anime-image');
const animeNameEl = document.querySelector('.js-anime-name');

async function fetchAPI() {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Updating...";
    animeNameEl.innerText = "Updating...";

    const apiURL = "https://api.catboys.com/img";
    const response = await fetch(apiURL);
    const data = await response.json();

    btnEl.innerText = "Get Anime";
    btnEl.disabled = false;
  
    animeContEl.style.display = "block";
  
    animeImgEl.src = data.url
    animeNameEl.innerHTML = data.artist
  } catch (error) {
    btnEl.innerText = "Get Anime";
    btnEl.disabled = false;
    animeNameEl.innerHTML = 'An error ocurred, please try later again.';
  }

}

btnEl.addEventListener('click', fetchAPI);