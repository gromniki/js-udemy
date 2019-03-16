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


// let firstChar = sillyString.slice(0, 1).toUpperCase();
// sillyString = firstChar + sillyString.toLowerCase().slice(1);




console.log(sillyString);
//console.log(firstChar);


