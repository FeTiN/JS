"use strict";

if (1) {
    console.log('Ok!');
} else {
    console.log('Rrror!');
}

const num = 50;

if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Error');
} else {
    console.log('Ok');
}

// Тернарный оператор - учавствуют 3 аргумента

(num === 50 ) ? console.log('Ok!') : console.log('Error');

// Бинарный оператор 4 + 4
// Унарный оператор +'4'

const n = 50;

switch ( n ) {
    case 49:
        console.log('Missed');
        break;
    case 100:
        console.log('Missed :)');
        break;
    case 51:
        console.log('You are in trouble');
        break;
    default:
        console.log('Don\'t worry, it will work next time');
}