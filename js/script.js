"use sctrict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его?", "");
    
    personalMovieDB.movie[a] = b;
    personalMovieDB.movie[c] = d;

    console.log(personalMovieDB);

