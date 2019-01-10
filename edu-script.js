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
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math – Math
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

// еще пример
function Animal(name) {
  this.name = name;
  this.canWalk = true;
}

var animal = new Animal("ёжик");

// Детальнее – функция, запущенная через new, делает следующее:

// Создаётся новый пустой объект.
// Ключевое слово this получает ссылку на этот объект.
// Функция выполняется. Как правило, она модифицирует this (т.е. этот новый объект), добавляет методы, свойства.
// Возвращается this.

// Иными словами, при вызове new Animal происходит что-то в таком духе (первая и последняя строка – это то, что делает интерпретатор):

function Animal(name) {
  // this = {};

  // в this пишем свойства, методы
  this.name = name;
  this.canWalk = true;

  // return this;
}

// Теперь многократными вызовами new Animal с разными параметрами мы можем
// создать столько объектов, сколько нужно. Поэтому такую функцию и называют
// конструктором – она предназначена для «конструирования» объектов.

// Правила обработки return
// Как правило, конструкторы ничего не возвращают. Их задача – записать всё, что нужно, в this,
// который автоматически станет результатом.

// Но если явный вызов return всё же есть, то применяется простое правило:

// • При вызове return с объектом, будет возвращён он, а не this.
// • При вызове return с примитивным значением, оно будет отброшено.
// Иными словами, вызов return с объектом вернёт объект, а с чем угодно, кроме объекта – возвратит, как обычно, this.


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
 * https://learn.javascript.ru/datetime – Date
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
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);

// Плавность анимации зависит от частоты кадров. Частота кадров измеряется в “кадрах в секунду”
// (FPS – frame per second). Фильмы и видео обычно делают с 24fps – 30fps. Чем больше это число,
// тем более гладкой кажется анимация. С другой стороны – чем больше fps, тем больше требуется
// ресурсов процессора, что может привести к подвисанию и пропуску кадров. Поскольку большинство
// экранов имеет частоту обновления 60 Гц – fps к которому надо стремится равен 60-ти.

// Немного математики и идеальный интервал 1000ms / 60(fps) = 16.7ms

setInterval(step, 17);

// Что не так с этой функцией?

// Во-первых, SetTimeout не принимает во внимание то, что еще происходит в браузере. Страница может,
// например, находится в неактивной вкладке браузера. При этом она будет использовать ресурсы процессора не взирая на это.

// Кстати умный Chrome делает setInterval и setTimeout равным 1fps в скрытых вкладках.. но, насколько я знаю,
// так пока делает только chrome :(

// Во-вторых, SetTimeout требует перерисовки страницы не в то же время, когда это делает ваш компьютер 
// (а он делает это регулярно). Это означает, что ваш бедный браузер должен синхронизировать вашу
// горе-анимацию с обновлением всего экрана, и если ее частота не синхронизирована с обновлением
// всего экрана, это может потребовать больше вычислительной мощности. А это загрузка процессора,
// нагрев, шум куллера, расход батареи мобильных девайсов.. и т.п

// Еще одним аспектом является анимации нескольких элементов сразу. Конечно, можно попытаться
// все это синхронизировать, но .. это очередной кошмар, в случае разноплановой анимации, происходящей одновремменно.

// requestAnimationFrame – путь к спасению!
// ---------------------

function step() {
  requestAnimationFrame(step, element);
  // описываем один шаг анимации тут
}
step();

// Однако, как вы могли заметить, мы не указали интервал. Как часто бдет вызываться наша функция?
// Все зависит от частоты кадров вашего браузера и компьютера (обычно это 60 кадров в секунду).
// Ключевым отличием является то, что вы просите браузер выполнить функцию (в нашем примере step)
// при первой возможности, а не с заданным интервалом. Еще одно достоинство такого подхода в том,
// что браузеры могут снизить requestAnimationFrame в зависимости от нагрузки, видимости элемента и состояния батареи.

// Если вдруг захочу установить частоту кадров

let fps = 15;
function step() {
    setTimeout(function() {
        requestAnimationFrame(step);
        // Drawing code goes here
    }, 1000 / fps);
}


// Делегирование
// -------------
// Всплытие событий позволяет реализовать один из самых важных приёмов разработки – делегирование.
// Он заключается в том, что если у нас есть много элементов, события на которых нужно обрабатывать
// похожим образом, то вместо того, чтобы назначать обработчик каждому – мы ставим один обработчик
// на их общего предка. Из него можно получить целевой элемент event.target,
// понять на каком именно потомке произошло событие и обработать его.

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

// Еще пример делегирования
{/* <ul id="parent-list">
	<li id="post-1">Item 1</li>
	<li id="post-2">Item 2</li>
	<li id="post-3">Item 3</li>
	<li id="post-4">Item 4</li>
	<li id="post-5">Item 5</li>
	<li id="post-6">Item 6</li>
</ul> */}

// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});

// or

// Get the parent DIV, add click listener...
document.getElementById("myDiv").addEventListener("click",function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("a.classA")) {
    console.log("Anchor element clicked!");
	}
});



/**
 * Ещё про DOM
 */

window.addEventListener('load', callback);
// событие load означает, что код начнёт отрабатываться только после полной загрузки 
// DOM дерева и всех элементов страницы (картинки, иконки и т.д.)
// Не очень удобное событие, так как какая-нибудь картинка может очень долго грузиться.
// Вместо него лучше использовать
// DOMContentLoaded

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // весь код страницы пишу здесь
});

/**
 * Параметры документа, окна и работа с ними
 * Файл: metric-all.png
 */

 let box = document.querySelector('.box');
 let btn = document.querySelector('button');

 let width = box.scrollWidth;  // полная ширина контента вместе с прокруткой
 let height = box.scrollHeight;  // полная высота контента вместе с прокруткой
 // еще есть такие параметры как:
 // offsetWidth  // полная ширина включая отступы
 // offsetHeight
 // clientWidth  // ширина вместе с полосой прокрутки, без отступов
 // clientHeight  // на величину влияет box-sizing: border-box

console.log(width);
console.log(height);
сonsole.log(box.getBoundingClientRect());  // показывает значения всех четырех сторон
console.log(box.getBoundingClientRect().left);  // получение одной нужной координаты

console.log(document.documentElement.clientWidth);  // получение всей ширины документа (видимой)
console.log(document.documentElement.clientHeight);  // получение всей высоты документа (видимой)

console.log(document.documentElement.scrollTop);  // чаще используется этот метод

scrollBy(0, 200);  // метод скролла по странице. Передвигаемся относительно текущего положения
scrollTo(0, 200);  // этот метод указывает точные координаты страницы. 
                   // Мы переместимся в начало документа, отступив 200px сверху

btn.addEventListener('click', () => {
  btn.style.height = box.scrollHeight + 'px';  // данные параметры доступны только для чтения,
                                               // то есть мы не можем изменить значение scrollHeight
                                               // из всех параметров окна мы можем изменить только
                                               // scrollTop и scrollLeft
});

btn.addEventListener('click', () => {
  box.scrollTop = 0;
});


/**
 * Контекст вызова this
 */

function showThis(a, b) {
  // console.log(this);  // window
   function sum() {
       //console.log(this);  // window
       // return this.a + this.b;  // не сможет выполниться, так как функция не видит переменные из-за this
       return a + b;  // так будет работать (замыкание функции)
   }
   console.log(sum());
}
showThis(5, 3);

let obj = {
   a: 20,
   b: 15,
   sum: function() {  // sum – это функция, но когда она является методом какого-то объекта, контекст выполнения это и есть сам объект
       console.log(this);
       function shout() {
           console.log(this);
       }
       shout();
   }
};
obj.sum();


let user = {
   name: "John"
};

function sayName(surname) {
   console.log(this);
   console.log(this.name + surname);
}

console.log(sayName.call(user, ''));  // насильно связали функцию с данными объекта user. Можно передать только строку в виде параметра
console.log(sayName.apply(user, ['Snow']));  // в случае, если надо передать много параметров с данными

function count(number) {
   return this * number;
}

let double = count.bind(2);  // метод bind позволяет прокидывать в функцию count нужное значение и заменяет this
console.log(double(3));  // 3 это параметр функции count, т.о. получается 2 * 3 = 6
console.log(double(10));  // 20
// всё это жёсткие методы привязки контекста. Используются не так часто

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
   console.log(this);
   this.style.backgroundColor = 'red';
   function showThis() {
       console.log(this);
   }
   showThis();  // произойдет вызов window
});

// 1. Просто вызов функции – window/undefined
// 2. Метод объекта – this = объект
// 3. Конструктор (new) – this = новый созданный объект
// 4. Указание конкретного контекста – call, apply, bind



/**
 * Стандарт ES6. ИНТЕРПОЛЯЦИЯ
 * https://www.cheatography.com/romansemko/cheat-sheets/ecmascript-6-es6/pdf_bw/ – шпаргалка по ES6
 * https://habr.com/post/305900/ – ES6 по-человечески
 */

let name = 'Danya';
let age = 9;
let mail = 'danya@mail.ru';

// document.write('Пользователю ' + name + ' ' + age + ' лет. Почта: ' + mail);  // неудобный, старый формат
document.write(`Пользователю ${name} ${age} лет. Почта: ${mail}`);  // используем метод интерполяции с помощью косых кавычек

/**
 * ES6. let, const
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const
 */

// 1. Переменные, созданые с помощью let и const видны лишь в блоке кода, ограниченными фигурными скобками
// 2. Когда браузер читает код, то эти переменные создаются тогда, когда до них дошла очередь 
// 3. При использовании let или const в цикле, для каждой итерации создаётся своя переменная

function makeArray() {
    var items = [];

    for (var i = 0; i < 10; i++) {  // var создалась одна на весь цикл, т.е. в каждой итерации не создается новая
                                    // поэтому мы можем получить только 10-ку, из-за этого в конце выводится три раза 10
                                    // Если указать let, то на каждой итерации будет создаваться новая переменная
        var item = function() {
            console.log(i);
        }

        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();


/**
 * ES6. Стрелочные функции
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 * Выражения стрелочных функций имеют более короткий синтаксис по сравнению с функциональными
 * выражениями и лексически привязаны к значению this (но не привязаны к собственному this,
 * arguments, super, или new.target). 
 * Стрелочные функции всегда анонимные, то есть мы не можем ей присвоить имя, только если
 * занести в переменную. Так же мы не можем управлять обработчиками событий, если необходимо
 * и не сможем запускать эту функцию внутри себя (рекурсия). Своего контекста вызова (this)
 * стрелочная функция не имеет (пример 1). Она его берёт у своего родителя (пример 2).
 * 
 * !!! Чаще всего стрелочные функции используются в обработчиках событий, setInterval, setTimeout, AJAX
 */

// Пример 1.
let fun = () => {
    console.log(this);
};

fun();

// Пример 2.
let obj2 = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj2.sayNumber();

// Пример 3
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();  // вызовется кнопка, то есть тот элемент, на который повесили событие
});

/**
 * ES6. Параметры по-умолчанию
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters
 * 
 */

function calcOrDouble(number, basis = 2) {  // ES6, то есть сразу присваиваем нужное значение.
                                            // здесь имеется ввиду, что если basis = true, то
                                            // код выполняется с переданным значением, а если
                                            // basis = false, то дальше передаётся двоечка
    // basis = basis || 2;  // ES5

    console.log(number * basis);
}
calcOrDouble(3, 5);  // 15
calcOrDouble(6);  // 12

/**
 * ES6. Classes
 * http://jsraccoon.ru/es6-classes
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
 */

class Rectangle {  // название классов обязательно с заглавной буквы
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

/**
 * ES6. Spread-операторы
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * 
 * Spread-оператор служит для разворачивания данных, например массивов
 */

let video = ['youtube', 'vimeo', 'rutube'];
let blogs = ['wordpress', 'livejournal', 'blogger'];
let internet = [...video, ...blogs, 'vk', 'facebook'];  // Spread-оператор в действии. Развернет массив
//let internet = [video, blogs, 'vk', 'facebook'];  // в таком виде покажется массив вида Array(3)

console.log(internet);

// Пример 2
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let numbers = [2, 5, 7];

log(...numbers);  // еще одно применение оператора

// Пример 3
function sum(x, y, z) {
    return x + y + z;
}
  
const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6
 
console.log(sum.apply(null, numbers));
// expected output: 6






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
