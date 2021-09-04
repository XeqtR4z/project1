"use strict";

//const result = confirm("Are you here?");
//console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

const answers = [];
answers[0] = prompt('Как ваше имя?','');
answers[1] = prompt('Как ваша фамилия?','');
answers[2] = prompt('Сколько вам лет?','');

console.log(typeof(answers));

const category = 'toys';
console.log(`https://someutl.com/${category}/5`);

const user = "Ivan";
alert(`Привет, ${user}`);

let incr = 10;
let decr = 10;
incr++;
++incr;
decr--;
--decr;