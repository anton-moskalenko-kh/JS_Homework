// Знайти та вивести довижину наступних стрінгових значень

let word1 = 'hello world';
let word2 = 'lorem ipsum';
let word3 = 'javascript is cool';

console.log(word1.length);
console.log(word2.length);
console.log(word3.length);

// Перевести до великого регістру наступні стрінгові значення

let upperCase1 = 'hello world';
let upperCase2 = 'lorem ipsum';
let upperCase3 = 'javascript is cool';

console.log(upperCase1.toUpperCase());
console.log(upperCase2.toUpperCase());
console.log(upperCase3.toUpperCase());

// Перевести до нижнього регістру настипні стрінгові значення

let lowerCase1 = 'HELLO WORLD';
let lowerCase2 = 'LOREM IPSUM';
let lowerCase3 = 'JAVASCRIPT IS COOL';

console.log(lowerCase1.toLowerCase());
console.log(lowerCase2.toLowerCase());
console.log(lowerCase3.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.

const stringToArray = (str) => str.split(' ');
let testStr = 'Ревуть воли як ясла повні';
let resultArray = stringToArray(testStr);
console.log(resultArray);

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let array = [10,8,-7,55,987,-1011,0,1050,0];

let newArray = array.map((arrElement)=> String(arrElement));
console.log(newArray);

// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

function sortNums(nums, direction) {

    if (direction === 'ascending') {
        nums.sort((a, b) => a - b)
    }

    if (direction === 'descending') {
        nums.sort((a, b) => b - a)
    }

    return nums;
}

let sortArray = sortNums(array, 'descending')
console.log(sortArray);

// - є масив
// відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortObject = coursesAndDurationArray.sort((firstObj, secondObj) => {
    return secondObj.monthDuration - firstObj.monthDuration;
})
console.log(sortObject);

// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterObj = coursesAndDurationArray.filter((item) => {
    return item.monthDuration > 5;
})

console.log(filterObj);

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapArray = coursesAndDurationArray.map((course, index) => {
    return {
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    }
})

console.log(mapArray);

// описати колоду карт (від 6 до туза без джокерів)

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'}
]

// знайти піковий туз
console.log(cards.filter((card) => card.cardSuit === 'spade' && card.value === 'king'));

// всі шістки
console.log(cards.filter((card) => card.value === '6'));

// всі червоні карти
console.log(cards.filter((card) => card.color === 'red'));

// всі буби
console.log(cards.filter((card) => card.cardSuit === 'diamond'));

// всі трефи від 9 та більше
console.log(cards.filter((card) => card.cardSuit === 'clubs' && (card.value > '9' || card.value === '10')));

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce(
    (accumulator, card) => {

        switch (card.cardSuit) {
            case 'spade':
                accumulator.spades.push(card);
                break;
            case 'diamond':
                accumulator.diamonds.push(card);
                break;
            case 'heart':
                accumulator.hearts.push(card);
                break;
            case 'clubs':
                accumulator.clubs.push(card);
        }
        return accumulator;
    },
    {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    }
);

console.log(reduce);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// написати пошук всіх об'єктів, в який в modules є sass

let sass = coursesArray.filter((course) => {
    return course.modules.includes('sass')
});

console.log(sass)

let docker = coursesArray.filter((course) => {
    return course.modules.includes('docker')
});

console.log(docker)