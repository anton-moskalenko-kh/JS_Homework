let userInformationBlock = document.querySelector('.user-information');

let userURL = new URL(location.href).searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${userURL}`)
.then(res => res.json())
.then(user => {
    let userInfo = document.createElement('div')
    userInfo.classList.add('user')
    userInformationBlock.appendChild(userInfo);

    userInfo.innerHTML = `
        <h3>ID: ${user.id} ${user.name}</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
        <h3>Address:</h3>
    `
    let addressBlock = document.createElement('div')
    addressBlock.classList.add('user-address')
    userInfo.appendChild(addressBlock);

    for (const userInfoKey in user.address) {
        if (userInfoKey === 'geo') {
            let geoBlock = document.createElement('div')
            geoBlock.innerHTML = '<h4>Geo Data:</h4>'
            addressBlock.appendChild(geoBlock);
            for (const geoKey in user.address[userInfoKey]) {
                let p = document.createElement('p')
                p.innerHTML = `${geoKey}: ${user.address[userInfoKey][geoKey]}`
                geoBlock.appendChild(p)
            }
        } else {
            let p = document.createElement('p')
            p.innerHTML = `${userInfoKey} - ${user.address[userInfoKey]}`
            addressBlock.appendChild(p);
        }
    }

    let companyBlock = document.createElement('div')
    companyBlock.classList.add('user-company')
    userInfo.appendChild(companyBlock);

    let titleCompanyBlock = document.createElement('h3')
    titleCompanyBlock.innerText = 'Information about company';
    companyBlock.appendChild(titleCompanyBlock);

    for (const userInfoKey in user.company) {
        let p = document.createElement('p')
        p.innerHTML = `${userInfoKey} - ${user.company[userInfoKey]}`
        companyBlock.appendChild(p);
    }

})
