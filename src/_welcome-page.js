import { newElement } from './_functions';

const content = document.querySelector('.content');

// LOADS AS A DEFAULT
(() => {
    const pokeballIcon = newElement('img', 'home-pokeball');
    pokeballIcon.src = "../images/pokeball-icon-main.svg";
    pokeballIcon.alt = 'pokeball icon';
    content.appendChild(pokeballIcon);

    const welcomeText = newElement('p', 'welcome-text');
    welcomeText.textContent = 'Welcome';
    content.appendChild(welcomeText);

    // FORM DATA FOR NAME, USING LOCAL STORAGE TO IF THE NAME

})();

// CHECKS FOR EVENT LISTNER
const newPageBtn = (() => {
    const launchBtn = document.querySelector('.launch-button');
    launchBtn.addEventListener('click', launchButton);
})();

function launchButton () {
    // START NAVBAR ANIMATION
    (() => {
        const homeBottomBar = document.querySelector('.nav-bar');
        homeBottomBar.style.height = '100%';
        setTimeout(() => {
            homeBottomBar.style.top = '0px';
            homeBottomBar.style.height = '40px';
        }, 1000);
    })();

    // REMOVE ELEMENTS WITH DELAY
    setTimeout(() => {
        content.clear();
    }, 600);
}