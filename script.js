const stopwatch = document.querySelector('.stopwatch');
const stopwatchHours = stopwatch.querySelector('.stopwatch-hours')
const stopwatchMinutes = stopwatch.querySelector('.stopwatch-minutes')
const stopwatchSeconds = stopwatch.querySelector('.stopwatch-seconds')
const playBtn = stopwatch.querySelector('.stopwatch-play');
const pauseBtn = stopwatch.querySelector('.stopwatch-pause');
const resetBtn = stopwatch.querySelector('.stopwatch-reset');

let time = 0;
let pause = true;

const timer = setInterval(() => {
    if(pause) return;
    else{
        time += 1;
        render();
    }
}, 1000)

const getDate = date => {
    const data = new Date(date*1000);
    const hours = Math.floor(data / 3600 / 1000);
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    return {
        hours,
        minutes,
        seconds
    }
}

const render = () => {
    let {hours, minutes, seconds} = getDate(time);
    stopwatchHours.textContent = hours < 10 ? `0${hours}` : hours;
    stopwatchMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
    stopwatchSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

playBtn.addEventListener('click', e => {
    pause = false;
})
pauseBtn.addEventListener('click', e => {
    pause = true;
})
resetBtn.addEventListener('click', e => {
    pause = true;
    time = 0;
    render();
})

