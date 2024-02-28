let array = [2,17,13,6,22,31,45,66,100,-18];

// є масив
// 1. перебрати його циклом while
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// перебрати його циклом for
for (let number of array) {
    console.log(number)
}

// перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 1;
while (j < array.length) {
    console.log(array[j]);
    j = j + 2;
}

// перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 1; j < array.length; j = j + 2) {
    console.log(array[j])
}

//перебрати циклом while та вивести  числа тільки парні  значення
let k = 0;
while (k < array.length) {
    console.log(array[k]);
    k = k + 2;
}

for (let k = 0; k < array.length;k = k + 2) {
    console.log(array[k])
}

// замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten'
    }
    console.log(array)
}


let arrayRevers = [2,17,13,6,22,31,45,66,100,-18];
//вивести масив в зворотньому порядку.
for (let l = arrayRevers.length - 1; l >= 0; l--) {
    console.log(arrayRevers[l])
}

// перебрати його циклом while в зворотньому порядку

let m = arrayRevers.length - 1;
while (m >= 0) {
    console.log(arrayRevers[m]);
    m--;
}

// перебрати циклом while та вивести числа тільки з непарним індексом в зворотньому порядку
let n = arrayRevers.length - 1;
while (n >= 0) {
    if (n % 2 !== 0) {
        console.log(arrayRevers[n])
    }
    n--;
}

// перебрати циклом for та вивести числа тільки з непарним індексом в зворотньому порядку

for (let i = arrayRevers.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arrayRevers[i])
    }
}

// перебрати циклом while та вивести числа тільки з парним індексом в зворотньому порядку
let p = arrayRevers.length - 1;
while (p >= 0) {
    if (p % 2 === 0) {
        console.log(arrayRevers[p])
    }
    p--;
}

// перебрати циклом for та вивести числа тільки з парним індексом в зворотньому порядку

for (let i = arrayRevers.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(arrayRevers[i])
    }
}

// замінити кожне число кратне 3 на слово "okten" в зворотньому порядку

for (let i = arrayRevers.length - 1; i >= 0; i--) {
    if (arrayRevers[i] % 3 === 0) {
        arrayRevers[i] = 'okten'
    }
    console.log(arrayRevers[i])
}

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numArr = [1,2,3,4,5,6,7,8,9,10]
for (let number of numArr) {
    console.log(number)
}

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringArr = ['test1','test2','test3','test4','test5','test6','test7','test8','test9','test10']
for (let string of stringArr) {
    console.log(string)
}

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let randomArr = [undefined, true, 5, 'test', false, 0, [], {}, null, 'hello']
for (let randomOption of randomArr) {
    console.log(randomOption)
}

let testArr = [true, false, 1,2,3,'test', 'example', 'hello', 4, true]

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let testArrElement of testArr) {
    if (typeof testArrElement === 'boolean') {
        console.log(testArrElement)
    }
}

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let testArrElement of testArr) {
    if (typeof testArrElement === 'number') {
        console.log(testArrElement)
    }
}

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let testArrElement of testArr) {
    if (typeof testArrElement === 'string') {
        console.log(testArrElement)
    }
}

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr = [];
arr[0] = 'test';
arr[1] = true;
arr[2] = '5';
arr[3] = 2;
arr[4] = 'hello';
arr[5] = null;
arr[6] = 8;
arr[7] = false;
arr[8] = true;
arr[9] = 'test';

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < arr.length; i++) {
    console.log(i + 1);
    document.write(`<span>${i + 1}</span>`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write('<div></div>')
for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(`<span>${i}</span>`)
}
document.write('<div></div>')

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write('<div></div>')
for (let i = 1; i <= 100; i = i + 2) {
    console.log(i);
    document.write(`<span>${i}</span>`)
}
document.write('<div></div>')

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write('<div></div>')
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<span>${i}</span>`)
    }
}
document.write('<div></div>')

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write('<div></div>')
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`<span>${i}</span>`)
    }
}
document.write('<div></div>')


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let bookArr = [
    {
        title: 'Lord of Rings',
        pageCount: 800,
        genre: ['fantasy', 'historic', ],
        authors: [{name: 'John Tolkien', age: 85}, {name: 'noname', age: 10}]
    },

    {
        title: 'Harry Potter',
        pageCount: 400,
        genre: ['fantasy', 'adventure', 'historic' ],
        authors: [{name: 'Joanne Rowling', age: 58}]
    },

    {
        title: 'Graf Monte Kristo',
        pageCount: 500,
        genre: ['adventure', 'drama', 'drama'],
        authors: [{name: 'Aleksandr Duma', age: 68}, {name: 'belka', age: 5}]
    }
]

//знайти найбільшу книжку.

let numberOfPage = 0;
let theBiggestBook;
for (let bookArrElement of bookArr) {
    if (bookArrElement.pageCount > numberOfPage) {
        numberOfPage = bookArrElement.pageCount;
        theBiggestBook = bookArrElement.title;
    }
}

// console.log(theBiggestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenre = [];
let max = 0;
for (let i = 0; i < bookArr.length; i++) {
    if (bookArr[i].genre.length > max) {
        max = bookArr[i].genre.length;
        maxGenre.length = 0;
        maxGenre.push(bookArr[i].title)
    } else if (bookArr[i].genre.length === max) {
        maxGenre.push(bookArr[i].title)
    }
}
console.log(maxGenre);


//знайти книжку/ки з найдовшою назвою

let maxStringLength = 0;
let theLongestName = [];
for (let book of bookArr) {
    if (book.title.length > maxStringLength) {
        maxStringLength = book.title.length;
        theLongestName.length = 0;
        theLongestName.push(book.title);
    } else if ((book.title.length === maxStringLength)){
        theLongestName.push(book.title);
    }

}
console.log(theLongestName);

// - знайти книжку/ки які писали 2 автори
let twoAuthors = [];
for (let book of bookArr) {
    if (book.authors.length === 2) {
        twoAuthors.push(book.title)
    }
}

console.log(twoAuthors);

// знайти книжку/ки які писав 1 автор
let oneAuthor = [];
for (let book of bookArr) {
    if (book.authors.length === 1) {
        oneAuthor.push(book.title)
    }
}

console.log(oneAuthor);



