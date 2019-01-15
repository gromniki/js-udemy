window.addEventListener('DOMContentLoaded', function() {
    //'use strict';
    //let age = document.getElementById('age');
    //function showUser(surname, name) {
    //    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    //}
    //showUser('Голубев', 'Рома');
    //showUser.apply(age, ["Горький","Максим"]);  // метод преподователя

    // function hello() {
    //     console.log(this);        
    // }
    // hello();
    // выведет undefined

    // let names = [
    //     'Alex',
    //     '',
    //     'ludmila',
    //     'Viktor',
    //     '',
    //     'oleg',
    //     'iNna',
    //     'Ivan',
    //     'Alex',
    //     'Olga',
    //     ' Ann',
    //     'aa'
    // ];

    // console.log(names);

    
// Создать класс options
// Он должен содержать свойства: height, width, bg, fontSize, textAlign

// Он должен содержать метод, создающий новый div на странице,
// записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров

// Создать новый объект через класс

// Вызвать его метод и получить элемент на странице

    let testDiv = document.querySelector('.more');
    class Options {
        constructor(width, height, fontSize, textAlign, bg) {
            this.width = width;
            this.height = height;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.bg = bg;
        }

        createDiv() {
            let elem  = document.createElement('div');
            
            elem.textContent = 'Привет земляне!';

            elem.style.cssText=`
                width: ${this.width}px;
                height: ${this.height}px;
                font-size: ${this.fontSize}px;
                text-align: ${this.textAlign};
                background: ${this.bg};
            `;

            document.body.appendChild(elem);

            return elem;
        }
    }

    const myText = new Options(400, 100, 24, 'center', '#ff0000');
    //myText.createDiv();

    console.log(myText.createDiv());
});