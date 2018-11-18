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

/**
 * Операторы
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * https://learn.javascript.ru/comparison
 * https://learn.javascript.ru/types-conversion
 */

// let answer = confirm('Are you here');  // Модальное с двумя вариантами (boolean)

// let answer = prompt('Are you 18?', 'Да');  // Всегда приходит string

// console.log(typeof(null)); // здесь тип определится как object (исключение)

// Унарный + превращает строку в число, например
// let answer = +prompt('Are you 18?', 'Да'); или

// console.log('arr' + ' - object');  // Объединение двух строк
// console.log(4 + ' - object');  // Если объединить строку и число, то обязательно будет строка
// console.log(4 + + ' - object');  // Все не математические операции приводят к NaN

// "" + 1 + 0 = "10"  // Оператор "+" в данном случае прибавляет 1 как строку, и затем 0.
// "" - 1 + 0 = -1  // Оператор "-" работает только с числами, так что он сразу приводит "" к 0.
// null + 1 = 1  // null при численном преобразовании становится 0
// undefined + 1 = NaN  // undefined при численном преобразовании становится NaN
// null == "\n0\n" = false  // При сравнении == с null преобразования не происходит, 
//         есть жёсткое правило: null == undefined и только.
// +null == +"\n0\n" = true  // И левая и правая часть == преобразуются к числу 0.

// Пустой массив [] превращается в пустую строку
// В логическом контексте в JS только 5 сущностей представляют
// собой неправду (false) - это 0, пустая строка "" , null , undefined , NaN

// 
// В JavaScript есть три преобразования:
// 
// Строковое: String(value) – в строковом контексте или при сложении со строкой. Работает очевидным образом.
// Численное: Number(value) – в численном контексте, включая унарный плюс +value. 
//            Происходит при сравнении разных типов, кроме строгого равенства.
// Логическое: Boolean(value) – в логическом контексте, можно также сделать двойным НЕ: !!value.

let incr = 10,
    decr = 10;

//console.log(incr--);  // 10
//console.log(decr++);  // 10

console.log(--incr);  // 9
console.log(++decr);  // 11

// префиксная форма возвращает уже измененное значение, в отличии от постфиксной,
// которая возвращает старое

console.log(5 % 2);  // вернуло 1 (остаток от деления 4 на 2)
console.log('2' == 2);  // true
console.log('2' === 2);  // false (строгое сравнение по типам данных)

console.log(4 * 3 ** 2);  // 4 * 9 = 36

/**
 * УСЛОВИЯ
 */

let num = 50;

if (num < 49) {
  console.log('Неверно');
} else if (num > 100) {
  console.log('Много');
} else {
  console.log('Верно');
}

var result = true ? 1 : 0;  // формула тернарного оператора
(num == 50) ? console.log('Верно') : console.log('Неверно');  // тернарный оператор


switch (num) {
  case num < 49:
    console.log('Неверно');
    break;
  case num > 100:
    console.log('Много');
    break;
  case num > 80:
    console.log('Всё ещё много');
    break;
  case 50:
    console.log('Верно');
    break;
  default:
    console.log('Что-то пошло не так');
    break;
}

/**
 * ЦИКЛЫ
 */

let num = 48;

// цикл while (пока). Пока число меньше 55, выводи в консоль сообщение
// и в конце прибавляй единицу
while (num < 55) {
  console.log(num);
  num++;
}

// либо так
do {
  console.log(num);
  num++;
}
while (num < 55);

// цикл for
for (let i = 1; i <= 8; i++) {
  //if (i == 6) {  // прерывает цикл на 6 и выходит из программы
  //  break;
  //}

  if (i == 6) {  // пропускает 6 в цикле и продолжает итерацию
    continue;
  }

  console.log(i);
}

