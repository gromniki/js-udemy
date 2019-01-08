window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let age = document.getElementById('age');
    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    //showUser('Голубев', 'Рома');
    showUser.apply(age, ["Горький","Максим"]);  // метод преподователя

    // function hello() {
    //     console.log(this);        
    // }
    // hello();
    // выведет undefined
});