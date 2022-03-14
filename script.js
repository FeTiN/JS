"use strict";

const arr = [1, 12, 43, 26, 8];

arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);

// arr.pop(); // удаление последний эл. с конца массива
// arr.push(10); // добавление элемента в конец массива
// arr.shift(); // удаляет из массива первый элемент и возвращает его
// arr.unshift('a'); // добавляет элемент в начало массива
// arr.split(s); // превращает строку в массив, s - разделитель
// arr.join(s); // превращает массив в сроку, s - разделитель
// delete arr[1]; // Удаляет второй элемент
// arr.splice(index, count, elem1...); // удалить count элементов, начиная с index и заменить на элементы elem1
// arr.slice(begin, end); // копирует часть массива с begin до end не включая
// arr.sort(fn); // сортировка массива. Если не передать функцию сравнения - сортирует элементы как строки
// arr.reverse(); // меняют порядок элементов на обратный
// arr.concat(item1...); // создает новый массив, в который копируются элемениы из arr, а также item1...


// Методы перебора

// arr.forEach
// arr.map
// arr.every/some
// arr.filter
// arr.reduce


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let j of arr) {
//     console.log(j);
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));