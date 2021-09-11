"use strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function(){ Так делать не стоит
//     alert('Click');
// };
// btn.addEventListener('click', ()=>{//добавляем обработчик события , нажатие
//     alert('Click');
// });
//let i = 0;
const deleteElement = (event) =>{
    //event.target.remove();
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if(i == 1){
    //     btn.removeEventListener('mouseenter',deleteElement);
    // }
};
// btn.addEventListener('mouseenter', (event)=>{//наводим на элемент
//     console.log(event.targer);//target получаем элемент на который навели
//     //event.target.remove();
// });
// btn.addEventListener('click',deleteElement);
// overlay.addEventListener('click',deleteElement);
btns.forEach(btn =>{
    btn.addEventListener('click',deleteElement, {once: true});
});
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();//отменяет все действия, который должны были произойти по клику на объект
    console.log(event.target);
});