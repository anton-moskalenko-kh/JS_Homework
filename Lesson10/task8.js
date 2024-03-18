// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let currencyBlock = document.querySelector('.currency-block')
let currency = JSON.parse(localStorage.getItem('currency')) || 100;
currencyBlock.innerHTML = `${currency} грн`

let currentTime = new Date().getTime();
let lastReloadTime = localStorage.getItem("lastReloadTime") || currentTime;

let timeDiff = currentTime - lastReloadTime;
if (timeDiff >= 10000) {
    currencyBlock.innerText = `${currency += 10} грн`
    localStorage.setItem('currency', JSON.stringify(currency))
}

localStorage.setItem('lastReloadTime', JSON.stringify(currentTime))

