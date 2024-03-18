// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let userFormSection = document.querySelector('.user-form')
let name = document.querySelector('#name')
let surname = document.querySelector('#surname')
let age = document.querySelector('#age')
let button = document.querySelector('.create-user')

let userBlock = document.createElement('div');
userFormSection.append(userBlock);
button.addEventListener('click', function (e) {
    e.preventDefault()
    let user = document.createElement('div');
    user.classList.add('user-block');
    user.innerHTML = `
        <p>Name of User: ${name.value}</p>
        <p>Surname: ${surname.value}</p>
        <p>Age: ${age.value}</p>
    `
    userBlock.appendChild(user);
})

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let span = document.querySelector('.number')
let storage = JSON.parse(localStorage.getItem('number')) || 0;
span.innerHTML = `${storage}`
storage = storage + 1;
localStorage.setItem('number', JSON.stringify(storage))


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let data = new Date()
let month = data.getMonth();
let nameMonth = ''
switch (month) {
    case 0: nameMonth="January"; break;
    case 1: nameMonth="February"; break;
    case 2: nameMonth="March"; break;
    case 3: nameMonth="April"; break;
    case 4: nameMonth="May"; break;
    case 5: nameMonth="June"; break;
    case 6: nameMonth="July"; break;
    case 7: nameMonth="August"; break;
    case 8: nameMonth="September"; break;
    case 9: nameMonth="October"; break;
    case 10: nameMonth="November"; break;
    case 11: nameMonth="December"; break;
}
let currentData = `${data.getDate()} ${nameMonth} ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`

let timeStorage = JSON.parse(localStorage.getItem('time-session')) || [];
timeStorage.push(currentData)
localStorage.setItem('time-session', JSON.stringify(timeStorage));

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let objectsBlock = document.querySelector('.object-block')
let arrayUser = [
    {name: 'Anton', age: 27},
    {name: 'Anton', age: 28},
    {name: 'Anton', age: 29},
    {name: 'Anton', age: 30},
    {name: 'Anton', age: 31},
    {name: 'Anton', age: 32},
    {name: 'Anton', age: 33},
    {name: 'Anton', age: 34},
    {name: 'Anton', age: 35},
    {name: 'Anton', age: 36},
    {name: 'Kolya', age: 27},
    {name: 'Kolya', age: 28},
    {name: 'Kolya', age: 29},
    {name: 'Kolya', age: 30},
    {name: 'Kolya', age: 31},
    {name: 'Kolya', age: 32},
    {name: 'Kolya', age: 33},
    {name: 'Kolya', age: 34},
    {name: 'Kolya', age: 35},
    {name: 'Kolya', age: 36},
    {name: 'Egor', age: 27},
    {name: 'Egor', age: 28},
    {name: 'Egor', age: 29},
    {name: 'Egor', age: 30},
    {name: 'Egor', age: 31},
    {name: 'Egor', age: 32},
    {name: 'Egor', age: 33},
    {name: 'Egor', age: 34},
    {name: 'Egor', age: 35},
    {name: 'Egor', age: 36},
    {name: 'Vasya', age: 27},
    {name: 'Vasya', age: 28},
    {name: 'Vasya', age: 29},
    {name: 'Vasya', age: 30},
    {name: 'Vasya', age: 31},
    {name: 'Vasya', age: 32},
    {name: 'Vasya', age: 33},
    {name: 'Vasya', age: 34},
    {name: 'Vasya', age: 35},
    {name: 'Vasya', age: 36},
    {name: 'Bogdan', age: 27},
    {name: 'Bogdan', age: 28},
    {name: 'Bogdan', age: 29},
    {name: 'Bogdan', age: 30},
    {name: 'Bogdan', age: 31},
    {name: 'Bogdan', age: 32},
    {name: 'Bogdan', age: 33},
    {name: 'Bogdan', age: 34},
    {name: 'Bogdan', age: 35},
    {name: 'Bogdan', age: 36},
    {name: 'Vova', age: 27},
    {name: 'Vova', age: 28},
    {name: 'Vova', age: 29},
    {name: 'Vova', age: 30},
    {name: 'Vova', age: 31},
    {name: 'Vova', age: 32},
    {name: 'Vova', age: 33},
    {name: 'Vova', age: 34},
    {name: 'Vova', age: 35},
    {name: 'Vova', age: 36},
    {name: 'Dima', age: 27},
    {name: 'Dima', age: 28},
    {name: 'Dima', age: 29},
    {name: 'Dima', age: 30},
    {name: 'Dima', age: 31},
    {name: 'Dima', age: 32},
    {name: 'Dima', age: 33},
    {name: 'Dima', age: 34},
    {name: 'Dima', age: 35},
    {name: 'Dima', age: 36},
    {name: 'Ilya', age: 27},
    {name: 'Ilya', age: 28},
    {name: 'Ilya', age: 29},
    {name: 'Ilya', age: 30},
    {name: 'Ilya', age: 31},
    {name: 'Ilya', age: 32},
    {name: 'Ilya', age: 33},
    {name: 'Ilya', age: 34},
    {name: 'Ilya', age: 35},
    {name: 'Ilya', age: 36},
    {name: 'Slava', age: 27},
    {name: 'Slava', age: 28},
    {name: 'Slava', age: 29},
    {name: 'Slava', age: 30},
    {name: 'Slava', age: 31},
    {name: 'Slava', age: 32},
    {name: 'Slava', age: 33},
    {name: 'Slava', age: 34},
    {name: 'Slava', age: 35},
    {name: 'Slava', age: 36},
    {name: 'Kiril', age: 27},
    {name: 'Kiril', age: 28},
    {name: 'Kiril', age: 29},
    {name: 'Kiril', age: 30},
    {name: 'Kiril', age: 31},
    {name: 'Kiril', age: 32},
    {name: 'Kiril', age: 33},
    {name: 'Kiril', age: 34},
    {name: 'Kiril', age: 35},
    {name: 'Kiril', age: 36},
]
let currentIndex = 0;
function createObjectsBlock() {
    for (let i = currentIndex; i < currentIndex + 10; i++) {
        let obj = document.createElement('div')
        obj.classList.add('object');
        obj.innerHTML = `
        <p>Name of User: ${arrayUser[i].name}</p>
        <p>Age: ${arrayUser[i].age}</p>
    `
        objectsBlock.appendChild(obj);
    }
}

createObjectsBlock()


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    objectsBlock.innerHTML = '';
    currentIndex += 10;

    if (currentIndex === arrayUser.length) {
        currentIndex = 0;
    }

    createObjectsBlock()
})

prev.addEventListener('click', function () {
    objectsBlock.innerHTML = '';
    currentIndex -= 10;

    if (currentIndex < 0) {
        currentIndex = arrayUser.length - 10;
    }

    createObjectsBlock()
})

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let elem = document.getElementById('text')
let hideButton = document.querySelector('.hide-button ')
hideButton.addEventListener('click', function () {
    elem.classList.toggle('hidden')
})

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.forms['check-age']

form.onsubmit = function (e) {
    e.preventDefault();

    if (this.age.value >= 18) {
        alert('Все добре, вам є 18')
    } else if (this.age.value < 18 && this.age.value >=0) {
        alert('Вам ще немає 18 років, доступ заборонено')
    } else {
        alert('Ви ввели некоректні дані')
    }
}

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

let tableBlock = document.querySelector('.table-block')
let formTable = document.forms['table'];
let row = formTable.rows;
let column = formTable.columns;
let content = formTable.content;

formTable.onsubmit = function (e) {
    e.preventDefault();
    tableBlock.innerHTML = '';
    for (let i = 0; i < row.value; i++) {
        let itemRow = document.createElement('tr')
        for (let j = 0; j < column.value; j++) {
            let itemColumn = document.createElement('td')
            itemColumn.innerText = `${content.value}`
            itemRow.appendChild(itemColumn)
        }

        tableBlock.appendChild(itemRow);
    }
}








