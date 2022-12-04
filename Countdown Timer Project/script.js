'use strict';

const newYearEve = new Date().getFullYear() + 1;
const newYear = "1 Jan " + newYearEve;

function countDown() {
    const newYearDate = new Date(newYear);
    const curentDate = new Date();
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minute");
    const secondEl = document.getElementById("second");
    const daysEl = document.getElementById("days");

    const diffDate = new Date(newYearDate - curentDate);

    const day = Math.floor(diffDate / 1000 / 60 / 60 / 24);
    const hour = Math.floor((diffDate / 1000 / 60 / 60) % 24);
    const minute = Math.floor((diffDate / 1000 / 60) % 60);
    const second = Math.floor((diffDate / 1000) % 60);

    daysEl.textContent = formateTime(day);
    hourEl.textContent = formateTime(hour);
    minuteEl.textContent = formateTime(minute);
    secondEl.textContent = formateTime(second);
}

const formateTime = (t) => t > 9 ? t : "0" + t;

setInterval(countDown, 1000);
