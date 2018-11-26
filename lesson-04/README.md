# Задание 4. Применяем функции

> Такая функция называется Function Expression или функциональное выражение
```javascript
let firstCalc = function(a, b) {
  return a + b;
}

console.log(firstCalc(3,4));  // 7
```

> Такая функция называется Function Declaration. Может использоваться и до и после объявления функции.
```javascript
function secondCalc(a, b) {
  return a + b;
}
```

Основное отличие между ними: функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.

```javascript
let numeric = 20;

function showNum(text) {
  console.log(text);
  let numeric = 10;
  console.log(numeric);  // 10
}

showNum('Hello');
console.log(numeric);  // 20
```

### Замыкание функций
https://goo.gl/xA9CE1 – про замыкания
Замыкание функций. Когда внутри неё есть обращение к какой-либо переменной, функция ищет переменную сначала внутри себя,
а потом уже во внешних переменных, причём идёт так до самого высшего уровня шаг за шагом, поэтому
> Замыкание – это функция со всеми внешними переменными, которые ей доступны.

### Стрелочная функция
Рассмотрим стрелочную функцию из ES6
```javascript
let calcArrow = (a,b) => a + b;  // {} можно опустить, если мало операций

console.log(calcArrow(2,7));  // 9
```

### Методы и свойства
https://learn.javascript.ru/string – методы строк
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number – методы чисел

```javascript
let str = 'Test';
console.log(str.length);  // 4

console.log(str.toUpperCase());  // TEST
console.log(str.toLowerCase());  // test

let twelve = '12.2px';

console.log(parseInt(twelve));  // переводит в другую систему счисления
console.log(parseFloat(twelve));  // переводит в десятичную систему счисления
```

### Что значит () после названия функции?

> Это значит вызов функции.