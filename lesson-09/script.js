window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // let options = {
    //     width: 1366,
    //     height: 768,
    //     background: 'red',
    //     font: {
    //         size: '18px',
    //         color: '#ffffff'
    //     }
    // };

    // console.log(JSON.stringify(options));  // stringify преобразует объект options в формат JSON
    // console.log(JSON.parse(JSON.stringify(options)));  // parse преобразует формат JSON в объект

    /**
     * AJAX
     * https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
     * https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest – использование
     * https://developer.mozilla.org/ru/docs/Web/API/FormData/Using_FormData_Objects
     * https://ilikekillnerds.com/2017/09/convert-formdata-json-object/ – из FormData to JSON
     * https://goo-gl.ru/4HLH – Заголовки HTTP
     */

    let inputRub = document.getElementById('rub');
    let inputUsd = document.getElementById('usd');

    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();  // главный объект для работы с AJAX запросами, со своими методами, свойствами и событиями

        // request.open(method, url, async, login, pass);  // первый метод, который чаще всего идёт следом после создания объекта
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');  // настройка http запросов
        request.send();  // отправка данных на сервер. Запускает наш запрос, который идёт за ответом к серверу

        // Свойства объекта XMLHttpRequest:
        // status – код ответа (200, 403, 404 и т.д.)
        // statusText – текстовое описание ответа от сервера (ok или not found)
        // responseText / response – текст ответа сервера (то что backend отправляет с сервера)
        // readyState – текущее состояние запроса (5 состояний: UNSENT(0), OPENED(1), HEADERS_RECEIVED(2), LOADING(3), DONE(4))

        request.addEventListener('readystatechange', function() {  // это событие более гибкое в отличие от load
            if (isNaN(inputRub.value)) {
                inputUsd.value = "Введите число";
                return false;
            }

            if (request.readyState === 4 && request.status == 200) {  // убеждаемся, что всё прошло гладко
                let data = JSON.parse(request.response);

                inputUsd.value = (inputRub.value / data.usd).toFixed(2);
            } else {
                inputUsd.value = 'Что-то пошло не так!';  // оповещаем пользователя в случае ошибки
            }
        });
    });

    // Объект FormData позволяет создать набор пар ключ/значение и передать их, используя XMLHttpRequest.
    // Объект FormData предназначен для передачи данных форм, однако может быть использован для перечачи
    // пар ключ/значение независимо от форм. Данные передаются в том же формате, как и данные,
    // передаваемые методом submit() формы, с установленной кодировкой enctype="multipart/form-data".
    // https://developer.mozilla.org/ru/docs/Web/API/FormData/Using_FormData_Objects – сам объект
    // https://ilikekillnerds.com/2017/09/convert-formdata-json-object/ – из FormData to JSON

    // Пример конвертирования
    const formData = new FormData(SomeFormElement);
    let jsonObject = {};

    for (const [key, value]  of formData.entries()) {
        jsonObject[key] = value;
    }
});
