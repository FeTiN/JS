"use strict";

// Function Declaration
    /*
        Создается ДО начала выполнения скрипта. 
        Можно вызвать перед объявлением
    */

    // function foo() {
    //     // somthing code
    // }

// Function expression
    /*
        Создается только тогда, когда доходит поток кода.
        Можно вызвать только после обхявления
    */

    // let foo = function () {
    //     // somthing code
    // }

// Стрелочна функция
    /*
        Не имеет своего контекста (this)
    */

    // () => {

    // }


let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}
showFirstMessage('Run Forest, Run!');
console.log(num);

function calc(a, b) {
    return (a * b);
}
console.log(calc(3, 4));
console.log(calc(3, 2));
console.log(calc(3, 3));

function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();

const calcLine = (a, b) => {
    console.log('1');
    return a + b;
};