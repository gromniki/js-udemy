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
 * https://learn.javascript.ru/logical-ops
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

// Пример использования массива (из интернета):
// var user = { "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] };
// var friends = [{ "thelocation" : "москва", "":""},{ "thelocation" : "london", "":""}];
//     friends[0].thelocation  // москва
//     friends[1]['thelocation']  // london

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

// alert( true && true ); // true
// alert( false && true ); // false
// alert( true && false ); // false
// alert( false && false ); // false

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

let result = true ? 1 : 0;  // формула тернарного оператора
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


/**
 * ФУНКЦИИ
 */

// Такая функция называется Function Expression или функциональное выражение
let firstCalc = function(a, b) {
  return a + b;
}

console.log(firstCalc(3,4));

// Такая функция называется Function Declaration.
// Может использоваться и до и после объявления функции
function secondCalc(a, b) {
  return a + b;
}

// Основное отличие между ними: функции, объявленные как Function Declaration,
// создаются интерпретатором до выполнения кода.

let numeric = 20;

function showNum(text) {
  console.log(text);
  let numeric = 10;
  console.log(numeric);  // 10
}

showNum('Hello');
console.log(numeric);  // 20

// https://goo.gl/xA9CE1 – про замыкания
// Замыкание функций. Когда внутри неё есть обращение к какой-либо переменной,
// функция ищет переменную сначала внутри себя, а потом уже во внешних переменных 
// причём идёт так до самого высшего уровня шаг за шагом, поэтому
// Замыкание – это функция со всеми внешними переменными, которые ей доступны.

// Рассмотрим стрелочную функцию из ES6
let calcArrow = (a,b) => a + b;  // {} можно опустить, если мало операций

console.log(calcArrow(2,7));  // 9

// Теперь поговорим о методах и свойствах
// https://learn.javascript.ru/string – методы строк
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number – методы чисел
let str = 'Test';
console.log(str.length);  // 4

console.log(str.toUpperCase());  // TEST
console.log(str.toLowerCase());  // test

let twelve = '12.2px';

console.log(parseInt(twelve));  // переводит в другую систему счисления
console.log(parseFloat(twelve));  // переводит в десятичную систему счисления

// console.log();

/**
 * Callback функции
 */

// callback – это функция, которая должна быть выполнена после того, 
// как другая функция завершила своё выполнение

function first() {
  //что-то делаем
  setTimeout( function() {
    console.log(1);
  }, 500 );
}

function second() {
  console.log(2);
}

first();
second();


function learnPL(lang, callback) {
  console.log('Я учу ' + lang);
  callback();
}

function done() {
  console.log('Я прошёл 4 урока!');
}

learnPL('JavaScript', done);

// learnPL('JavaScript', function() {
//   console.log('text');
// });  // можно и так вызывать функции

/**
 * ОБЪЕКТЫ
 */

// Объект можно создать еще и так
let obj = new Object();  
// но этот метод не удобный и имеет свои технические минусы

// нормальное создание объекта выглядит так
let options = {
  width: 1024,
  height: 1024,
  name: 'test'
};

console.log(options.name);
options.bool = false  // создание нового свойства налету
options.color = {  // или свойства-объекта
  border: 'black',
  bg: 'red'
};

delete options.bool;  // удаление свойства из объекта

console.log(options);

for (let key in options) {  // вывод всех значений
  console.log('Свойство ' + key + ' имеет значение ' + options[key]);
};

console.log(Object.keys(options).length);

/**
 * МАССИВЫ И ПСЕВДОМАССИВЫ
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://learn.javascript.ru/array
 */

let arr = [1, 2, 3, 4, 5];  // создание простого массива

arr[99] = 99;  // в массив добавится 99 индекс со значением 99
// в консоли будет: 1, 2, 3, 4, 5, <94 empty items>, 99 
// так нельзя делать, это грубая ошибка
// length действует как последний номер индекса + 1

arr.pop();  // удаление последнего элемента из массива
arr.push(6);  // добавление нового элемента с именем 6 в конец массива arr
arr.shift();  // удаление первого элемента из массива
arr.unshift('1');  // добавление нового элемента с именем 1 в начало массива arr
// Методы push/pop выполняются быстро, а shift/unshift – медленно.

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = ['first', 2, 3, 'four', 5];

arr2.forEach(function(item, i, mass) {  // способ перебора массива с callback функцией
  console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});

arr3 = [2, 4, 5, 6, 9];

for (let key in arr3) {  // с помощью in выведутся только ключи(индексы) массива
  console.log(key);      // с помощью of выведутся только значения массива
}

let ans = prompt("", ""),
    arr4 = [];

arr4 = ans.split(',');  // split превращает строку в массив, в скобках разделитель
console.log(arr4);

let arr5 = ['first', 'second', 'queen', 'picture'];
    i = arr5.join(', ');  // join превращает массив в строку, в скобках разделитель

console.log(i);

let arr5 = ['first', 'second', 'queen', 'picture'];
    i = arr5.sort();  // sort сортировка массива. Если не передать функцию
                      // сравнения, сортирует элементы как строки
console.log(i);

let arr6 = [1, 5, 13, 7];
    i = arr6.sort(compareNum);

function compareNum(a, b) {
  return a-b;
}

console.log(i);

// Псевдомассив – это объект, структура которого совпадает с обычным массивом
// он хранит элементы в индексах, но при этом они не обладают методами,
// свойствами как полноценные массивы из-за отличий в своём прототипе

/**
 * ООП
 * https://learn.javascript.ru/constructor-new
 * https://learn.javascript.ru/classes
 */

let soldier = {
  health: 400,
  armor: 100
};

let john = {
  health: 100
};

john.__proto__ = soldier;  // john наследует от объекта soldier другие свойства

console.log(john);
console.log('Броня Джона: ' + john.armor);


// test
function Animal() {
  this.speed = 0;
  this.name = name;

  function speed(speed) {
    this.speed += speed;
  }

  function stop(stop) {
    this.speed = 0;
  }
}


/**
 * Доступ к элементам DOM
 * 
 * https://learn.javascript.ru/searching-elements-dom
 * https://developer.mozilla.org/ru/docs/Web/API/Document/querySelectorAll
 * https://developer.mozilla.org/ru/docs/Web/API/Element/querySelectorAll
 * https://learn.javascript.ru/attributes-and-custom-properties – Атрибуты и DOM-свойства
 * 
 */

let box = document.getElementById('box'),  // получаем доступ к элементу по ID
    btn = document.getElementsByTagName('button'),  // получаем доступ к элементу по тегу
    circle = document.getElementsByClassName('circle'),  // получаем элемент по именни классу (без точки)
    heart = document.querySelectorAll('.heart'),  // доступ ко всем селекторам, в данном случае ко всем элементам с именем heart
//  heart = document.querySelectorAll('.wrapper .heart');  // можно и так
    oneHeart = document.querySelector('.heart'),  // получаем первое сердечко
    wrapper = document.querySelector('.wrapper');

// получить все элементы документа
document.getElementsByTagName('*');

// получить всех потомков элемента elem:
elem.getElementsByTagName('*');

// document.getElementsByName
// Вызов document.getElementsByName(name) позволяет получить все элементы с данным атрибутом name.
// Практически не используется

// document.body.innerHTML = ''; // удалить всё содержимое BODY

console.log(box);
console.log(btn);  // выведется псевдомассив
console.log(btn[0]);
console.log(circle[2]);
console.log(heart);  // выведется псевдомассив данных
console.log(oneHeart);  // выведется первое сердечко из всего списка, потому что оно первое на странице с таким селектором

// Изменяем элементы

box.style.backgroundColor = 'blue';  // поменяли цвет фона квадратного бокса
btn[1].style.borderRadius = '50%';  // вторая кнопка стала круглой

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';  // сделали светофор

for (let i = 0; i < heart.length; i++) {
  heart[i].style.backgroundColor = 'pink';  // можно таким способом перебрать псевдомассив
}

heart.forEach(function(item, i, heartsArr) {  // лучший вариант перебора псевдомассива
  item.style.backgroundColor = 'blue';
});

let div  = document.createElement('div'),
    text = document.createTextNode('Создал кусочек текста');

div.classList.add('black');  // <div class="black"></div>
document.body.appendChild(div);  // добавит <div class="black"></div> в родитель body в самый конец
wrapper.appendChild(div);  // добавит <div class="black"></div> в родитель wrapper в самый конец
document.body.insertBefore(div, circle[0]);  // вставит блок div перед первым кругом,
// если нет второго параметра, то после открывающего тэга body
document.body.removeChild(circle[1]);  // удалит второй круг со страницы
// но надо ПОМНИТЬ, что всё это действует по отношению к родительскому элементу
wrapper.removeChild(heart[2]);  // удалит последнее сердце (родитель wrapper)
document.body.replaceChild(btn[1], circle[1]);  // подменили второй круг второй кнопкой

div.innerHTML = '<h1>Hello World</h1>';  // внутрь блока div добавили тег h1 с текстом, но такой метод не безопасен
div.textContent = 'Hello World';  // такой вариант более безопасен, так как здесь можно вставить только текст

// .className не рекомендуется использовать – устарел и не удобен в использовании
// нужно использовать метод .classList

console.log(div);


/**
 * СОБЫТИЯ И ИХ ОБРАБОТЧИКИ
 * 
 * https://learn.javascript.ru/introduction-browser-events
 * https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
 * https://www.w3schools.com/tags/att_disabled.asp
 * 
 */

let btns = document.getElementsByTagName('button');

btns[0].onclick = function() {
  console.log('Нажата первая кнопка');
}

btns[0].onclick = function() {
  console.log('Нажата снова первая кнопка');
}
// В этом случае отработает только вторая функция. 
// Первая сотрётся из памяти. Это не очень хорошо
// Чтобы этого избежать, надо правильно назначать обработчики событий
// Ниже показано как

btns[0].addEventListener('click', function() {
  console.log('Нажата первая кнопка');
  console.log('Нажата снова первая кнопка');
});
// В этом случае отработают все алерты. Даже если мы пропишем два одинаковых блока,
// как в первом случае, то всё-равно все отработают.

btns[0].addEventListener('mouseenter', function() {
  console.log('Мышка наведена на первую кнопку');
});
// Событие наведения на объект

btns[0].addEventListener('click', function(event) {
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});
// Событие event как параметр функции

btns[0].addEventListener('click', function(event) {
  console.log(event);

  let target = event.target;
  target.style.display = 'none';
});
// Цель: кнопка номер 1
// Действие: скрытие кнопки с помощью свойства CSS display

// Всплытие событий – это когда обработчик события срабатывает сначала на самом вложенном элементе
// затем на родителе, если таковой имеется, а затем выше и выше.
// Важно уметь отменять стандартные события в браузере

// let btn3 = document.getElementsByTagName('button');
let btn3 = document.querySelectorAll('button');
let wrap = document.querySelector('.wrapper');
let link = document.querySelector('a');

btns[0].addEventListener('click', function(event) {
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

wrap.addEventListener('click', function() {
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});
// 

link.addEventListener('click', function(event) {
  event.preventDefault();  // отменяет стандартное поведение объекта в браузере
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
  // return false;  // устаревший костыльный метод
});

btn3.forEach(function(item) {
  item.addEventListener('mouseleave', function() {
    console.log('Вышли!');
  });
});
// использовать такой метод - не ошибка, это допускается, но так лучше не делать, 
// так как нарушаются некоторые правила


// Функция должна быть присвоена как sayThanks, а не sayThanks().
// button.onclick = sayThanks;
// Если добавить скобки, то sayThanks() – будет уже результат выполнения функции
// (а так как в ней нет return, то в onclick попадёт undefined). Нам же нужна именно функция.

// …А вот в разметке как раз скобки нужны:
// <input type="button" id="button" onclick="sayThanks()" />

// Это различие просто объяснить. При создании обработчика браузером из атрибута,
// он автоматически создает функцию из его содержимого. Поэтому последний пример – фактически то же самое, что:
// button.onclick = function() {
//   sayThanks(); // содержимое атрибута
// };

// Используйте именно функции, а не строки.
// Назначение обработчика строкой elem.onclick = "alert(1)" можно иногда увидеть в древнем коде. 
// Это будет работать, но не рекомендуется, могут быть проблемы при сжатии JavaScript. Да и вообще,
// передавать код в виде строки по меньшей мере странно в языке, который поддерживает Function Expressions.
// Это возможно лишь по соображениям совместимости, не делайте так.

// Не используйте setAttribute.
// Такой вызов работать не будет:
// при нажатии на body будут ошибки
// потому что при назначении в атрибут функция будет преобразована в строку
// document.body.setAttribute('onclick', function() { alert(1) });

// ИТОГО
// Есть три способа назначения обработчиков событий:

// 1. Атрибут HTML: onclick="...".
// 2. Свойство: elem.onclick = function.
// 3. Специальные методы:
//    Современные: elem.addEventListener( событие, handler[, phase]), удаление через removeEventListener.
//    Для старых IE8-: elem.attachEvent( on+событие, handler ), удаление через detachEvent.


/**
 * Скрипты и время их выполнения setTimeout и setInterval
 * Делегирование
 * https://learn.javascript.ru/js-animation – анимации
 * https://learn.javascript.ru/event-delegation – делегирование событий 1
 * https://habr.com/post/70760/ – делегирование событий 2
 * https://davidwalsh.name/event-delegate – делегирование событий 3
 * https://html5.by/blog/what-is-requestanimationframe/ – requestAnimationFrame
 * 
 */

// setTimeout и setInterval

// let timerId = setTimeout(sayHello, 3000);  // параметры: имя функции и задержка в мс
// clearTimeout(timerId);  // используется для того, чтобы остановить таймаут

// let timerId = setInterval(sayHello, 3000);  // в отличии от setTimeout эта функция выполняется
                                               // до бесконечности через заданный промежуток времени, 
                                               // указанный в параметрах (рекурсия), но данная функция
                                               // не очень оптимальная, так как при больших объёмах будет
                                               // нагружать память. Вместо этого используют 
                                               // setTimeout рекурсивно

// function sayHello() {
//   alert('Hello World');
// }

let timerId = setTimeout(function log() {
  console.log('Hello');
  setTimeout(log, 2000);
});  // пример рекурсии setTimeout


// сделаем простую анимацию
let btn = document.querySelector('.btn');
let elem = document.querySelector('.box');

function myAnimation() {
  let pos = 0;  
  let id = setInterval(frame, 10);

  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);


// Делегирование
let btnBlock = document.querySelector('.btn-block');
let btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == 'BUTTON') {  // делегирование события 1 вариант
    console.log('Hello');                                  // здесь родитель делегирует потомкам событие клик
  }
});

btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('first')) {  // делегирование события 2 вариант
    console.log('Hello');                                          // здесь родитель делегирует событие потомкам с классом first
  }
});

btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.matches('button.first')) {  // делегирование события 3 вариант (метод Google)
    console.log('Hello');                                      // ищет совпадения среди кнопок с классом first
  }
});





// Разные примеры
let moneySum = 148;

switch (moneySum) {
    case moneySum < 150:
        console.log(moneySum + ' меньше 150');
        break;
    case moneySum > 150 && moneySum < 200:
        console.log(moneySum + ' больше 150, но меньше 200');
        break;
    case moneySum > 200:
        console.log(moneySum + ' больше 200');
        break;
    default:
        console.log('неизвестная сумма');
        break;
}
