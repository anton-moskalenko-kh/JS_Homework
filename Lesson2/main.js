// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr = [5, 'test', true, false, undefined, null, {name: 'Anton', age: 27}, ['lion', 'tiger', 'puma'], 10, 'array']
console.log(arr);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let obj1 = {
    title: 'Steve Jobs',
    pageCount: 150,
    genre: 'biography'
}

let obj2 = {
    title: 'Robinson Cruzo',
    pageCount: 350,
    genre: 'adventure'
}

let obj3 = {
    title: '1984',
    pageCount: 250,
    genre: 'science fiction'
}

console.log(obj1, obj2, obj3)

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'Lord of Rings',
    pageCount: 500,
    genre: 'fantasy',
    authors: [{name: 'John Tolkien', age: 85}]
}

let book2 = {
    title: 'Harry Potter',
    pageCount: 400,
    genre: 'fantasy',
    authors: [{name: 'Joanne Rowling', age: 58}]
}

let book3 = {
    title: 'Graf Monte Kristo',
    pageCount: 700,
    genre: 'adventure',
    authors: [{name: 'Aleksandr Duma', age: 68}]
}

console.log(book1, book2, book3)

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrayUser = [
    {
        name: 'Vasya',
        username: 'strikescholar',
        password: 'a11Black$'
    },
    {
        name: 'Petya',
        username: 'strikingdainty',
        password: '$m3llycat'
    },
    {
        name: 'Ivan',
        username: 'dopeybonk',
        password: '!ush3r'
    },
    {
        name: 'Roman',
        username: 'closerfaulty',
        password: '&ebay.44'
    },
    {
        name: 'Anton',
        username: 'recallrelax',
        password: 'd3ltagamm@'
    },
    {
        name: 'Max',
        username: 'bornbark',
        password: '1Ki77y'
    },
    {
        name: 'Vlad',
        username: 'ponieretort',
        password: '.Susan53'
    },
    {
        name: 'Egor',
        username: 'darkcofferdam',
        password: '!Lov3MyPiano'
    },
    {
        name: 'Andrey',
        username: 'rugbyvisio',
        password: 'SterlingGmail20.15'
    },
    {
        name: 'Denis',
        username: 'whyclunk',
        password: 'BankLogin!3'
    },
]

console.log(arrayUser[0].password)
console.log(arrayUser[1].password)
console.log(arrayUser[2].password)
console.log(arrayUser[3].password)
console.log(arrayUser[4].password)
console.log(arrayUser[5].password)
console.log(arrayUser[6].password)
console.log(arrayUser[7].password)
console.log(arrayUser[8].password)
console.log(arrayUser[9].password)

// - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1;

if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = 31;

if (time >= 0 && time <=15) {
    console.log('Перша чверть години')
} else if (time > 15 && time <=30) {
    console.log('Друга чверть години')
} else if (time > 30 && time <=45) {
    console.log('Третя чверть години')
} else if (time > 45 && time <=60) {
    console.log('Четверта чверть години')
}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 21;

if (day >= 1 && day <=10) {
    console.log('Перша декада')
} else if (day > 10 && day <=20) {
    console.log('Друга декада')
} else if (day > 20 && day <=31) {
    console.log('Третя декада')
}

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

/*let plan = +prompt('Enter the number of weekday')

switch (plan) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('you did not enter the number of weekday')
}*/

// Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.

let num1 = -3;
let num2 = 7;

if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1){
    console.log(num2)
} else {
    console.log('Number is equal')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = 0;

if (!x) {
    x = 'default'
    console.log(x)
} else {
    console.log(x)
}
/*if (x === false || x === undefined || x === null || x === 0 || x === '') {
    x = 'default'
    console.log(x)
} else {
    console.log(x)
}*/

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Cупер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Cупер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Cупер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Cупер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Cупер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Cупер');
}