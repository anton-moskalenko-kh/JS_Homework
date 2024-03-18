let sessions = document.querySelector('.sessions')

let timeSession = JSON.parse(localStorage.getItem('time-session'));

for (let i = 0; i < timeSession.length; i++) {
    let sessionBlock = document.createElement('div')
    sessionBlock.classList.add('session-block')
    sessionBlock.innerHTML = `
        <p>Sesion number: ${i+1}</p>
        <p>Time Session: ${timeSession[i]}</p>
    `
    sessions.appendChild(sessionBlock)

}