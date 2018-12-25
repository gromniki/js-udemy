window.addEventListener('DOMContentLoaded', () => {
    'use strict';
  
    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show', 'active');
        tabContent[i].classList.add('hide');
      }
    }

    hideTabContent(1);

    function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show', 'active');
      }
    }

    info.addEventListener('click', (event) => {
      let target = event.target;

      if (target && target.matches('.info-header-tab')) {
        console.log('done');

        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    });

    // Timer
    let deadline = '2018-12-31';

    //e.addEventListener('click', () => {});  // шаблон
  });