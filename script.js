"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Не сам объект - а ссылку на объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);


// Поверхностная копия объекта 
function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// 2й способ клонирования

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 21;

// console.log(clone);
// console.log(add);

// 3й способ клонирования
// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[1] = 'asddsaasd'
// console.log(newArr);
// console.log(oldArr);

// 4й способ клонирования

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];
const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};

newQ.one = 20;

console.log(newQ);
console.log(q);