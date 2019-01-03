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


// Контекст вызова this
function showThis(a, b) {
   // console.log(this);  // window
    function sum() {
        //console.log(this);  // window
        // return this.a + this.b;  // не сможет выполниться, так как функция не видит переменные из-за this
        return a + b;  // так будет работать (замыкание функции)
    }
    console.log(sum());
}
showThis(5, 3);

let obj = {
    a: 20,
    b: 15,
    sum: function() {  // sum – это функция, но когда она является методом какого-то объекта, контекст выполнения это и есть сам объект
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();


let user = {
    name: "John"
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, ''));  // насильно связали функцию с данными объекта user. Можно передать только строку в виде параметра
console.log(sayName.apply(user));  // второй метод может передать уже массив


// 1. Просто вызов функции – window/undefined
// 2. Метод объекта – this = объект
// 3. Конструктор (new) – this = новый созданный объект
