/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', ()=>{
    const movieDB = {
        movies: [
            "Сквозь снег",
            "Форсаж",
            "Властелин Колец",
            "Звездные войны",
            "Неудержимые"
        ]
    };
    //1) Удалить все рекламные блоки со страницы (правая часть сайта)
    const promo = document.querySelectorAll('.promo__adv');//псевдомассив или promo__adv img
     promo.forEach(item => {
        item.remove();
     });
     //2) Изменить жанр фильма, поменять "комедия" на "драма"
     const poster = document.querySelector('.promo__bg');
     const Genre = poster.querySelector('.promo__genre');
     //console.log(promoGenre);
     Genre.textContent = 'драма';
    //3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    //Реализовать только при помощи JS
    //console.log(poster);
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    //4) Список фильмов на странице сформировать на основании данных из этого JS файла.
    //Отсортировать их по алфавиту
    // const ListFilms = document.querySelector('.promo__interactive-list');
    // const UpdateFilmList = ()=>{
    //     ListFilms.innerHTML ='';
    //     movieDB.movies.sort();
    //     movieDB.movies.forEach((item, i) => {
    //         ListFilms.innerHTML += `
    //         <li class="promo__interactive-item">${i + 1} ${item}
    //         <div class="delete" id="${i}"></div>
    //         </li>   
    //         `;
    //     });
    //     DeletsFilm.forEach(delets =>{
    //         delets.addEventListener('click',deleteFilm);
    //     });
    // };
    // UpdateFilmList();
    //  let i = 0;
    //  console.log(ListFilms);
    // ListFilms.forEach(item=>{
    //     item.textContent = movieDB.movies[i];
    //     i++;
    // });
    
    /* Задания на урок:
    
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки*/
    const ClassAdd = document.querySelector('.add');
    const btn = ClassAdd.querySelector('.button_accept');
    const newFilm = ClassAdd.querySelector('.adding__input');
    const AddNewFilm = (event) =>{
        event.preventDefault();
        let newFilmStr = newFilm.value;
        if(newFilmStr){
            if( newFilmStr.length > 21){
                // newFilmStr = newFilmStr.substr(0,21);
                // newFilmStr+='...';
                newFilmStr = `${newFilmStr.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilmStr);
            UpdateFilmList(movieDB.movies,ListFilms);
        }
    };
    btn.addEventListener('click',AddNewFilm);
    
    /*3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)*/
    const promoInteractiveList = document.querySelector('.promo__interactive-list');
    let DeletsFilm = promoInteractiveList.querySelectorAll('.delete');//псевдомассив
    const ListFilms = document.querySelector('.promo__interactive-list');
    const deleteFilm = (event)=>{
        let NumberFilm = event.currentTarget.id;
        movieDB.movies.splice(NumberFilm, 1);
        UpdateFilmList(movieDB.movies,ListFilms);
    };
    const UpdateFilmList = (films, parent)=>{
        parent.innerHTML ='';
        films.sort();
        films.forEach((item, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete" id="${i}"></div>
            </li>   
            `;
        });
        DeletsFilm = promoInteractiveList.querySelectorAll('.delete');
        DeletsFilm.forEach(delets =>{
            delets.addEventListener('click',deleteFilm);
        });
    };
    UpdateFilmList(movieDB.movies,ListFilms);
    /*4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"*/
    const CheckB = document.getElementById('CheckB');
    CheckB.addEventListener('click',(event)=>{
        if(CheckB.checked){
            console.log("Добавляем любимый фильм");
        }
    });
    //console.log(CheckB.checked);
    /*5) Фильмы должны быть отсортированы по алфавиту */
    
});
