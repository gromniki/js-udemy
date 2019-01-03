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
console.log(sayName.apply(user, ['Snow']));  // в случае, если надо передать много параметров с данными

function count(number) {
    return this * number;
}

let double = count.bind(2);  // метод bind позволяет прокидывать в функцию count нужное значение и заменяет this
console.log(double(3));  // 3 это параметр функции count, т.о. получается 2 * 3 = 6
console.log(double(10));  // 20
// всё это жёсткие методы привязки контекста. Используются не так часто

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();  // произойдет вызов window
});

// 1. Просто вызов функции – window/undefined
// 2. Метод объекта – this = объект
// 3. Конструктор (new) – this = новый созданный объект
// 4. Указание конкретного контекста – call, apply, bind
