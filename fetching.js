// var UIManager = {
//   init: function(selector) {
//     let button = document.querySelector(selector);
//
//     if (!button) {
//       return null;
//     }
//
//     this.click = this.click.bind(this);
//
//     button.addEventListener('click', this.click);
//   },
//
//   click: function(event) {
//     // let element = this.createElement('div', 'foo');
//     // let result = document.querySelector('#result');
//
//     // this.appendChild(result, element);
//
//     this.fetchData('http://jsonplaceholder.typicode.com/posts');
//   },
//
//   createElement: function(type, message) {
//     let element = document.createElement(type);
//     element.innerText = message;
//
//     return element;
//   },
//
//   appendChild: function(parent, element) {
//     parent.appendChild(element);
//   },
//
//   fetchData: function(url) {
//     fetch(url).then((response) => {
//       return response.json();
//     }).then((json) => {
//       this.processResponse(json);
//     });
//   },
//
//   processResponse: function(data) {
//     let filteredData = data.filter((item) => {
//       return item.userId === 2;
//     });
//
//     let container = document.querySelector('#result');
//     let list = this.createElement('ul', '');
//
//     this.appendChild(container, list);
//
//     filteredData.map((listItem) => {
//       let itemList = this.createElement('li', '');
//       this.appendChild(list, itemList);
//
//       let title = this.createElement('strong', listItem.title);
//       this.appendChild(itemList, title);
//
//       let summary = this.createElement('p', listItem.body);
//       this.appendChild(itemList, summary);
//
//       itemList.classList.add('li-class', 'another-li-class');
//     });
//
//   }
//
// }
//
// UIManager.init('#button');
//
//
// const timer = (milis) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`timeout ${milis}`);
//     }, milis);
//   });
// };

// timer(1000).then(
//     data => {
//       console.log(data);
//       return timer(2000);
//     })
//   .then(
//     data => {
//       console.log(data);
//     });
//
// let t1 = timer(1000);
// let t2 = timer(2000);
// let t3 = timer(3000);
//
// Promise.all([t1, t2, t3]).then(response => {
//   console.log(response);
// });

// async function timers() {
//   let t4 = await timer(1000);
//   let t5 = await timer(2000);
//   console.log(t4, t5);
// };
//
// timers();



let btn = document.querySelector('#button');
btn.addEventListener('click', (event) => {
  document.body.classList.toggle('menu--is-open');
});
