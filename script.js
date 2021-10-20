'use strict'

document.addEventListener('DOMContentLoaded', function () {
// браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены.

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

}, false);