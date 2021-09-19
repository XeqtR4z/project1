"use strict";

window.addEventListener('DOMContentLoaded', ()=>{
    //Tabs
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

    //Timer
    const deadline = '2021-9-16';
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000* 60 * 60 * 24));//округление до ближ целого
        const hours = Math.floor( (t/(1000*60*60) % 24) ),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total' : t,
            'days'  : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if(num >=0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock,1000);
        updateClock();      
        function updateClock(){
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }      
    }

    setClock('.timer',deadline);

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

        
    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
            // Либо вариант с toggle - но тогда назначить класс в верстке
        //modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(ModlTimerId);
    }
    

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        //modal.classList.toggle('show');
        document.body.style.overflow = '';
    }
 //закрываем модальное окно если кликнули вне модального окна   
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });
    //Открытие модальнгого окна через какое то время
    const ModlTimerId = setTimeout(openModal, 5000);
    //Показывыаем модальное окно, когда пролистали в конец страницы
    function showModalByScrol(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
                openModal();
                window.removeEventListener('scroll',showModalByScrol);
        }
    }
    window.addEventListener('scroll', showModalByScrol);
});