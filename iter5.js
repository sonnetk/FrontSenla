
document.addEventListener('DOMContentLoaded', function () {
    let books = document.querySelector('#clickBooks')

// 1. Arrow function
// 2. Default parameter
// 3. Spread/Rest operator

// вывод в консоль различных результатов по нажатию на изображение книг

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


}, false);