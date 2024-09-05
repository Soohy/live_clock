function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const time=hours>12?"PM":"AM";
    hours=hours%12 || 12;
    const timeString = `${hours}:${minutes}:${seconds}`;
    clock.innerHTML = timeString;
}
updateClock();

setInterval(updateClock, 1000);