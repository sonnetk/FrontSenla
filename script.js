'use strict'

document.addEventListener('DOMContentLoaded', function () {

    // браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены.
    let divOne = document.querySelector('.div1'),
        divTwo = document.querySelector('.div2'),
        divThree = document.querySelector('.div3')

    console.log(divOne.getAttribute('class'))
    divOne.classList.add('class')
    console.log(divOne.className)
    divOne.className = 'class'
    console.log(divOne.className)
    divOne.classList.toggle('class')
    console.log(divOne.className)
    divOne.classList.toggle('class')
    console.log(divOne.className, divOne.classList.contains('class'))

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

    //Из файла html
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


}, false);