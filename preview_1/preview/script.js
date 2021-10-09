'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');
const width = box.scrollWidth;
const height = box.scrollHeight;

btn.addEventListener('click', ()=>{
    //box.style.height = box.scrollHeight+'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style);