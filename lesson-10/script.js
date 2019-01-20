window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    /**
     * PROMISE
     * https://learn.javascript.ru/promise
     * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
     */

    // Объект Promise (обещание) используется для отложенных и асинхронных вычислений. 
    // Promise может находиться в трёх состояниях:
    // ожидание (pending): начальное состояние, не выполнено и не отклонено.
    // выполнено (fulfilled): операция завершена успешно.
    // отклонено (rejected): операция завершена с ошибкой.
    // Другой термин, описывающий состояние заданный (settled): обещание выполнено или отклонено,
    // но не находится в состоянии ожидания.

    // callback hell – это когда много callback-функций, последовательно идущих друг за другом
    // Пример:
    // let func1 = function(param, func2) {
    //     func2(function(param, func3) {
    //         func3(function(param, func4) {
    //             func4(function(param, func5) {
    //                 // e.t.c.
    //             });
    //         });
    //     });
    // }

    // Без promise
    let drink = false;

    function shoot(arrow, headshot, fail) {
        console.log('Вы произвели выстрел...');

        setTimeout(function() {
            Math.random() > 0.5 ? headshot({}) : fail('Вы промахнулись');
        }, 3000);
    }

    function win() {
        console.log('Вы победили!');
        (drink === true) ? buyBeer() : giveMoney();
    }

    function buyBeer() {
        console.log('Вам купили пиво');
    }

    function giveMoney() {
        console.log('Вам заплатили 1 000 000 долларов');
    }

    function loose() {
        console.log('Вы проиграли!');
    }

    shoot({}, 
        function(mark) {
            console.log('Вы попали в цель');
            win(mark, buyBeer, giveMoney);
        },
        function(miss) {
            console.error(miss);
            loose();
        }
    );
});