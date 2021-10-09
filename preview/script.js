'use strict';

// localStorage.setItem('number', 5);
// localStorage.removeItem('number');
// localStorage.clear();
// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if(localStorage.getItem('isCheck')){
    checkbox.checked = true;
} 
if(localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'red';
}     
checkbox.addEventListener('change', () =>{
    localStorage.setItem('isCheck', true);
});
change.addEventListener('click', () => {
    if(localStorage.getItem('bg') === 'changed'){
        form.style.backgroundColor = '#fff';
        localStorage.removeItem('bg'); 
    }else{
       localStorage.setItem('bg', 'changed');
       form.style.backgroundColor = 'red'; 
    }
});
const presone = {
    name:"Alex",
    age: 25
};
const serializedPersone = JSON.stringify(presone);
localStorage.setItem('alex', serializedPersone);
console.log(JSON.parse(localStorage.getItem('alex')));