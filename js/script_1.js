"use strict";


const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = `background-color: blue; width: ${500}px`;
buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }
hearts.forEach(item=>{
    item.style.backgroundColor = 'green';
});
const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');
div.classList.add('black');
//wrapper.append(div);
//wrapper.prepend(div);
//wrapper.appendChild(div);
// hearts[0].after(div);
// circles[0].remove();

//document.body.append(div);
wrapper.insertBefore(div,hearts[1]);
wrapper.removeChild(hearts[1]);
//hearts[0].replaceWith(circles[0]);
wrapper.replaceChild(circles[0],hearts[0]);

//div.innerHTML = `<h1>Hello World</h1>`;
//div.textContent = "Hello";
div.insertAdjacentHTML("beforebegin",`<h2>Hello</h2>`);