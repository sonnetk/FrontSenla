
document.addEventListener('DOMContentLoaded', function () {
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
// Создать с помощью CRA приложение на React
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