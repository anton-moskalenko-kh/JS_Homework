// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arr = [
    new User(5, 'Petya', "Pupkin", 'test@gmail.com', '050-333-32-56'),
    new User(2, 'Kolya', "Berest", 'test@gmail.com', '050-555-22-06'),
    new User(1, 'Max', "Ivashenko", 'test@gmail.com', '066-389-55-90'),
    new User(4, 'Vasya', "Tymoshenko", 'test@gmail.com', '099-234-65-23'),
    new User(3, 'Kirill', "Klimenko", 'test@gmail.com', '067-783-12-90'),
    new User(6, 'Egor', "Maximenko", 'test@gmail.com', '096-345-53-12'),
    new User(8, 'Artem', "Popov", 'test@gmail.com', '050-543-90-56'),
    new User(9, 'Anton', "Veselov", 'test@gmail.com', '099-512-85-31'),
    new User(10, 'Bogdan', "Kotov", 'test@gmail.com', '096-345-56-78'),
    new User(7, 'Ivan', "Grishenko", 'test@gmail.com', '050-777-77-77')
]

console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = arr.filter((user) => user.id % 2 === 0);
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
arr.sort((a, b) => {
    if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }

    return 0;
})

console.log(arr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArr = [
    new Client(5, 'Petya', "Pupkin", 'test@gmail.com', '050-333-32-56', ['meat', 'eggs']),
    new Client(2, 'Kolya', "Berest", 'test@gmail.com', '050-555-22-06', ['milk', 'butter', 'cola']),
    new Client(1, 'Max', "Ivashenko", 'test@gmail.com', '066-389-55-90', ['orange', 'apple', 'banana', 'pineapple']),
    new Client(4, 'Vasya', "Tymoshenko", 'test@gmail.com', '099-234-65-23', ['tomato']),
    new Client(3, 'Kirill', "Klimenko", 'test@gmail.com', '067-783-12-90', ['bread', 'butter']),
    new Client(6, 'Egor', "Maximenko", 'test@gmail.com', '096-345-53-12', ['chips']),
    new Client(8, 'Artem', "Popov", 'test@gmail.com', '050-543-90-56', ['fish', 'meat', 'beer']),
    new Client(9, 'Anton', "Veselov", 'test@gmail.com', '099-512-85-31', ['mushrooms', 'oil']),
    new Client(10, 'Bogdan', "Kotov", 'test@gmail.com', '096-345-56-78', ['tea', 'coffee', 'sugar']),
    new Client(7, 'Ivan', "Grishenko", 'test@gmail.com', '050-777-77-77', ['vodka'])
];

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clientArr.sort((a, b) => {
    if (a.order.length > b.order.length) {
        return 1;
    }
    if (a.order.length < b.order.length) {
        return -1;
    }

    return 0;
})

console.log(clientArr);

/*Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.driver = {};

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`)
    }

    this.info = function () {
        console.log(`
        Model - ${this.model}
        Manufacturer - ${this.manufacturer}
        Year - ${this.year}
        Max speed - ${this.maxSpeed} km
        Engine capacity - ${this.engine}l
        `)
    }

    this.increaseMaxSpeed = function (newValue) {
        this.maxSpeed = this.maxSpeed + newValue;
    }

    this.changeYear = function (newValue) {
        this.year = newValue
    }

    this.addDriver = function (driver) {
        for (let key in driver) {
            this.driver[key] = driver[key]
        }
    }
}

let car = new Car('CX5', 'Mazda', 2020, 240, 2.2)
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2023);
car.addDriver({name: 'vasya', age: 30})

console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class classCar {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.driver = {};
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`)
    }

    info() {
        console.log(`
        Model - ${this.model}
        Manufacturer - ${this.manufacturer}
        Year - ${this.year}
        Max speed - ${this.maxSpeed} km
        Engine capacity - ${this.engine}l
        `)
    }

    increaseMaxSpeed(newValue) {
        this.maxSpeed = this.maxSpeed + newValue;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        for (let key in driver) {
            this.driver[key] = driver[key]
        }
    }
}

let newCar = new classCar('Q7', 'Audi', 2018, 250, 3.0);

newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(30);
newCar.changeYear(2024);
newCar.addDriver({name: 'Anton', age: 27})

console.log(newCar)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    }
}

let arrCinderellas = [
    new Cinderella('Katya', 27, 34),
    new Cinderella('Polina', 35, 35),
    new Cinderella('Nastya', 20, 36),
    new Cinderella('Sasha', 18, 37),
    new Cinderella('Olya', 22, 38),
    new Cinderella('Alyona', 30, 39),
    new Cinderella('Ksusha', 27, 40),
    new Cinderella('Lera', 29, 41),
    new Cinderella('Natasha', 22, 42),
    new Cinderella('Tanya', 20, 43),
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, foundSizeOfShoe) {
        this.name = name;
        this.age = age;
        this.foundSizeOfShoe = foundSizeOfShoe;
    }
}

let firstPrince = new Prince('Vova', 25, 38)

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function findCinderellaForPrince(prince, arrCinderellas) {
    for (const cinderella of arrCinderellas) {
        if (cinderella.footSize === prince.foundSizeOfShoe) {
            return cinderella
        }
    }
}

console.log(findCinderellaForPrince(firstPrince, arrCinderellas));

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let foundCinderella = arrCinderellas.find((cinderella) => cinderella.footSize === firstPrince.foundSizeOfShoe)
console.log(foundCinderella);




