'use strict';

/**
 * Урок 2. Типы данных
 */

// Сколько секунд в году
const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_AN_HOUR = 60;
const SECONDS_IN_AN_HOUR = SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR;

console.log(SECONDS_IN_AN_HOUR);

const HOURS_IN_A_DAY = 24;
const SECONDS_IN_A_DAY = SECONDS_IN_AN_HOUR * HOURS_IN_A_DAY;

console.log(SECONDS_IN_A_DAY);

const DAYS_IN_A_YEAR = 365;
const SECONDS_IN_A_YEAR = SECONDS_IN_A_DAY * DAYS_IN_A_YEAR;

console.log(SECONDS_IN_A_YEAR);

// Какой возраст в секундах
let age = 37;
age * SECONDS_IN_A_YEAR;


// slice - получение среза строки
let longString = 'Эта длинная строка такая длинная';
longString.slice(4, 18);  // в скобках позиции первого и последнего символов
// длинная строка

// toUpperCase - Перевод строки в заглавный регистр
// toLowerCase - Перевод строки в строчный регистр
'Эй, как дела?'.toUpperCase();  // ЭЙ, КАК ДЕЛА?
'Эй, кАК деЛа?'.toLowerCase();  // эй, как дела?

// Задача. Сделать строку 'Эй, как дела?' из 'эЙ, кАК деЛа?'
let sillyString = 'эЙ, кАК деЛа?';  // silly - глупая
sillyString = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();

console.log(sillyString);

/**
 * Урок 3. Массивы 
 */

// Добавление элемента в массив
// Метод .push добавляет элемент в конец массива
let animals = [];
animals.push('Кот');
animals.push('Пёс');
animals.push('Лама');

// Метод .unshift добавляет элемент в начало массива, но он более медленный, в отличии от .push
animals.unshift('Мартышка');
animals.unshift('Белый медведь');

// Удаление элементов массива
// Метод .pop удаляет последний элемент из массива. Он делает сразу 2 дела: удаляет
// последний элемент и возвращает этот элемент в виде значения
let lastAnimal = animals.pop();  // сохранили удалённый элемент в переменной (Лама)

// Метод .shift удаляет из массива первый элемент и возвращает его значение
let firstAnimal = animals.shift();  // сохранили удалённый первый элемент массива в переменной (Белый медведь)

// Объединение массивов
// Чтобы склеить два массива, создав таким образом новый массив нужно использовать след. команду
//firstArray.concat(otherArray);

// Пример
let furryAnimals = ['Альпака', 'Кольцехвостый лемур', 'Йети'];
let scalyAnimals = ['Удав', 'Годзилла'];  // scally (пер.) – чешуйчатые животные
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);

// с помощью concat можно объединить больше чем два массива. Для этого нужно указать дополнительные
// массивы в скобках, разделив их запятыми

// Поиск индекса элемента в массиве
// Чтобы выяснить какой у элемента индекс в массиве, используй .indexOf('синий'). Например:
let colors = ['красный', 'зелёный', 'синий'];
colors.indexOf('синий');

