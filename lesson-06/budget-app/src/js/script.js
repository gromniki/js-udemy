'use strict';

let startPrograms = document.getElementById('start');  // получил доступ к кнопке Начать расчет

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
let allBtns = document.querySelectorAll('button');

// Задаю переменные оставшимся input'ам 
let incomeItem = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let	sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;

btnExpences.disabled = true;
btnOptionalExpences.disabled = true;
btnCount.disabled = true;

// 2) Если программа еще не запущена (не нажали кнопку "Начать расчет") - сделать кнопки неактивными.
startPrograms.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
	
	btnExpences.disabled = false;
    btnOptionalExpences.disabled = false;
    btnCount.disabled = false;

    // allBtns.forEach(function(item) {
    //    item.removeAttribute('disabled');
    // });  // это был мой вариант отключения атрибута disabled
});

btnExpences.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;
        
        if (typeof(a) === 'string' && 
            typeof(a) != null &&
            typeof(b) != null && 
            a != '' &&
            b != '' &&
            a.length < 60) {
    
            console.log('Done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log ("Badly");
            i--;
        }
    }

    expensesValue.textContent = sum;
});

btnOptionalExpences.addEventListener('click', () => {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optExpenses = optionalExpensesItem[i].value;

        appData.optionalExpenses[i] = optExpenses;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
    }
});

// 3) Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат 
// (т. e. от бюджета на месяц отнимаем общую сумму всех обяз. трат и ее делим на 30 дней)
btnCount.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();  // toFixed преобразовывает в строку и округляет число
        dayBudgetValue.textContent = appData.moneyPerDay;
        
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
            console.log('Высокий уровень достатка');
        } else {
            console.log('Сбой какой-то');
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', () => {  // есть еще событие 'change', которое действует, когда убирается фокус
    let items = incomeItem.value;

    if (typeof(items) === 'string' && typeof(items) != null && items != '') {
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    } else {
        incomeValue.textContent = 'Что-то не то вводите';
    }
});

checkSavings.addEventListener('click', () => {
    (appData.savings === true) ? appData.savings = false : appData.savings = true;
});

sumValue.addEventListener('input', function() {
   if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100  * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
   }
});

percentValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100  * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

// Основной объект моей программы
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}

console.log(appData);

