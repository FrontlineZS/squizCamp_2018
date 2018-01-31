import ShipsStorage from './ships-storage.js';
var shipsStorage = new ShipsStorage();

hamburgerManager();

let homeNav = document.querySelector('#home-nav');
let modelShipsNav = document.querySelector('#model-ship-plans-nav');
let historicalShipsNav = document.querySelector('#historical-ships-nav');
let customShipsNav = document.querySelector('#custom-ships-nav');
let modernShipsNav = document.querySelector('#modern-ships-nav');
let historical = document.querySelector('#historical-ships');
let custom = document.querySelector('#custom-ships');
let modern = document.querySelector('#modern-ships');

homeNav.addEventListener('click', function() {
  generateHomeSite();
});
modelShipsNav.addEventListener('click', function() {
  replaceSiteContent();
});
historicalShipsNav.addEventListener('click', function() {
  replaceSiteContent('historical');
});
customShipsNav.addEventListener('click', function() {
  replaceSiteContent('custom');
});
modernShipsNav.addEventListener('click', function() {
  replaceSiteContent('modern');
});
historical.addEventListener('click', function() {
  replaceSiteContent('historical');
})
custom.addEventListener('click', function() {
  replaceSiteContent('custom');
})
modern.addEventListener('click', function() {
  replaceSiteContent('modern');
})

function generateHomeSite() {
  let currentSectionsWrapper = document.querySelector('#new-sections-wrapper');
  let homeSectionsWapper = document.querySelector('#home-sections-wrapper');

  currentSectionsWrapper.classList.add('sections-wrapper--hidden');

  homeSectionsWapper.classList.remove('sections-wrapper--hidden');
  homeSectionsWapper.classList.add('sections-wrapper');
}
function replaceSiteContent(filterType) {
  let mainHandler = document.querySelector('#main');
  let sectionsWrapper = document.querySelector('#home-sections-wrapper');
  sectionsWrapper.classList.add('sections-wrapper--hidden');

  let newSectionsWrapper = document.createElement('div');
  newSectionsWrapper.setAttribute('id', 'new-sections-wrapper');
  newSectionsWrapper.classList.add('sections-wrapper');

  let section = document.createElement('section');
  section.classList.add('section');
  newSectionsWrapper.appendChild(section);

  let cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card-wrapper');
  section.appendChild(cardWrapper);

  if (arguments.length === 0) {
    shipsStorage.ships.forEach(generateNewShipItem);
  } else {
    let filteredShips = shipsStorage.ships.filter(ship => ship.type === `${filterType}`);
    filteredShips.forEach(generateNewShipItem);
  }

  mainHandler.insertAdjacentElement('afterbegin', newSectionsWrapper);

  function generateNewShipItem(item) {
    let cardPanel = document.createElement('div');
    cardPanel.classList.add('card-panel');
    cardPanel.classList.add('card-panel--custom-hover');

    let cardPanelFigure = document.createElement('figure');
    cardPanelFigure.classList.add('card-panel__figure');
    cardPanel.appendChild(cardPanelFigure);

    let figureImg = document.createElement('img');
    figureImg.setAttribute('src', `./img/${item.img}`);
    figureImg.setAttribute('alt', `${item.type} ship - ${item.name}`);
    figureImg.setAttribute('width', '266');
    figureImg.setAttribute('height', '200');
    cardPanelFigure.appendChild(figureImg);

    let cardPanelHeading = document.createElement('h3');
    cardPanelHeading.classList.add('card-panel__heading');
    cardPanelHeading.textContent = `${item.name}`;
    cardPanel.appendChild(cardPanelHeading);

    let cardPanelParagraph = document.createElement('p');
    cardPanelParagraph.classList.add('card-panel__paragraph');
    cardPanelParagraph.textContent = `${item.description}`;
    cardPanel.appendChild(cardPanelParagraph);

    let cardPanelLink = document.createElement('a');
    cardPanelLink.classList.add('card-panel__link');
    cardPanelLink.setAttribute('href', '#');
    cardPanelLink.setAttribute('title', `buy ship called ${item.name}`);
    cardPanelLink.textContent = 'BUY NOW';
    cardPanel.appendChild(cardPanelLink);

    let linkIcon = document.createElement('i');
    let linkIconClasses = ['fa', 'fa-shopping-cart', 'card-panel-link__icon'];
    linkIcon.classList.add(...linkIconClasses);
    linkIcon.setAttribute('aria-hidden', 'true');
    cardPanelLink.appendChild(linkIcon);

    cardWrapper.appendChild(cardPanel);
  }
}
function hamburgerManager() {
  let hamburger = document.querySelector('#hamburger');
  let sideNav = document.querySelector('#mySidenav');

  hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    hamburger.classList.toggle('no-hamburger');
    sideNav.classList.toggle('sidenav--open');
  });
}
