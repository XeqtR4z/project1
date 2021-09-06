"use strict";
const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,    
        start: ()=>{
            personalMovieDB.count =  +prompt('Сколько фильмов вы уже просмотрели?','');
            while(personalMovieDB.count == 0 || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
                personalMovieDB.count =  +prompt('Сколько фильмов вы уже просмотрели?','');
            }
        },rememberMyFilms: function(){    
            for(let i = 0; i < personalMovieDB.count;i++){
                let lastFiml,ratingFiml;
                do{
                    lastFiml = prompt('Один из последний просмотренных фильмов?','');
                    ratingFiml = prompt('На сколько оцените его?','');  
                }while(lastFiml.length == 0 || lastFiml.length > 50) ;
                personalMovieDB.movies[lastFiml] = ratingFiml;}      
        },detectPersonalLevel:function (number){
            if(number< 10){
                console.log("Просмотрено очень мало фильмов");
             } else if (number >= 10 && number <=30) {
                console.log("Вы классический зритель"); 
             } else if(number > 30){ 
                console.log("Вы киноман."); 
             } else {
                console.log("Произошла ошибка.");
             }
        },
        writeYoutGenres:function (){
            for(let i = 1; i <=3; i++){
                let genr;
                do{
                     genr = prompt(`Ваш любиый жанр под номером ${i}`,'');
                }while(genr === '' && genr === null);
                personalMovieDB.genres[i-1] = genr;
            }
            personalMovieDB.genres.forEach((item, i) => { 
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        },toggleVisibleMYDB:function(){
            if(!personalMovieDB.privat){
                personalMovieDB.privat = true;
            }else{
                personalMovieDB.privat = false;
            }
        },
        showMyDB:()=>{
            if(!personalMovieDB.privat){
                console.log(personalMovieDB);
            }
        }
};
