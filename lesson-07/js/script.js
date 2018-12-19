'use strict';

// сделаем простую анимацию
let btn = document.querySelector('.btn');
let elem = document.querySelector('.box');

function myAnimation() {
  let pos = 0;  
  let id = setInterval(frame, 10);

  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);


// Делегирование
// -------------
// Всплытие событий позволяет реализовать один из самых важных приёмов разработки – делегирование.
// Он заключается в том, что если у нас есть много элементов, события на которых нужно обрабатывать
// похожим образом, то вместо того, чтобы назначать обработчик каждому – мы ставим один обработчик
// на их общего предка. Из него можно получить целевой элемент event.target,
// понять на каком именно потомке произошло событие и обработать его.

let btnBlock = document.querySelector('.btn-block');
let btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == 'BUTTON') {  // делегирование события 1 вариант
    console.log('Hello');                                  // здесь родитель делегирует потомкам событие клик
  }
});

btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('first')) {  // делегирование события 2 вариант
    console.log('Hello');                                          // здесь родитель делегирует событие потомкам с классом first
  }
});

btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.matches('button.first')) {  // делегирование события 3 вариант (метод Google)
    console.log('Hello');                                      // ищет совпадения среди кнопок с классом first
  }
});