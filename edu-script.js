'use strict';  // директива, обозначающая, что мы пишем на ES6

var leftBorderWidth = 15;
console.log(leftBorderWidth);

let second = 2;  // создаётся тогда, когда выполнение кода дошло до этого места (хостинг или всплытие переменных)
// код работает быстрее и экономит память браузера, в отличии от var
// кроме этого let видна только в блоке кода, ограниченного фигурными скобками, например 
{
  let second = 2;
}

const pi = 3.14;  // const создаёт константу, которую нельзя поменять. В остальном аналогично let

/*
 * ТИПЫ ДАННЫХ
 */

 var number = 5;
 var string = "Hello";
 var sym = Symbol();  // используется очень редко
 var boolean = true;
 null;  // когда чего-то в коде не существует
 undefined;  // существует, но значения не имеет
 var obj = {};

 console.log(5/0);  // Infinity
 console.log('string' * 9);  // NaN

 let something;
 console.log(something);  // undefined

 let persona = {
   name: 'Roma',
   age: 37,
   isMarried: true
 };  // внутрь объекта можно записать всё, что угодно (функцию, объект и т.д.)

 console.log(persona.name);  // 1-й способ доступа к элементам объекта
 console.log(persona['age']);  // 2-й способ доступа к элементам объекта

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);

// let answer = confirm('Are you here');  // Модальное с двумя вариантами (boolean)

// let answer = prompt('Are you 18?', 'Да');  // Всегда приходит string

// console.log(typeof(null)); // здесь тип определится как object (исключение)

// Унарный + превращает строку в число, например
// let answer = +prompt('Are you 18?', 'Да'); или
// console.log(4 + + ' - object');

/**
 * Операторы
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */

let incr = 10,
    decr = 10;

//incr++;
//decr--;

//console.log(incr);  // 11
//console.log(decr);  // 9

console.log(incr--);  // 10
console.log(decr++);  // 10

// префиксная форма возвращает уже измененное значение, в отличии от постфиксной,
// которая возвращает старое

console.log(5 % 2);  // вернуло 1 (остаток от деления)
console.log('2' == 2);  // true
console.log('2' === 2);  // false (строгое сравнение по типам данных)

console.log(4 * 3 ** 2);  // 4 * 9 = 36