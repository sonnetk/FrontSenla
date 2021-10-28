
document.addEventListener('DOMContentLoaded', function () {
    // ИТЕРАЦИЯ 7

    //  ЗАДАНИЕ
    //  Отправить запросы на получение репозиториев любого пользователя
    //  github.com с последующим выведением данных на страницу
    //  Предусмотреть возможность обработки ошибки (в обоих случаях)

    window.addEventListener('unhandledrejection', function(event) {
        // объект события имеет два специальных свойства:
        alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
        alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
    });

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
        let linkUser = document.querySelector('#inputLink'),
            linkGit = `https://api.github.com/users/${linkUser.value}`

        fetch(linkGit+'/repos')
            .then(response => response.json())
            .then(commits => textSpan.innerHTML = 'Владелец - '+ commits[0].owner.login)
            .catch(error => textSpan.innerHTML = error.message)

        // Играюсь с примером:
        fetch(linkGit)
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
        (async () => {
            let url = linkGit+'/repos';
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