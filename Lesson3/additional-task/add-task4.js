// 1. Створити пустий масив та :
let arr = [];
// a. заповнити його 50 парними числами за допомоги циклу.


for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    }
}

// b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}

//  c.Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 100))
}

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732

for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * (732 - 8 + 1) + 8))
}

//Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr.length; i = i+3) {
    console.log(arr[i])
}

// Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arr.length; i = i+3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}

// Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = [];
for (let i = 0; i < arr.length; i = i+3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
        newArr.push(arr[i]);
    }
}

console.log(newArr)

// Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i-1])
    }
}

// Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let middle = 0;
let sum = 0;
let sumArray = [100,250,50,168,120,345,188];

for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
    middle = sum / sumArray.length;
}
console.log(middle);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomArr = [];

for (let number of sumArray) {
    randomArr.push(number * 5);
}

console.log(randomArr);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let testArr = [true, false, 1,2,3,'test', 'example', 'hello', 4, true]
let numArray = [];

for (let testElement of testArr) {
    if (typeof testElement === 'number') {
        numArray.push(testElement);
    }
}

console.log(numArray)

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let user of usersWithId) {
    usersWithCities.push(user)
    for (let city of citiesWithId) {
        if (city.user_id === user.id) {
            user.address = {
                user_id: city.user_id,
                country: city.country,
                city: city.city
            }
        }
    }
}

console.log(usersWithCities)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let stringArr = [ 'a', 'b', 'c'];
let word1 = '';

for (let i = 0; i < stringArr.length; i++) {
    word1 += stringArr[i];
}

console.log(word1);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let word2 = ''
let i = 0;

while (i < stringArr.length) {
    word2 += stringArr[i];
    i++;
}
console.log(word2)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word3 = '';

for (let letter of stringArr) {
    word3 += letter
}

console.log(word3);








