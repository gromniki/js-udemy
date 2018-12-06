'use strict';

let startCalc = document.getElementById('start');  // получил доступ к кнопке Начать расчет
let allBlocks = document.querySelectorAll('.budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value');  // получил все блоки со значением *-value
let expensesItem = document.getElementsByClassName('expenses-item');
let optExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let btnExpences = document.getElementsByTagName('button')[0];
let btnOptExpences = document.getElementsByTagName('button')[1];
let btnCount = document.getElementsByTagName('button')[2];
let other = document.querySelector('input');

console.log(allBlocks);
console.log(expensesItem);
console.log(btnExpences);
console.log(btnOptExpences);
console.log(btnCount);
console.log(optExpensesItem);
console.log(other);


// ·        Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)