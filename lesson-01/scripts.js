'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    questionExpenses = prompt('Введите обязательную статью расходов в этом месяце', 'питание, жилье, связь'),
    questionCost = prompt('Во сколько обойдется?', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        'Обязательная статья расходов': questionExpenses,
        'Сумма обязательных расходов' : questionCost        
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData);

let cleanBudget = (appData.budget - appData.expenses["Сумма обязательных расходов"]) / 30;

alert('Мой дневной бюджет ' + cleanBudget + ' руб.');