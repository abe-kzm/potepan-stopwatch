
const timeElement = document.getElementById('time')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let elapsed = 0;

let intervalId = null;

function updateTime() {
    const millisecond = elapsed % 1000;
    const seconds = Math.floor(elapsed / 1000) % 60;
    const minutes = Math.floor(elapsed / (1000*60)) % 60;
    const hour = Math.floor(elapsed / (1000*60*60));
    
    const msStr = millisecond.toString().padStart(3, '0');
    const secondsStr = seconds.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const hourStr = hour.toString().padStart(2, '0');
    
    timeElement.innerHTML = `${hourStr}:${minutesStr}:${secondsStr}.${msStr}`;
}

start.addEventListener('click', function(e) {
    if(intervalId !== null) { return; }
    let pre = new Date();
    intervalId = setInterval(function() {
        const now = new Date();
        elapsed += now - pre;
        pre = now;
        updateTime();
    }, 10);
});

stop.addEventListener('click', function(e) {
   clearInterval(intervalId);
   intervalId = null;
});

reset.addEventListener('click', function(e) {
   elapsed = 0; 
   updateTime();
});

