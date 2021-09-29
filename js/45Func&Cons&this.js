"use strict";

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function(name){
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);
// console.log(ivan.exit());

// //this

// function showThis(a, b){
//     console.log(this);
//     function sum(this){
//         return a+ b;
//     }
//     console.log(sum());
// }
// showThis(4,5);
// //1) Обычная функция: this = window, если стоит use strict , то undefined
// const obj = {
//     a:20,
//     b:15,
//     sum: function() {
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();
// //2) Контекст у методов объекта - сам объект

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan,23');
// //3) this в конструкторах и классах - это новых экземпляр объекта

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'Jonh'
// };
// sayName.call(user, 'Smith');
// sayName.apply(user);
// function count(num){
//     return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));
// //4) Ручная привящка this: call, apply, bind

const btn = document.querySelector('.button');
btn.addEventListener('click', function(){
    //console.log(this);
    this.style.backgroundColor = 'red';
});

const obj = {
    num:4,
    sayNumber: function(){
        const say = () =>{
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

const double = (a) => a * 2;
console.log(double(4));
