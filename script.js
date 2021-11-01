'use strict'

document.addEventListener('DOMContentLoaded', function () {
// браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены.

// ИТЕРАЦИЯ 4
    let divOne = document.querySelector('.div1'),
        divTwo = document.querySelector('.div2'),
        divThree = document.querySelector('.div3')

// Играюсь с class
//     console.log(divOne.getAttribute('class'))
//     divOne.classList.add('class')
//     console.log(divOne.className)
//     divOne.className = 'class'
//     console.log(divOne.className)
//     divOne.classList.toggle('class')
//     console.log(divOne.className)
//     divOne.classList.toggle('class')
//     console.log(divOne.className, divOne.classList.contains('class'))

    divOne.onclick = function() {
        let variableOne = 2
        let variableTwo = 6
        alert('2 + 6 = '+ (variableOne+variableTwo));
        variableTwo = 10
        variableOne = '10 * 10'
        alert(variableOne+' = '+variableTwo * 10 + ' = 10^2 = '+ variableTwo**2)
        let variable = variableTwo > 15 ? 1 : 150
        alert('150/10 = '+ variable/variableTwo)
        variableOne = '10'
        alert('Остаток от деления 10 на 6 = ' + variableTwo%(variableOne - 4))
    };

    divTwo.onclick = function() {
        let variableTree = 0
        let variableFour = 1

        if (variableTree < variableFour && (!variableFour===false)) {
            alert("Условия выполненены")
        }
        else if (variableTree < variableFour || (!variableFour===false)) {
            alert("Выполнено хотя бы одно условие")
        }
        else {
            alert("Условия не выполнены")
        }
    }

    divThree.onclick = function() {
        try {
            alert( 'Код без ошибки' );
            if (confirm('Сгенерировать ошибку?')) BAD_CODE();
        } catch (e) {
            alert( 'Сгенерирована ошибка' );
        } finally {
            console.log('Спасибо за ответ')
            alert( 'Загляни в консоль :)' );
        }
    }

    document.forms[0].submit.onclick = function (){
        let nameF = document.getElementById('fname').value,
            nameL = document.getElementById('lname').value,
            phoneNumber = document.getElementById('phone').value


        alert("Привет, "+nameF+" "+ nameL+"! \u{1F60D}")
        console.log('I\'m ok')
        alert(`Ваш номер телефона: ${phoneNumber}`)
    }

    //Из файла html (iter4)
    let buttonMain = document.getElementById('clickHere'),
        buttonTwo = document.getElementById('hHere'),
        inpOne = document.getElementById('inputOne'),
        result = document.getElementById('spanInp'),
        butStop = document.getElementById('buttonStop')


    buttonMain.onclick = function () {
        buttonMain.innerHTML = 'Вы нажали на кнопку'
    }
    buttonTwo.onmouseout = function () {
        buttonMain.style.background = "white"
    }
    buttonTwo.onmouseover = () =>  {
        buttonMain.style.background = "red"
    }
    buttonTwo.onclick = () =>  {
        buttonMain.style.background = "blue"
    }
    inpOne.onfocus = () => inpOne.style.background = "#d3d3d3"

    inpOne.onblur = () =>  inpOne.style.background = "white"

    inpOne.oninput = () => result.innerHTML = inpOne.value

    butStop.onclick = () => event.stopPropagation()

// ИТЕРАЦИЯ 5
// 1. Arrow function
// 2. Default parameter
// 3. Spread/Rest operator

// вывод в консоль различных результатов по нажатию на изображение книг

    let books = document.querySelector('#clickBooks')
    let arr = ['apple', 'banana', 'orange', 'test'];
    let breakfast = arr.map(fruit => {
        return fruit + 's';
    });
    function oneFunction(...args) {
        console.log(args);
    }

    let variable = (a, b= 100) => a + b;
    books.onclick = () => {
        console.log(variable(5) )
        console.log(variable(5, 50))
        oneFunction(1,54,24,1,6,24,6)
        console.log(breakfast)
    }


// 4. класс в JS
// 5. ‘super’ keyword
// 6. строковый шаблон
// 7. деструктуризация объекта
// 8. yield

// по нажатию на кнопку Submit создать объект и деструктуризировать его,
// создать класс и потомка,обратиться к родительскому классу с помощью super,
// вывести в консоль отсчет, сгенерированный с помощью yield, приветствие

    document.querySelector('#submit').onclick = function () {
        let nameP = {
            fName: document.getElementById('fname').value,
            lName: document.getElementById('lname').value
        };
        let { fName: F, lName: L, number: N ='без номера' } = nameP;

        function* generate() {
            yield 3;
            yield 2;
            yield 1;
        }
        let generator = generate()
        for(let i of generator) {
            console.log(i);
        }

        class nameUser {
            constructor() {
                console.log(`${F} - получено имя`);
            }
        }

        class findNameUser extends nameUser {
            constructor() {
                super();
                console.log(`${L} - получена фамилия`);
            }
        }

        let x = new findNameUser();
        console.log(`Привет, ${F} ${L} ${N}!`);
    }

// ИТЕРАЦИЯ 6
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

//    - debugging в консоли
//       debugger;

// ИТЕРАЦИЯ 7

    //  ЗАДАНИЕ
    //  Отправить запросы на получение репозиториев любого пользователя
    //  github.com с последующим выведением данных на страницу
    //  Предусмотреть возможность обработки ошибки (в обоих случаях)

    //  1) с использованием Promise
    const textSpan = document.querySelector('#resultClick')

    document.querySelector('#clickPromise').onclick = async () => {
        let linkGit = `https://api.github.com/users/${document.querySelector('#inputLink').value}`
        // Пример промиса
        let promise = new Promise(function(resolve, reject) {

            setTimeout(() => resolve("done"), 1000);
        });
        promise.finally(() => console.log('Промис завершен'))
        promise.catch(err => console.log(err))
        promise.then(result => console.log(result))

        // Задание

        await fetch(linkGit+'/repos')
            .then(response => response.json())
            .then(commits => {
                let str = 'Репозитории - '
                commits?.map((commit)=> str+= `${commit.name} `);
                textSpan.innerHTML = str;
            })
            .catch(error => textSpan.innerHTML = error.message)

        // Играюсь с примером:
        await fetch(linkGit)
            .then(response => response.json())
            // Показываем аватар (githubUser.avatar_url) в течение 2 секунд (возможно, с анимацией)
            .then(githubUser => {
                let img = document.createElement('img');
                img.src = githubUser.avatar_url;
                img.className = "promise-avatar-example";
                document.querySelector('#resultClick').append(img);
                setTimeout(() => img.remove(), 2000); // (*)
            })
    }

    //  2) с использованием async/await
    document.querySelector('#clickAsync').onclick = () => {

        // Задание
        (async () => {
            let linkGit = `https://api.github.com/users/${document.querySelector('#inputLink').value}`
            let url = linkGit +'/repos';

            let response = await fetch(url);// завершается с заголовками ответа
            try {
                let commits = await response.json(); // читать тело ответа в формате JSON
                textSpan.innerHTML = commits[0].owner.login;
            } catch (err) {
                textSpan.innerHTML = `Ошибка HTTP: ${err.status}`
            }
        })()

        // Играюсь с примером
        async function showAvatar() {
            let linkGit = `https://api.github.com/users/${document.querySelector('#inputLink').value}`
            let githubResponse = await fetch(linkGit);

            let githubUser = await githubResponse.json();
            let img = document.createElement('img');
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.querySelector('#resultClick').append(img);
            await new Promise((resolve, reject) => setTimeout(resolve, 3000));
            img.remove();

            return githubUser;
        }
        showAvatar();
    }
    //Глобальный обработчик
    window.addEventListener('unhandledrejection', function(event) {
        // объект события имеет два специальных свойства:
        alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
        alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
    });

}, false);

// Итерация 8.
// Работа с инфраструктурой для создания React-приложения.
//
// Цель итерации:
// обучиться созданию standalone React-приложения, его настройке и развертыванию.
//
// Текущее задание:
// Установить NodeJS

// Создать с помощью CRA (Create React App) приложение на React
// Create React App - это официально поддерживаемый способ создания одностраничных приложений React

// Перенести текущий код внутрь, оставив статичными файлами (чтобы можно было поднять приложение и достучаться до вашей предыдущей страницы по URL)
// (!!!) ВНИМАНИЕ! ПЕРЕПИСЫВАТЬ НА REACT БУДЕТ НЕОБХОДИМО В СЛЕДУЮЩЕЙ ИТЕРАЦИИ! (!!!)
// Настроить сборку приложения по одному скрипту
//
// Полезные ссылки:
// https://create-react-app.dev/
//
// Полученные знания:
// - Node Package manager (установка пакетов, скрипты)
// - Yarn (альтернатива NPM для установки пакетов)
// - Create-React-App (создание приложения, параметры создания, параметры запуска)
// - интеграция готовых файлов в структуру приложения
// - Webpack (настройка сборки, скрипты запуска, добавление обработчиков)