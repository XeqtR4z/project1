"use strict";

const ans = prompt('Введите ваше имя');
const reg = /n/g;
// i
// g
// m
console.log(ans.search(reg));

const pass = prompt('Password');
console.log(pass.replace(/\./g, "*"));

console.log('12-34-56'.replace(/-/g), ':');

console.log(reg.test(ans));

// \d
// \w
// \s