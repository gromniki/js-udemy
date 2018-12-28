window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Создаю функцию-конструктор с нужными мне параметрами
    function User(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
        this.hello = function() {
            console.log('Hello, ' + this.name);
        }
    }

    User.prototype.anyname = function(name) {
        console.log('Пользователь ' + this.name + ' ушёл');
    }

    let ivan = new User('Ivan', 25);
    let alex = new User('Alex', 36);

    console.log(ivan);
    console.log(alex);

    ivan.hello();
    ivan.anyname();
});