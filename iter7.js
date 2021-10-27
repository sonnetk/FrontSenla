
document.addEventListener('DOMContentLoaded', function () {
    // ИТЕРАЦИЯ 7

    //  ЗАДАНИЕ
    //  Отправить запросы на получение репозиториев любого пользователя
    //  github.com с последующим выведением данных на страницу
    //  Предусмотреть возможность обработки ошибки (в обоих случаях)

    //  1) с использованием Promise
    const textSpan = document.querySelector('#resultClick')

    document.querySelector('#clickPromise').onclick = () => {

        // Пример промиса
        let promise = new Promise(function(resolve, reject) {

            setTimeout(() => resolve("done"), 1000);
            setTimeout(() => reject(new Error("Whoops!")), 1000);
        });
        promise.finally(() => console.log('Промис завершен'))
        promise.catch(err => console.log(err))
        promise.then(result => console.log(result))

        // Задание
        fetch('https://api.github.com/users/sonnetk/repos')
            .then(response => response.json())
            .then(commits => textSpan.innerHTML = 'Владелец - '+ commits[0].owner.login);

        // Играюсь с примером:
        // Запрашиваем user.json
        fetch('/article/promise-chaining/user.json')
            // Загружаем данные в формате json
            .then(response => response.json())
            // Делаем запрос к GitHub
            .then(user => fetch(`https://api.github.com/users/${user.name}`))
            // Загружаем ответ в формате json
            .then(response => response.json())
            // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
            .then(githubUser => {
                let img = document.createElement('img');
                img.src = githubUser.avatar_url;
                img.className = "promise-avatar-example";
                document.body.append(img);

                setTimeout(() => img.remove(), 3000); // (*)
            });
    }

    //  2) с использованием async/await
    document.querySelector('#clickAsync').onclick = () => {
        (async () => {
            let url = 'https://api.github.com/users/sonnetk/repos';
            let response = await fetch(url);
            if (response.ok) {
                let commits = await response.json();
                textSpan.innerHTML = commits[0].owner.login;
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
        })()
    }



// ИЗУЧИТЬ
    // - Типы запросов HTTP (методы + коды ответов)
    // - JS fetch
    // - Promise
    // - async/await
    // - обработка ошибок при отправлении запросов

}, false);