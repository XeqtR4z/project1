"use strict";

let numberOfFilms;
console.log(numberOfFilms);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start(){
    numberOfFilms  = +prompt('Сколько фильмов вы уже просмотрели?','');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms  = +prompt('Сколько фильмов вы уже просмотрели?','');
    }
}
start();

function rememberMyFilms(){
    for(let i = 0; i < personalMovieDB.count;i++){
        let lastFiml,ratingFiml;
        do{
                  lastFiml = prompt('Один из последний просмотренных фильмов?','');
                  ratingFiml = prompt('На сколько оцените его?','');  
        }while(lastFiml.length == 0 || lastFiml.length > 50) ;
        personalMovieDB.movies[lastFiml] = ratingFiml;      
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if(numberOfFilms < 10){
        console.log("Просмотрено очень малдо фильмов");
     } else if (numberOfFilms >= 10 && numberOfFilms <=30) {
        console.log("Вы классический зритель"); 
     } else if(numberOfFilms > 30){ 
        console.log("Вы киноман."); 
     } else {
        console.log("Произошла ошибка.");
     }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYoutGenres(personalMovieDB){
    for(let i = 1; i <=3; i++){
        const genr = prompt(`Ваш любиый жанр под номером ${i}`,'');
        personalMovieDB.genres[i-1] = genr;
    }
}
writeYoutGenres(personalMovieDB);