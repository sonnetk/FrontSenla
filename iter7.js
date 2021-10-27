
document.addEventListener('DOMContentLoaded', function () {
    // ИТЕРАЦИЯ 7
    //  Отправить запросы на получение репозиториев любого пользователя github.com с последующим выведением данных на страницу:
    //  1) с использованием Promise
    //  2) с использованием async/await
    //  Предусмотреть возможность обработки ошибки (в обоих случаях).
    document.querySelector('#clickAsync').onclick = () => {
        (async () => {
            let url = 'https://api.github.com/users/sonnetk/repos';
            let response = await fetch(url);
            let commits = await response.json(); // читаем ответ в формате JSON
            alert(commits[0].owner.login);
    })()
    }

    document.querySelector('#clickPromise').onclick = () => {
        fetch('https://api.github.com/users/sonnetk/repos')
            .then(response => response.json())
            .then(commits => alert('Владелец - '+ commits[0].owner.login));
    }

// ИЗУЧИТЬ
    // - Типы запросов HTTP
    // - JS fetch
    // - Promise
    // - async/await
    // - обработка ошибок при отправлении запросов

}, false);