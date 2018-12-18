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
      pos++
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);


// Дилегирование
let btnBlock = document.querySelector('.btn-block');
let btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == 'BUTTON') {  // дилегирование события 1 вариант
    console.log('Hello');                                  // здесь родитель дилегирует потомкам событие клик
  }
});

btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('first')) {  // дилегирование события 2 вариант
    console.log('Hello');                                          // здесь родитель дилегирует событие потомкам с классом first
  }
});

btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.matches('button.first')) {  // дилегирование события 3 вариант (метод Google)
    console.log('Hello');                                      // ищет совпадения среди кнопок с классом first
  }
});