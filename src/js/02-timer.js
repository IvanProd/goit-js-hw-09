import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import {timer, } from "./timer_functions";


export const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button'),
    dayV: document.querySelector(' [data-days]'),
    hourV: document.querySelector(' [data-hours]'),
    minutV: document.querySelector(' [data-minutes]'),
    secondV: document.querySelector(' [data-seconds]'),
};

refs.startBtn.setAttribute('disabled', 'disabled');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const date = selectedDates[0].getTime();
        turnOnTimer(date);
    },
};

flatpickr("#datetime-picker", options);

function turnOnTimer(date){
    date
    //console.log('обрана дата за unix системою', date);
    const curentDate = Date.now();
    //console.log('поточна дата за unix системою',curentDate);
    if(date > curentDate){
        refs.startBtn.removeAttribute('disabled');
    }
    else if(curentDate >= date ){
        alert("Please choose a date in the future");
    };

    refs.startBtn.addEventListener('click', ()=> {timer.timerCountdown(date)});
    //timerCountdown(date);
    
};

