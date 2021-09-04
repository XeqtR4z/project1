let numberOfFilms  = +prompt('Сколько фильмов вы уже просмотрели?','');
console.log(numberOfFilms);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFiml = prompt('Один из последний просмотренных фильмов?',''),
      ratingFiml = prompt('На сколько оцените его?',''),
      lastFiml1 = prompt('Один из последний просмотренных фильмов?',''),
      ratingFiml1 = prompt('На сколько оцените его?','');
personalMovieDB.movies[lastFiml] = ratingFiml;
personalMovieDB.movies[lastFiml1] = ratingFiml1;
console.log(personalMovieDB);

