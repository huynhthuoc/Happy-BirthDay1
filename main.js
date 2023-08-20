const pElements = document.querySelectorAll('p')

const date = new Date(2023, 08, 23, 24, 2, 60)
const updateTimes = setInterval(displayTimer, 0)
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
