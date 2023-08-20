const pElements = document.querySelectorAll('p')
const birthday = new Date(2023, 09, 10, 23, 59, 59)

const updateTimes = setInterval(displayTimer, 2)
function displayTimer() {
    const now = Date.now()
    const distance = birthday - now;
    pElements[0].innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24))
            .toString().padStart(2, '0');
    pElements[1].innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            .toString().padStart(2, '0');
    pElements[2].innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            .toString().padStart(2, '0');
    pElements[3].innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000)
            .toString().padStart(2, '0');
}
