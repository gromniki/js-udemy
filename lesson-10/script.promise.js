window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let drink = false;

    function shoot(arrow) {
        console.log('Вы произвели выстрел...');

        let promise = new Promise(function(resolve, reject) {
            // resolve - обещание выполнилось
            // reject - обещание не выполнилось

            setTimeout(function() {
                Math.random() > 0.5 ? resolve({}) : reject('Вы промахнулись');
            }, 3000);
        });  // Так создаётся объект promise
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

    shoot({})
        .then(mark => console.log('Вы попали в цель'))
        .then(win)
        .catch(loose);  // это всё методы и здесь не нужно ставить точку с запятой
                        // как если бы всё шло в одну строку (только в конце)
});