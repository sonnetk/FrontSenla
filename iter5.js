
document.addEventListener('DOMContentLoaded', function () {
    let books = document.querySelector('#clickBooks')

//Arrow function
//Default parameter
// Spread/Rest operator


    let arr = ['apple', 'banana', 'orange', 'test'];
    let breakfast = arr.map(fruit => {
        return fruit + 's';
    });
    function oneFunction(...args) {
        console.log(args);
    }

    let variable = (a, b= 100) => a + b;
    books.onclick = () => {
        console.log(variable(5))
        console.log(variable(5, 50))
        oneFunction(1,54,24,1,6,24,6)
        console.log(breakfast)
    }



// ‘super’ keyword


// yield


// деструктуризация объекта


// строковый шаблон


// класс в JS


}, false);