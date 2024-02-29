// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculateAreaOfRectangle(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error, please enter the number"
    } else {
        return a * b;
    }
}

let s = calculateAreaOfRectangle(5, 8)
console.log(s)

// створити функцію яка обчислює та повертає площу кола з радіусом r
function calculateAreaOfRound(radius) {
    if (typeof radius !== 'number') {
        return "Error, please enter numbers in parameters"
    } else {
        return `The area of round is ${Math.floor(Math.PI * radius ** 2)} cm2`
    }
}

let areaOfRound = calculateAreaOfRound(8);
console.log(areaOfRound);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calculateAreaOfCylinder(h, radius) {
    if (typeof radius !== 'number' || typeof h !== 'number') {
        return "Error, please enter numbers in parameters"
    } else {
        return `The area of Cylinder is ${Math.floor(2 * Math.PI * radius * (h + radius))} m2`
    }
}

let areaOfCylinder = calculateAreaOfCylinder(6, 10)
console.log(areaOfCylinder)

// - створити функцію яка приймає масив та виводить кожен його елемент

function logArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
logArray(listOfItems);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    document.write(`<p>${text}</p>`)
}

let randomText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, expedita.'
createParagraph(randomText);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(listText) {
    document.write('<ul>');

    document.write(`
        <li>${listText}</li>
        <li>${listText}</li>
        <li>${listText}</li>
    `)

    document.write('</ul>');
}

createList('Lorem ipsum dolor sit amet')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createRandomList(listText, numberOfList) {
    document.write('<ul>');

    if (typeof numberOfList === 'number') {
        for (let i = 1; i <= numberOfList; i++) {
            document.write(`<li>${listText}</li>`)
        }
    } else {
        console.log('Error, incorrect data type in parameters, please specify a number')
    }

    document.write('</ul>');
}

createRandomList('Hello world', 5);

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createListOfElementFromArray(array) {
    document.write('<ul>');

    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }

    document.write('</ul>');
}

let arr = [true, false, 1,2,3,'test', 'example', 'hello', 4, true];
createListOfElementFromArray(arr);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function createUser(array) {
    for (const arrayElement of array) {
        document.write(`
        <div>
            <h4>ID: ${arrayElement.id}</h4>
            <p>Name: ${arrayElement.name}</p>
            <p>Age: ${arrayElement.age}</p>
        </div>
    `)
    }
}

let usersWithId = [
    {id: 1, name: 'Vasya', age: 31},
    {id: 2, name: 'Petya', age: 30},
    {id: 3, name: 'Kolya', age: 29},
    {id: 4, name: 'Olya', age: 28}
];

createUser(usersWithId);

// створити функцію яка повертає найменьше число з масиву

function minNumber(array) {
    let num = array[0];
    for (const arrayElement of array) {
        if (arrayElement < num) {
            num = arrayElement;
        }
    }
    return num;
}

let array = [17,13,6,22,31,45,66,100];
let minNum = minNumber(array);
console.log(minNum);

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;

    for (const arrElement of arr) {
        sum += arrElement;
    }

    return sum;
}

let numArr = [17,13,6,22,31,45,66,100];
let sumResult = sum(numArr);
console.log(sumResult);

// створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(array, index1, index2) {
    let num1 = array[index1]
    let num2 = array[index2]

    for (let i = 0; i < array.length; i++) {
        if (i === index1) {
            array[i] = num2
        }
        if (i === index2){
            array[i] = num1;
        }
    }
}

let testArr = [11,22,33,44];
swap(testArr, 0, 1)
console.log(testArr)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let sumAfterExchange = 0;

    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            sumAfterExchange = Math.floor(sumUAH / currency.value);
        }
    }

    return `${sumAfterExchange} ${exchangeCurrency}`;
}

let currencies = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
];

let result = exchange(10000, currencies, 'USD')
console.log(result);


