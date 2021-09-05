"use strict";

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt('Как ваше имя?','');
// answers[1] = prompt('Как ваша фамилия?','');
// answers[2] = prompt('Сколько вам лет?','');

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

//Функции
let a = 4,
    b = 4;
function showFirstMessage(text){
    console.log(text);
}
showFirstMessage("Hello world");

const logger = function(){
    console.log("Hello!");
};
logger();

const calc = (a, b) => a + b;
console.log(calc(a,b));

//Методы и свойства строк и чисел
const str = "test";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "some fruit";
console.log(fruit.indexOf("fruit"));
const logg = "Hello world";
console.log(logg.slice(6,10));
console.log(logg.substr(6,5));
const test = "12.2px";
console.log(parseInt(test));