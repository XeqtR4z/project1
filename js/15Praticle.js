"use strict";

let numberOfFilms  = +prompt('Сколько фильмов вы уже просмотрели?','');
console.log(numberOfFilms);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for(let i = 0; i < personalMovieDB.count;i++){
    let lastFiml,ratingFiml;
    do{
              lastFiml = prompt('Один из последний просмотренных фильмов?','');
              ratingFiml = prompt('На сколько оцените его?','');  
    }while(lastFiml.length == 0 || lastFiml.length > 50) ;
    personalMovieDB.movies[lastFiml] = ratingFiml;      
}

if(numberOfFilms < 10){
    console.log("Просмотрено очень малдо фильмов");
 } else if (numberOfFilms >= 10 && numberOfFilms <=30) {
    console.log("Вы классический зритель"); 
 } else if(numberOfFilms > 30){ 
    console.log("Вы киноман."); 
 } else {
    console.log("Произошла ошибка.");
 }
console.log(personalMovieDB);