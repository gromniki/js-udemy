'use strict';

let startCalc = document.getElementById('start');  // получил доступ к кнопке Начать расчет

// Задаю переменные для значений
let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

let btnExpences = document.getElementsByTagName('button')[0];
let btnOptionalExpences = document.getElementsByTagName('button')[1];
let btnCount = document.getElementsByTagName('button')[2];

// Задаю переменные оставшимся input'ам 
let incomeItem = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let	sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');
