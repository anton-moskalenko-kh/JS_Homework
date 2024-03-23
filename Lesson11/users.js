//- зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

let usersBlock = document.querySelector('.users');
fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(users => {
        for (const user of users) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user-block')
            usersBlock.appendChild(userBlock);

            userBlock.innerHTML = `
                <span>User ID: ${user.id}</span>
                <h3>${user.name}</h3>
            `
            let link = document.createElement('a');
            link.innerText = 'Show all information about user';
            userBlock.appendChild(link);

            link.addEventListener('click', function () {
                location.href = 'user-details.html?id='+user.id;
            })
        }
    });