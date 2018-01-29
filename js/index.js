import ShipsStorage from './ships-storage.js';
var shipsStorage = new ShipsStorage();

hamburgerManager();
replaceSiteContent();

function replaceSiteContent() {
  let mainHandler = document.querySelector('#main');
  let sectionsWrapper = document.querySelector('#sections-wrapper');
  sectionsWrapper.classList.add('sections-wrapper--hidden');

  let newSectionsWrapper = document.createElement('div');
  newSectionsWrapper.setAttribute('id', 'sections-wrapper');
  newSectionsWrapper.classList.add('sections-wrapper');

  let section = document.createElement('section');
  section.classList.add('section');
  newSectionsWrapper.appendChild(section);

  let cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card-wrapper');
  section.appendChild(cardWrapper);

  shipsStorage.ships.forEach(generateNewShipItem);

  mainHandler.insertAdjacentElement('afterbegin', newSectionsWrapper);

  function generateNewShipItem(item) {
    let cardPanel = document.createElement('div');
    cardPanel.classList.add('card-panel');

    let cardPanelFigure = document.createElement('figure');
    cardPanelFigure.classList.add('card-panel__figure');
    cardPanel.appendChild(cardPanelFigure);

    let figureImg = document.createElement('img');
    figureImg.setAttribute('src', `./img/${item.img}`);
    figureImg.setAttribute('alt', `${item.type} ship - ${item.name}`);
    figureImg.setAttribute('width', '50%');
    figureImg.setAttribute('height', '50%');
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
