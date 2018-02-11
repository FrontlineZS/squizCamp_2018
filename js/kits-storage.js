
export default class KitsStorage {
  constructor() {
    if (localStorage.getItem('kits') === null) {
      var kitsData = [
        {
          id: 1,
          name: 'Ben Retour',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 2,
          name: 'Bounty Jolly Boat',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 3,
          name: 'Bremen Krabben Kutter',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 4,
          name: 'Carabella Santa Maria 1492',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 5,
          name: 'Cutty Sark Tea Clipper',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 6,
          name: 'Endeavour Longboat',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 7,
          name: 'HMS Bounty 1783',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
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
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 10,
          name: 'JS Elcano',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 11,
          name: 'Iload Palma Nova',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 12,
          name: '',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 13,
          name: '',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 14,
          name: '',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 15,
          name: '',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 16,
          name: '',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 17,
          name: '',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 18,
          name: '',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 19,
          name: '',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
        },
        {
          id: 20,
          name: '',
          type: '',
          scale: '',
          lengthOverall: ,
          heightOverall: ,
          price: ,
          img: '',
          description: ''
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
