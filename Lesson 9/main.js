// створити блок,
let block = document.createElement('div');
block.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda earum eveniet laudantium nam odit sed. A deserunt est iure nobis?</p>';

// додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.backgroundColor = 'silver';
block.style.width = '400px';
block.style.fontSize = '20px';
block.style.color = 'green';
block.style.padding = '10px';
block.style.marginBottom = '10px';


//додати цей блок в body.
document.body.append(block);

//клонувати його повністю, та додати клон в body.
let block2 = block.cloneNode(true);
block.after(block2);

//- Є масив: ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let array = ['Main','Products','About us','Contacts'];
let list = document.createElement('ul')
document.body.append(list)
for (const listElement of array) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${listElement}`
    list.append(listItem)
}

//- Є масив
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration. Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    let courseBlock = document.createElement('div')
    courseBlock.classList.add('course-block');
    courseBlock.insertAdjacentHTML('beforeend', `
        <p>Title: ${course.title}</p>
        <p>Course duration: ${course.monthDuration}</p>
    `)
    document.body.append(courseBlock);
}


// Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let courseBlock = document.createElement('div')
    courseBlock.classList.add('item');
    courseBlock.innerHTML = `
        <h1 class="heading">${course.title}</h1>
        <p class="description">Course duration: ${course.monthDuration}</p>
    `
    document.body.append(courseBlock);
}

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

let simpsonFamily = document.createElement('div')
simpsonFamily.classList.add('simsons-block')
document.body.append(simpsonFamily)

for (const member of simpsons) {
    let memberBlock = document.createElement('div')
    memberBlock.classList.add('member-block');
    memberBlock.insertAdjacentHTML('beforeend', `
        <div class='member'>
            <div class="member-info">
                <span>${member.name}</span>
                <span>${member.surname}</span>
                <p>Age: ${member.age}</p>
                <p>${member.info}</p>
            </div>
            <div class="member-image">
                <img src="${member.photo}" alt="Member photo">
            </div>
        </div>\`
    `)

    simpsonFamily.append(memberBlock);
}

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами

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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let coursesSection = document.createElement('div');
coursesSection.classList.add('coursesSection');
document.body.append(coursesSection);

for (const coursesArrayElement of coursesArray) {
    let course = document.createElement('div')
    course.classList.add('course');

    course.innerHTML = `
        <h3>${coursesArrayElement.title}</h3>
        <div>
            <span>Month Duration: ${coursesArrayElement.monthDuration}</span>
            <span>Hour Duration: ${coursesArrayElement.hourDuration}</span>
        </div>
    `
    let moduleList = document.createElement('ul')
    course.append(moduleList)

    for (const module of coursesArrayElement.modules) {
        let list = document.createElement('li')
        list.innerHTML = `${module}`
        moduleList.append(list)
    }

    coursesSection.append(course)
}