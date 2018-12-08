# Задание 6. DOM

Как можно изменить размер шрифта элемента при помощи JS?

https://www.w3schools.com/JSREF/prop_style_fontsize.asp

```javascript
let sizeFont = document.body.style.fontSize = "x-large";

element.style.fontSize = "16px"  // лучше так
element​.​style​[​"​font-size​"​]​ ​=​ "20px" ;  // вроде можно и так, надо проверить
```

На какой html-элемент можно назначить обработчик события submit?

> <form> Отправка данных формы (щелчок по кнопке <input type="submit">)