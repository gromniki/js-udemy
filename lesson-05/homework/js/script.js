'use strict';

// Рефакторинг кода

let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let newMenuList = document.createElement('li');  // новый пункт меню
// let column = document.querySelectorAll('.column');  // было так
let title = document.querySelector('#title');
let advert = document.querySelector('.adv');
let promptId = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);  // восстановил порядок в меню

newMenuList.classList.add('menu-item');  // новому пункту добавляю класс
newMenuList.textContent = 'Пятый пункт';  // и текст
menu.appendChild(newMenuList);  // вставляю в конец списка

document.body.style.background = 'url(/lesson-05/homework/img/apple_true.jpg) center no-repeat';  // заменил картинку фона

title.textContent = 'Мы продаем только подлинную технику Apple';  // добавил в заголовок текст "подлинная"

// column[1].removeChild(advert);  // удалил рекламу со страницы (было)
advert.remove();  // (стало)

let ask = prompt('Ваше отношение к технике Apple', '');  // окошко с вопросом

promptId.textContent = ask;  // записываю ответ в блок prompt на странице
