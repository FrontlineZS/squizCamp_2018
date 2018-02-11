
export default class KitsStorage {
  constructor() {
    if (localStorage.getItem('kits') === null) {
      var kitsData = [
        {
          id: 1,
          name: 'Ben Retour',
          type: 'beginner',
          scale: '1:25',
          lengthOverall: 395,
          heightOverall: 371,
          price: ,
          img: 'ben-retour.jpg',
          description: 'A shell fishing boat, from the Brest region, built in 1952, at the Tertu de Fret shipyards, used for scallop fishing until 1980'
        },
        {
          id: 2,
          name: 'Bounty Jolly Boat',
          type: 'beginner',
          scale: '1:25',
          lengthOverall: 412,
          heightOverall: 363,
          price: ,
          img: 'bounty-jolly-boat.jpg',
          description: 'In April 1789, the H.M.S. Bounty left Tahiti and whilst passing through the Endeavour Channe, a number of the crew staged mutiny.'
        },
        {
          id: 3,
          name: 'Bremen Krabben Kutter',
          type: 'intermediate',
          scale: '1:50',
          lengthOverall: 400,
          heightOverall: 330,
          price: ,
          img: 'bremen-krabben-kutter.jpg',
          description: 'Shrimp fishing cutters first appeared in 1898, and were virtually restricted to the North Sea.'
        },
        {
          id: 4,
          name: 'Carabella Santa Maria 1492',
          type: 'intermediate',
          scale: '1:65',
          lengthOverall: 560,
          heightOverall: 485,
          price: ,
          img: 'carabella-santa-maria-1492.jpg',
          description: 'The Santa Maria, together with its sister ships the Pinta and the Nina, is famous the world over for its part in columbus’s discovery of the New World on 12 October 1492.'
        },
        {
          id: 5,
          name: 'Cutty Sark Tea Clipper',
          type: 'advanced',
          scale: '1:84',
          lengthOverall: 1032,
          heightOverall: 624,
          price: ,
          img: 'cutty-sark-tea-clipper.jpg',
          description: 'The exceptional elegance and beauty of her line , allied to a marvelous wealth of detail and accessories have contributed to the unique legend of the Cutty Sark.'
        },
        {
          id: 6,
          name: 'Endeavour Longboat',
          type: 'intermediate',
          scale: '1:50',
          lengthOverall: 420,
          heightOverall: 270,
          price: ,
          img: 'endeavour-longboat.jpg',
          description: 'The HMS Endeavour was launched in 1765. She was prepared three years later for a voyage under the command of Captain James Cook.'
        },
        {
          id: 7,
          name: 'HMS Bounty 1783',
          type: 'advanced',
          scale: '1:48',
          lengthOverall: 930,
          heightOverall: 705,
          price: ,
          img: 'hms-bounty-1783.jpg',
          description: 'Its a relatively simple ship: a merchant ship, rigged as a frigate, and equipped for exploration journeys, a common practice amongst all navies during the 18th and 19th centuries.'
        },
        {
          id: 8,
          name: 'HMS Endeavour',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 9,
          name: 'Independence 1775',
          type: 'intermediate',
          scale: '1:48',
          lengthOverall: 754,
          heightOverall: 605,
          price: ,
          img: 'independence-1775.jpg',
          description: 'The Independence was built in the United States in 1775 and fought in the War of Independence against England.'
        },
        {
          id: 10,
          name: 'JS Elcano',
          type: 'advanced',
          scale: '1:110',
          lengthOverall: 1020,
          heightOverall: 540,
          price: ,
          img: 'js-elcano.jpg',
          description: 'This 4-masted schooner and training ship of the Spanish Navy was launched in Cadiz on the 5th March 1927.'
        },
        {
          id: 11,
          name: 'Iload Palma Nova',
          type: 'beginner',
          scale: '1:25',
          lengthOverall: 325,
          heightOverall: 315,
          price: ,
          img: 'lload-palma-nova.jpg',
          description: 'The llauds were the typical craft of the Balearic Islands from the 18th centuary until 1950.'
        },
        {
          id: 12,
          name: 'HMS Endeavour',
          type: 'advanced',
          scale: '1:60',
          lengthOverall: 800,
          heightOverall: 690,
          price: ,
          img: 'hms-endeavour.jpg',
          description: 'She was prepared thee years for a voyage under the command of Captain James Cook.'
        },
        {
          id: 13,
          name: 'Viking',
          type: 'beginner',
          scale: '1:75',
          lengthOverall: 293,
          heightOverall: 275,
          price: ,
          img: 'viking.jpg',
          description: 'This is a replica of one of the famous 10th century Viking longboats of Gokstad, which was both manned by oars and propelled by sail.'
        },
        {
          id: 14,
          name: 'Swift 1805',
          type: 'intermediate',
          scale: '1:50',
          lengthOverall: 540,
          heightOverall: 460,
          price: ,
          img: 'swift-1805.jpg',
          description: 'Their technical features led the great naval powers of the time to enlarge them by creating the famous Baltimore Clippers Class'
        },
        {
          id: 15,
          name: 'Titanic Lifeboat',
          type: 'beginner',
          scale: '1:35',
          lengthOverall: 285,
          heightOverall: 55,
          price: ,
          img: 'titanic-lifeboat.jpg',
          description: 'The Titanic was designed to carry 32 lifeboats but at the time of the accident only had 20 on-board, enough for only half of the passengers.'
        },
        {
          id: 16,
          name: 'San Juan Nepomuceno',
          type: 'advanced',
          scale: '1:50',
          lengthOverall: 960,
          heightOverall: 750,
          price: ,
          img: 'san-juan-nepomuceno.jpg',
          description: 'A 2,700 T vessel with 74 cannons launched in 1765, the San Juan Nepomuceno represents for the Spaniards a wonderful example of the heroic temper of their race and of the bravery of their sailors.'
        },
        {
          id: 17,
          name: 'Saint Malo',
          type: 'beginner',
          scale: '1:20',
          lengthOverall: 345,
          heightOverall: 220,
          price: ,
          img: 'saint-malo.jpg',
          description: 'The Saint Malo was first used in France after the war of 1870.'
        },
        {
          id: 18,
          name: 'San Francisco II',
          type: 'intermediate',
          scale: '1:90',
          lengthOverall: 520,
          heightOverall: 615,
          price: ,
          img: 'san-francisco-2.jpg',
          description: 'Galleons appeared in the mid 16th century. for close to 150 years the Galleon was the warship par excellence.'
        },
        {
          id: 19,
          name: 'USS Constillation',
          type: 'advanced',
          scale: '1:85',
          lengthOverall: 1035,
          heightOverall: 710,
          price: ,
          img: 'uss-constillation.jpg',
          description: 'The US Constellation started her active life in 1798 and was withdrawn from service in 1955.'
        },
        {
          id: 20,
          name: 'May Flower Galeon',
          type: 'intermediate',
          scale: '1:64',
          lengthOverall: 605,
          heightOverall: 500,
          price: ,
          img: 'may-flower-galeon.jpg',
          description: 'Their religion having been declared illegal, a group of English puritans set sail for America in the Mayflower, on 6th September 1620.'
        }
      ];
      localStorage.setItem('kits', JSON.stringify(kitsData));

      console.log(`Setting item called 'kits' at localStorage contains kits storage.`);
    } else {
      var kitsData = JSON.parse(localStorage.getItem("kits"));
    }

    this.kits = kitsData;
  };

  get(id) {
    function findOneById(kit) {
      return kit.id === id;
    }

    if (arguments.length === 1 && typeof id === 'number') {
      return this.kits.find(findOneById);
    } else if (arguments.length === 0) {
      return this.kits;
    } else {
      return;
    }

  }

  set(id, data) {
    if (arguments.length === 1  && typeof arguments[0] === 'object') {
       this.kits.push(arguments[0]);
    }
    if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'object') {
      function findOneById(kit) {
        return kit.id === id;
      }

      let selected = this.kits.indexOf(this.kits.find(findOneById));
      this.kits[selected] = data;
    }
  }

  remove(id) {
    function findOneById(kit) {
      return kit.id === id;
    }

    if (arguments.length === 1 && typeof id === 'number') {
      let selected = this.kits.indexOf(this.kits.find(findOneById));
      this.kits.splice(selected, 1);
    }
  }
}
