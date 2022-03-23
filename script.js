/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренних фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
    
            if(a != null && b != null && a !='' && b !='' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        let a = personalMovieDB.print;
    
        if (!a) {
            console.log(personalMovieDB);
        } else {
            console.log(personalMovieDB.print);
        }
    },
    writeYourGenres: function() {
        let i = 1;

        while ( i <= 3 ) {
            let a = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (a === '' || a === null) {
                if ( i !== 1) {
                    console.log('Введите данные');
                }
            } else {
                personalMovieDB.genres[i-1] = a;
                i++;
            }
            
        }

        personalMovieDB.genres.forEach((item, i) => {
            let mess = `Любимый жанр ${i+1} - это ${item}`;

            console.log(mess);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB);
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();

// console.log(personalMovieDB);

console.log(personalMovieDB);