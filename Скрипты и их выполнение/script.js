"use strict";
const btn = document.querySelector('.btn');
let   timerId,
    i = 0;

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame(){
        if(pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
} 
btn.addEventListener('click', myAnimation);   
// btn.addEventListener('click', () =>{
//     //const timerId = setTimeout(logger, 2000);
//      timerId = setInterval(logger, 500);
// });


// function logger(){//можно сделать логи так
//     if(i == 3){
//         clearInterval(timerId);//выелючить таймаут
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);

// },500);



const now = new Date();
console.log(now.getUTCFullYear());
console.log(now.getTimezoneOffset());//количество минут разница от главного чп

let start = new Date();
for(let i =0; i < 10000; i++){
    let some = i ** 3;
}
let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);