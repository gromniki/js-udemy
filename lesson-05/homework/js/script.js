'use strict';

let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let newMenuList = document.createElement('li');  // новый пункт меню
let advert = document.querySelector('.adv');
let column = document.querySelectorAll('.column');

console.log(menuItem);

menu.insertBefore(menuItem[2], menuItem[1]);  // восстановил порядок в меню

newMenuList.classList.add('menu-item');  // новому пункту добавляю класс
newMenuList.textContent = 'Пятый пункт';  // и текст
menu.appendChild(newMenuList);  // вставляю в конец списка

menuItem.forEach(function(item, i) {
    // console.log(i + ' ' + item);

    // item.style.backgroundColor = 'red';

});

document.body.style.background = 'url(/lesson-05/homework/img/apple_true.jpg) center no-repeat';  // заменил картинку фона

// ·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")


// ·        Удалить рекламу со страницы
column[1].removeChild(advert);

// ·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"


