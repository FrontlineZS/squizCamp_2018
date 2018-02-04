import ShipsStorage from './ships-storage.js';
var shipsStorage = new ShipsStorage();

hamburgerManager();

const homeNav = document.querySelector('#home-nav');
homeNav.addEventListener('click', function() {
  generateHomeSite();
});

const modelShipsNav = document.querySelector('#model-ship-plans-nav');
modelShipsNav.addEventListener('click', function() {
  replaceSiteContent();
});

const historicalShipsNav = document.querySelector('#historical-ships-nav');
historicalShipsNav.addEventListener('click', function() {
  replaceSiteContent('historical');
});

const customShipsNav = document.querySelector('#custom-ships-nav');
customShipsNav.addEventListener('click', function() {
  replaceSiteContent('custom');
});

const modernShipsNav = document.querySelector('#modern-ships-nav');
modernShipsNav.addEventListener('click', function() {
  replaceSiteContent('modern');
});

const historical = document.querySelector('#historical-ships');
historical.addEventListener('click', function() {
  replaceSiteContent('historical');
});

const custom = document.querySelector('#custom-ships');
custom.addEventListener('click', function() {
  replaceSiteContent('custom');
});

const modern = document.querySelector('#modern-ships');
modern.addEventListener('click', function() {
  replaceSiteContent('modern');
});

function generateHomeSite() {
  if (document.querySelector('#new-sections-wrapper')) {
    const mainHandler = document.querySelector('#main');
    const newSectionsWrapper = document.querySelector('#new-sections-wrapper');
    mainHandler.removeChild(newSectionsWrapper);
  }

  document.querySelector('#home-sections-wrapper').classList.remove('home-sections-wrapper--hidden');
}
function replaceSiteContent(filterType) {
  const mainHandler = document.querySelector('#main');
  const homeSectionsWrapper = document.querySelector('#home-sections-wrapper');
  homeSectionsWrapper.classList.add('home-sections-wrapper--hidden');

  if (document.querySelector('#new-sections-wrapper')) {
    const newSectionsWrapper = document.querySelector('#new-sections-wrapper');
    mainHandler.removeChild(newSectionsWrapper);
  }

  const newSectionsWrapper = document.createElement('div');
  newSectionsWrapper.setAttribute('id', 'new-sections-wrapper');

  const section = document.createElement('section');
  section.classList.add('section');
  newSectionsWrapper.appendChild(section);

  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card-wrapper');
  section.appendChild(cardWrapper);

  if (arguments.length === 0) {
    shipsStorage.ships.forEach(generateNewShipItem);
  } else {
    let filteredShips = shipsStorage.ships.filter(ship => ship.type === `${filterType}`);
    filteredShips.forEach(generateNewShipItem);
  }

  mainHandler.insertAdjacentElement('afterbegin', newSectionsWrapper);
  mainHandler.scrollIntoView();

  function generateNewShipItem(item) {
    const cardPanel = document.createElement('div');
    cardPanel.classList.add('card-panel');
    cardPanel.classList.add('card-panel--custom-hover');

    const cardPanelFigure = document.createElement('figure');
    cardPanelFigure.classList.add('card-panel__figure');
    cardPanel.appendChild(cardPanelFigure);

    const figureImg = document.createElement('img');
    figureImg.setAttribute('src', `./img/${item.img}`);
    figureImg.setAttribute('alt', `${item.type} ship - ${item.name}`);
    figureImg.setAttribute('width', '266');
    figureImg.setAttribute('height', '200');
    cardPanelFigure.appendChild(figureImg);

    const cardPanelHeading = document.createElement('h3');
    cardPanelHeading.classList.add('card-panel__heading');
    cardPanelHeading.textContent = `${item.name}`;
    cardPanel.appendChild(cardPanelHeading);

    const cardPanelParagraph = document.createElement('p');
    cardPanelParagraph.classList.add('card-panel__paragraph');
    cardPanelParagraph.textContent = `${item.description}`;
    cardPanel.appendChild(cardPanelParagraph);

    const cardPanelLink = document.createElement('a');
    cardPanelLink.classList.add('card-panel__link');
    cardPanelLink.setAttribute('href', '#');
    cardPanelLink.setAttribute('title', `buy ship called ${item.name}`);
    cardPanelLink.textContent = 'BUY NOW';
    cardPanel.appendChild(cardPanelLink);

    const linkIcon = document.createElement('i');
    const linkIconClasses = ['fa', 'fa-shopping-cart', 'card-panel-link__icon'];
    linkIcon.classList.add(...linkIconClasses);
    linkIcon.setAttribute('aria-hidden', 'true');
    cardPanelLink.appendChild(linkIcon);

    cardWrapper.appendChild(cardPanel);
  }
}
function hamburgerManager() {
  const hamburger = document.querySelector('#hamburger');
  const sideNav = document.querySelector('#mySidenav');

  hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    hamburger.classList.toggle('no-hamburger');
    sideNav.classList.toggle('sidenav--open');
  });
}
