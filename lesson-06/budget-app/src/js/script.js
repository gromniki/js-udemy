'use strict';

let startCalc = document.getElementById('start');  // получил доступ к кнопке Начать расчет
let allBlocks = document.querySelectorAll('.-value');  // получил все блоки со значением *-value

console.log(allBlocks);

// Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div>
// и заканчивая <div class="yearsavings-value"></div>)

// ·        Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

// ·        Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 

// ·        Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

// ·        Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)