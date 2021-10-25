
document.addEventListener('DOMContentLoaded', function () {
// Создать массив из массива массивов
    const allArray = [["Фантастика", "Мистика"],
                      ["Драма", "Науч-поп", "Детективы"],
                      ["Учебная литература"]]

    console.log(allArray.reduce( (total, all) => total.concat(all)))

// Играюсь с bind
    function add(c, d) {
        console.log(this.a + this.b + c + d);
    }
    const ten = {a: 1, b: 2};
    add.call(ten, 3, 4);
    add.apply(ten, [3,4]);
    const myBind = add.bind(ten,3)
    myBind(4)

//    - получение текущего URL
//    - вывод alert
    document.querySelector('#clickURL').onclick = () => alert(window.location.href)

//    - получение, навигация и изменение истории переходов страницы/окна (BOM)
//    Играюсь с console
    document.querySelector('#clickBOM').onclick = () => {
        console.clear()
        console.log(window.history)
        console.log(navigator.platform, navigator.appCodeName,navigator.language)
        console.info('Информация')
        console.warn('Предупреждение')
        console.error('Ошибка')
    }

    document.querySelector('.index1').onclick = () => window.location.href='index_new.html'
    document.querySelector('.index2').onclick = () => window.location.href='index_next.html'

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
//    - debugging в консоли



// ИЗУЧИТЬ
//    - глобальный объект window
//    - Cookie (параметры, использование)
//    - Local Storage, Session Storage
//    - location, history, navigator (BOM)
//    - работа с оповещением пользователя (alert, console.log)
//    - дебаггинг в консоли браузера (точки останова, debugger)

}, false);