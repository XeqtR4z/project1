/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
console.log(poster);
poster.style.backgroundImage = 'url("img/bg.jpg")';
//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту
const ListFilms = document.querySelector('.promo__interactive-list');
ListFilms.innerHTML ='';
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    ListFilms.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${item}
    <div class="delete"></div>
    </li>   
    `;
});
//  let i = 0;
//  console.log(ListFilms);
// ListFilms.forEach(item=>{
//     item.textContent = movieDB.movies[i];
//     i++;
// });
