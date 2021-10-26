
document.addEventListener('DOMContentLoaded', function () {
// Создать массив из массива массивов
    const allArray = [["Фантастика", "Мистика"],
        ["Драма", "Науч-поп", "Детективы"],
        ["Учебная литература"]]

    console.log(allArray.reduce((total, all) => total.concat(all)))

// Играюсь с bind
    function add(c, d) {
        console.log(this.a + this.b + c + d);
    }

    const ten = {a: 1, b: 2};
    add.call(ten, 3, 4);
    add.apply(ten, [3, 4]);
    const myBind = add.bind(ten, 3)
    myBind(4)

//    - получение текущего URL
//    - вывод alert
    document.querySelector('#clickURL').onclick = () => alert(window.location.href)

//    - получение, навигация и изменение истории переходов страницы/окна (BOM)
//    Играюсь с console
    document.querySelector('#clickBOM').onclick = () => {
        console.clear()
        console.log(window.history)
        console.log(navigator.platform, navigator.appCodeName, navigator.language)
        console.info('Информация')
        console.warn('Предупреждение')
        console.error('Ошибка')
    }

    document.querySelector('.index1').onclick = () => window.location.href = 'index_new.html'
    document.querySelector('.index2').onclick = () => window.location.href = 'index_next.html'

    document.querySelector('.back').onclick = () => window.history.back()
    document.querySelector('.next').onclick = () => window.history.forward()
    document.querySelector('.go').onclick = () => window.history.go(-2)


//    - сохранение Cookie и перезапись с параметрами
    document.querySelector('#clickCookie').onclick = () => {

        let name = "my name";
        let value = "Tanya K"
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        console.log(document.cookie); // my%20name=Tanya%20K

        document.cookie = "path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
        console.log(document.cookie)
    }

    //https://learn.javascript.ru/cookie Консоль:
    // document.cookie
    //'_ga=GA1.2.1772461389.1632993166; _ym_uid=163299316610068329; _ym_d=1632993166; vblastvisit=1634726449; ... user=John'
// Это сторонние файлы cookie, размещенные Google (Позволяет различать пользователей)
// Яндексом (Используется для идентификации пользователя)
// Дата первой пользовательской сессии (Яндекс)

    //document.cookie='user=Tanya'
    //'user=Tanya'
    //document.cookie
    //'_ga=GA1.2.1772461389.1632993166; _ym_uid=163299316610068329; _ym_d=1632993166; vblastvisit=1634726449; ... user=Tanya'


//    - сохранение данных в Local Storage, Session Storage и получение данных из них
    document.querySelector('#clickSS').onclick = () => {
        console.log(sessionStorage.getItem('testSession')) // null, если вкладка новая
        sessionStorage.setItem('testSession', 'Я тут до закрытия вкладки')
        sessionStorage.setItem('test', ':)');
        console.log(sessionStorage.getItem('test'), `\n Количество элементов - ${sessionStorage.length}`);
        sessionStorage.removeItem('test')
        console.log(`Произведено удаление по ключу test\n Количество элементов - ${sessionStorage.length}`);
    }

    document.querySelector('#clickLS').onclick = () => {
        console.log(localStorage.getItem('testLocal')) // null только в первый запуск или после localStorage.removeItem('testLocal') в консоли
        localStorage.setItem('testLocal', 'Я переживу перезапуск браузера')
        localStorage.setItem('test', ':)');
        console.log(localStorage.getItem('test'), `\n Количество элементов - ${localStorage.length}`);
        localStorage.removeItem('test')
        console.log(`Произведено удаление по ключу test\n Количество элементов - ${localStorage.length}`);

    }
    debagger
//    - debugging в консоли

// ИЗУЧИТЬ
//    - глобальный объект window
//    - Cookie (параметры, использование)
//    - Local Storage, Session Storage
//    - location, history, navigator (BOM)
//    - работа с оповещением пользователя (alert, console.log)
//    - дебаггинг в консоли браузера (точки останова, debugger)


    // ИТЕРАЦИЯ 7
    //  Отправить запросы на получение репозиториев любого пользователя github.com с последующим выведением данных на страницу:
    //  1) с использованием Promise
    //  2) с использованием async/await
    //  Предусмотреть возможность обработки ошибки (в обоих случаях).
    document.querySelector('#clickAsync').onclick = () => {
        (async () => {
            let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
            let response = await fetch(url);

            let commits = await response.json(); // читаем ответ в формате JSON
            alert(commits[0].author.login);
    })()
    }

    document.querySelector('#clickPromise').onclick = () => {
        fetch('https://api.github.com/users/sonnetk/repos')
            .then(response => response.json())
            .then(commits => alert(commits[0].author.login));
    }

// ИЗУЧИТЬ
    // - Типы запросов HTTP
    // - JS fetch
    // - Promise
    // - async/await
    // - обработка ошибок при отправлении запросов

}, false);