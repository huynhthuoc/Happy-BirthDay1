const pElements = document.querySelectorAll('p')

const date = new Date(2024, 06, 09, 23, 59, 59)
const updateTimes = setInterval(displayTimer, 1000)
function displayTimer() {
    date.setSeconds(date.getSeconds() - 1)
    pElements[0].innerHTML = date.getDay().toString().padStart(2, '0');
    pElements[1].innerHTML = date.getHours().toString().padStart(2, '0');
    pElements[2].innerHTML = date.getMinutes().toString().padStart(2, '0');
    pElements[3].innerHTML = date.getSeconds().toString().padStart(2, '0');
    if (date.getMinutes() === 0 && date.getSeconds() === 0) {
        clearInterval(updateTimes)
    }
}
