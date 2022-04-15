'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


// console.log(box);
// console.log(btns[0]);
// console.log((circles));
// console.log(oneHeart);
// hearts.forEach(item => {
//     console.log(item);
// });

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'blue';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Some text');

div.classList.add('black');

// wrapper.append(div); // add in end box
// wrapper.appendChild(div); - old ver

// wrapper.prepend(div); - add in start box

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); - old ver

// circles[0].remove();
// wrapper.removeChild(hearts[0]); - old ver

// hearts[0].replaceWith(circles[0]); - changed element
// wrapper.replaceChild(circles[0], hearts[0]); - old ver

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "<h1>Hello World</h1>";

div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");


