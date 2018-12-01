# Задание 5. Применяем объекты и массивы

Объект можно создать так
```javascript
let obj = new Object();  
```
но этот метод не удобный и имеет свои технические минусы

нормальное создание объекта выглядит так:
```javascript
let obj = {};

let options = {
  width: 1024,
  height: 1024,
  name: 'test'
};

console.log(options.name);
options.bool = false  // создание нового свойства на лету
options.color = {  // или свойства-объекта
  border: 'black',
  bg: 'red'
};

delete options.bool;  // удаление свойства из объекта

console.log(options);

for (let key in options) {  // вывод всех значений
  console.log('Свойство ' + key + ' имеет значение ' + options[key]);
};

console.log(Object.keys(options).length);
```

Дело в том, что в JavaScript можно обратиться к любому свойству объекта, даже если его нет.
Ошибки не будет.
Но если свойство не существует, то вернется специальное значение **undefined**:

#### Разница между проверками in и === undefined
Есть два средства для проверки наличия свойства в объекте: первое – оператор **in**, второе – получить его и сравнить с **undefined**.
Они почти идентичны, но есть одна небольшая разница.
Дело в том, что технически возможно, что свойство есть, а его значением является **undefined**:

```javascript
var obj = {};
obj.test = undefined; // добавили свойство со значением undefined

// проверим наличие свойств test и заведомо отсутствующего blabla
alert( obj.test === undefined ); // true
alert( obj.blabla === undefined ); // true
```
…При этом, как видно из кода, при простом сравнении наличие такого свойства будет неотличимо от его отсутствия.

Но оператор in гарантирует правильный результат:
```javascript
var obj = {};
obj.test = undefined;

alert( "test" in obj ); // true
alert( "blabla" in obj ); // false
```
Как правило, в коде мы не будем присваивать **undefined**, чтобы корректно работали обе проверки.
А в качестве значения, обозначающего неизвестность и неопределенность, будем использовать **null**.

## МАССИВЫ И ПСЕВДОМАССИВЫ
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array

https://learn.javascript.ru/array

```javascript
let arr = [1, 2, 3, 4, 5];  // создание простого массива

arr[99] = 99;  // в массив добавится 99 индекс со значением 99
// в консоли будет: 1, 2, 3, 4, 5, <94 empty items>, 99 
// так нельзя делать, это грубая ошибка
// length действует как последний номер индекса + 1
```

- arr.pop();  // удаление последнего элемента из массива
- arr.push(6);  // добавление нового элемента с именем 6 в конец массива arr
- arr.shift();  // удаление первого элемента из массива
- arr.unshift('1');  // добавление нового элемента с именем 1 в начало массива arr
> Методы push/pop выполняются быстро, а shift/unshift – медленно.

```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = ['first', 2, 3, 'four', 5];

arr2.forEach(function(item, i, mass) {  // способ перебора массива с callback функцией
  console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});

arr3 = [2, 4, 5, 6, 9];

for (let key in arr3) {  // с помощью in выведутся только ключи(индексы) массива
  console.log(key);      // с помощью of выведутся только значения массива
}

let ans = prompt("", ""),
    arr4 = [];

arr4 = ans.split(',');  // split превращает строку в массив, в скобках разделитель
console.log(arr4);

let arr5 = ['first', 'second', 'queen', 'picture'];
    i = arr5.join(', ');  // join превращает массив в строку, в скобках разделитель

console.log(i);

let arr5 = ['first', 'second', 'queen', 'picture'];
    i = arr5.sort();  // sort сортировка массива. Если не передать функцию
                                // сравнения, сортирует элементы как строки
console.log(i);

let arr6 = [1, 5, 13, 7];
    i = arr6.sort(compareNum);

function compareNum(a, b) {
  return a-b;
}

console.log(i);
```

> Псевдомассив – это объект, структура которого совпадает с обычным массивом 
> он хранит элементы в индексах, но при этом они не обладают методами,
> свойствами как полноценные массивы из-за отличий в своём прототипе

## ООП
https://learn.javascript.ru/constructor-new

https://learn.javascript.ru/classes

```javascript
let soldier = {
  health: 400,
  armor: 100
};

let john = {
  health: 100
};

john.__proto__ = soldier;  // john наследует от объекта soldier другие свойства

console.log(john);
console.log('Броня Джона: ' + john.armor);
```

### Как перебрать свойства объекта?

> Свойства объекта перебираются с помощью for..in