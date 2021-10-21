
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

    }

    document.querySelector('.index1').onclick = () => window.location.href='index_new.html'
    document.querySelector('.index2').onclick = () => window.location.href='index_next.html'

    document.querySelector('.back').onclick = () => window.history.back()
    document.querySelector('.next').onclick = () => window.history.forward()
    document.querySelector('.go').onclick = () => window.history.go(-2)


//    - сохранение Cookie и перезапись с параметрами
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