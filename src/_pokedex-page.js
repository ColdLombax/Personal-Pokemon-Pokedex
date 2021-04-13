import { newElement } from "./_functions";
const content = document.querySelector('.content');

export function loadPokedex() {
   createElements();
}

function createElements() {
    content.classList.add('pokedex-page');

    const navbarCircle = newElement('div', 'navbar-circle');
    content.appendChild(navbarCircle);

    const pokeballContainer = newElement('div', 'pokeball-link');
    content.appendChild(pokeballContainer);

    // Pokeball Elements
    const pokeballImage = document.createElement('img');
    pokeballImage.src = "../images/pokeball-icon-main.svg";
    pokeballImage.alt = 'pokeball icon';
    pokeballContainer.appendChild(pokeballImage);
    pokeballAnimation(pokeballImage);

    loadPokedexData();

}

function pokeballAnimation(pokeball) {
    setTimeout(() => {
        pokeball.style.height = '55px';
        pokeball.style.transform = 'rotate(360deg)';
    }, 500);
}

function loadPokedexData() {
    const gridContainer = newElement('div', 'grid-container');
    content.appendChild(gridContainer);

    const pokebox = newElement('div', 'pokebox');
    gridContainer.appendChild(pokebox);
}