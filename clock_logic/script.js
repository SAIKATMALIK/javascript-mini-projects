let hour = document.querySelector('.hour');
let date = new Date();
let clock_container = document.querySelector('.clock-container');

setInterval(function updateTime() {
    let date = new Date();
    clock_container.innerHTML = date.toLocaleTimeString();
    clock_container.style.fontSize = "2rem";
}, 1000);


