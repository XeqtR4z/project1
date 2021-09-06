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
// let a = 4,
//     b = 4;
// function showFirstMessage(text){
//     console.log(text);
// }
// showFirstMessage("Hello world");

// const logger = function(){
//     console.log("Hello!");
// };
// logger();

// const calc = (a, b) => a + b;
// console.log(calc(a,b));

//Методы и свойства строк и чисел
//const str = "test";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "some fruit";
console.log(fruit.indexOf("fruit"));
const logg = "Hello world";
console.log(logg.slice(6,10));
console.log(logg.substr(6,5));
const test = "12.2px";
console.log(parseInt(test));

// Call-back функции
function first(){
    //Do something
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}
first();
second();

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}
function done(){
    console.log('Я прошел этот урок.');
}
learnJS('JavaScript',done);

//Объекты
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },makeTest: function(){
        console.log("Test");
    }
}; 
options.makeTest();

const {border,bg} = options.colors;
// delete options.name;
// console.log(options.name);
let counter = 0;
for(let key in options){
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
            counter++;
        }
    }else{
        console.log(`Свойство ${key}, имеет значение ${options[key]}`);
        counter++;      
    }
}
console.log(counter);
console.log(Object.keys(options).length);

//Массивы
const arr = [1,2,3,5,8];
arr.sort(compareNum);
function compareNum(a,b){
    return a - b;
}
let sum = 0;
arr.forEach(function(item,i,arr){
    sum+=item;
});
console.log(sum);
arr.pop();//удаляет посл элемент
arr.push(10);
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
for(let value of arr){
    console.log(value);
}

const STR = prompt("","");
const products = STR.split(", ");
console.log(products);


//Передача по ссылке или по значению
let a =5,
    b= a;
b = b + 5;
const obj = {
    a:5,
    b:1
};
// const copy = obj;//ссылка на объект
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};
    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
       return objCopy;
}
const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};
const newNumbers = copy(numbers);
newNumbers.a=10;
console.log(newNumbers);
console.log(numbers);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();
newArray[1]='test';
console.log(newArray);
console.log(oldArray);
//spread оператор!
const video = ['youtobe','vimeo','rutube'],
      blogs = ['wordpress', 'livejournal','blogger'],
      internet = [...video,...blogs, 'vk', 'facebook'];
console.log(internet);   

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2,5,7];
log(...num);

const array = ["a","b"];
const NewArray = [...array];
const q = {
    one:1,
    two:2
};
const newObj = {...q};

//Основы ООП
let str = "some";
let strobj = new String();
console.log(typeof(str));
console.log(typeof(strobj));
console.dir([1,2,3]);
const soldier = {
    heath:400,
    armor:100,
    SayHello: function(){
        console.log("Hello");
        }
};
// const jonh = {
//     heath:100
// };
const jonh = Object.create(soldier);
//jonh.__proto__ = soldier;
Object.setPrototypeOf(jonh,soldier);
console.log(jonh.armor);
jonh.SayHello();

Object.setPrototypeOf(jonh,soldier);