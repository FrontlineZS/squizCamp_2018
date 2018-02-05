export default class ShipsStorage {
  constructor() {
    if (localStorage.getItem('ships') === null) {
      var shipsData = [
        {
          id: 1,
          name: 'Agamemnon HMS',
          type: 'historical',
          scale: '1:78',
          lengthOverall: 976,
          heightOverall: 760,
          price: 10,
          img: 'agamemnon-hms.jpg',
          description: 'The HMS Agamemnon was a third-rate ship of the line of the Royal Navy with an armament of 64.'
        },
        {
          id: 2,
          name: 'Alabama CSS',
          type: 'historical',
          scale: '1:78',
          lengthOverall: 1120,
          heightOverall: 590,
          price: 10,
          img: 'alabama-css.jpg',
          description: 'The CSS Alabama was an Auxiliary Bark built in great secrecy in 1862 by John Laird Sons'
        },
        {
          id: 3,
          name: 'Albion HMS',
          type: 'historical',
          scale: '1:125',
          lengthOverall: 1048,
          heightOverall: 680,
          price: 10,
          img: 'albion-hms.jpg',
          description: 'The HMS Albion was a Canopus-class pre-dreadnought battleship'
        },
        {
          id: 4,
          name: 'Amerigo Vespucci',
          type: 'historical',
          scale: '1:84',
          lengthOverall: 1250,
          heightOverall: 740,
          price: 10,
          img: 'amerigo-vespucci.jpg',
          description: 'The Amerigo Vespucci is a tall ship of the Marina Militare'
        },
        {
          id: 5,
          name: 'Astrolabe',
          type: 'historical',
          scale: '1:48',
          lengthOverall: 950,
          heightOverall: 700,
          price: 10,
          img: 'astrolabe.jpg',
          description: 'The Astrolabe was built by Toulon Shipyard in France and was launched in 1811.'
        },
        {
          id: 6,
          name: 'Batavia',
          type: 'historical',
          scale: '1:48',
          lengthOverall: 995,
          heightOverall: 915,
          price: 10,
          img: 'batavia.jpg',
          description: 'The Batavia was a three-masted, Dutch East India Ship with a wooden hull and an armament of 28 guns'
        },
        {
          id: 7,
          name: 'Beagle HMS',
          type: 'historical',
          scale: '1:48',
          lengthOverall: 1050,
          heightOverall: 750,
          price: 10,
          img: 'beagle-hms.jpg',
          description: 'The HMS Beagle was a Bark of the Royal Navy with an armament of 7.'
        },
        {
          id: 8,
          name: 'Bluenose I',
          type: 'historical',
          scale: '1:48',
          lengthOverall: 1153,
          heightOverall: 959,
          price: 10,
          img: 'bluenose.jpg',
          description: 'Bluenose was a Canadian schooner from Nova Scotia, a celebrated racing ship.'
        },
        {
          id: 9,
          name: 'Charles W. Morgan',
          type: 'historical',
          scale: '1:48',
          lengthOverall: 1000,
          heightOverall: 780,
          price: 10,
          img: 'charles-w-morgan.jpg',
          description: 'Charles W. Morgan was a U.S. whaleship during the 19th and early 20th century.'
        },
        {
          id: 10,
          name: 'Constellation USS',
          type: 'historical',
          scale: '1:78',
          lengthOverall: 1128,
          heightOverall: 772,
          price: 10,
          img: 'constellation-uss.jpg',
          description: 'American Sloop'
        },
        {
          id: 11,
          name: 'Constitution USS',
          type: 'historical',
          scale: '1:78',
          lengthOverall: 1160,
          heightOverall: 800,
          price: 10,
          img: 'constitution-uss.jpg',
          description: 'Built in Boston to defend the young American nation.'
        },
        {
          id: 12,
          name: 'Cutty Sark',
          type: 'historical',
          scale: '1:78',
          lengthOverall: 1160,
          heightOverall: 780,
          price: 10,
          img: 'cutty-sark.jpg',
          description: 'The Cutty Sark was one of the last clippers built for the China tea trade by Scott.'
        },
        {
          id: 13,
          name: 'ASD Tug',
          type: 'modern',
          scale: '1:75',
          lengthOverall: 329,
          heightOverall: 280,
          price: 10,
          img: 'asd-tug.jpg',
          description: 'This is a 1:40 scale model of an ASD Tug built by Damen Shipyards for Meyers Group – Panama.'
        },
        {
          id: 14,
          name: 'Carabinieri',
          type: 'modern',
          scale: '1:25',
          lengthOverall: 480,
          heightOverall: 300,
          price: 10,
          img: 'carabinieri.jpg',
          description: 'These are 1:36 and 1:72 scale models of a Police Patrol boat built for a Shipyard in Italy as Promotional Gifts.'
        },
        {
          id: 15,
          name: 'Container Ship Heulin Dispatch',
          type: 'modern',
          scale: '1:78',
          lengthOverall: 1000,
          heightOverall: 400,
          price: 10,
          img: 'container-ship-heulin-dispatch.jpg',
          description: 'This is a 1:78 scale model of General Cargo Ship built for the owners in Guernsey.'
        },
        {
          id: 16,
          name: 'Diamond Dredger',
          type: 'modern',
          scale: '1:100',
          lengthOverall: 1420,
          heightOverall: 500,
          price: 10,
          img: 'diamond-dredger.jpg',
          description: 'This is a 1:100 scale model of the Diamond Dredging Ship MV Atlantic that was custom built for DeBeers Marine Namibia.'
        },
        {
          id: 17,
          name: 'Fast Crew Supply Vessel',
          type: 'modern',
          scale: '1:50',
          lengthOverall: 526,
          heightOverall: 300,
          price: 10,
          img: 'fast-crew-supply-vessel.jpg',
          description: 'These are 1:50 scale Custom Built model ships of Fast Crew Supply Vessels built for various customers around the World.'
        },
        {
          id: 18,
          name: 'Fugro Survey Vessel',
          type: 'modern',
          scale: '1:100',
          lengthOverall: 530,
          heightOverall: 350,
          price: 10,
          img: 'frugo-survey-vessel.jpg',
          description: 'This is a 1:100 scale model of a Survey Vessel built for Fugro Survey.'
        },
        {
          id: 19,
          name: 'Haspa Yacht',
          type: 'modern',
          scale: '1:20',
          lengthOverall: 860,
          heightOverall: 1387,
          price: 10,
          img: 'haspa-yacht.jpg',
          description: 'This is a 1:20 scale model of sail training yacht built for a Bank in Germany.'
        },
        {
          id: 20,
          name: 'John T Essberger',
          type: 'modern',
          scale: '1:48',
          lengthOverall: 800,
          heightOverall: 420,
          price: 10,
          img: 'john-t-essberger.jpg',
          description: 'This is a 1:48 scale model of the John T Essberger built for a private collector in South Africa.'
        },
        {
          id: 21,
          name: 'Sail Training Vessel',
          type: 'custom',
          scale: '1:100',
          lengthOverall: 900,
          heightOverall: 650,
          price: 10,
          img: 'sail-training-vessel.jpg',
          description: 'This is a 1:100 scale Custom Built Model Ship of a Sail Training Vessel that was built by DAMEN Shipyards for the Sultan of Oman.'
        },
        {
          id: 22,
          name: 'Super Yacht',
          type: 'custom',
          scale: '1:75',
          lengthOverall: 1000,
          heightOverall: 500,
          price: 10,
          img: 'super-yacht.jpg',
          description: 'This is a scale model of a Concept Super Yacht designed by Rainsford Mann Design.'
        },
        {
          id: 23,
          name: 'Temeraire HMS',
          type: 'custom',
          scale: '1:78',
          lengthOverall: 1250,
          heightOverall: 890,
          price: 10,
          img: 'temeraire-hms.jpg',
          description: 'This is a 1:12 scale model of the Fighting Ship HMS Temeraire for a Filming Company in New Zealand.'
        },
        {
          id: 24,
          name: 'Sakawe Explorer',
          type: 'custom',
          scale: '1:125',
          lengthOverall: 650,
          heightOverall: 490,
          price: 10,
          img: 'sakawe-explorer.jpg',
          description: 'This is a 1:125 scale model of the Exploration Vessel – Sakawe Explorer built for a Diamond Dredging Company in Namibia.'
        }
      ]
      localStorage.setItem('ships', JSON.stringify(shipsData));

      console.log(`Setting item called 'ships' at localStorage contains ships storage.`);
    } else {
      var shipsData = JSON.parse(localStorage.getItem("ships"));
    }

    this.ships = shipsData;
  };

  get(id) {
    function findOneById(ship) {
      return ship.id === id;
    }

    if (arguments.length === 1 && typeof id === 'number') {
      return this.ships.find(findOneById);
    } else if (arguments.length === 0) {
      return this.ships;
    } else {
      return;
    }

  }

  set(id, data) {
    if (arguments.length === 1  && typeof arguments[0] === 'object') {
       this.ships.push(arguments[0]);
    }
    if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'object') {
      function findOneById(ship) {
        return ship.id === id;
      }

      let selected = this.ships.indexOf(this.ships.find(findOneById));
      this.ships[selected] = data;
    }
  }

  remove(id) {
    function findOneById(ship) {
      return ship.id === id;
    }

    if (arguments.length === 1 && typeof id === 'number') {
      let selected = this.ships.indexOf(this.ships.find(findOneById));
      this.ships.splice(selected, 1);
    }
  }
}
