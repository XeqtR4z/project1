"use strict";

window.addEventListener('DOMContentLoaded', ()=>{

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabcontent(){//скрываем табы и удаляем класс из таба
        tabsContent.forEach(item =>{
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    } 

    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabcontent();
    showTabContent();
    tabsParent.addEventListener('click',(event) =>{//вешеаем обработчик на родителя табсов
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i)=>{
                if(target == item){
                    hideTabcontent();
                    showTabContent(i);                   
                }
            });
        }
    });
});