import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { convertMs, timer } from "./timer_functions";


const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    countDate: document.querySelectorAll('.field .value'),//можливо буде легше зробити через масив
    startBtn: document.querySelector('button'),
    day: document.querySelector('.value [data-days]'),
    hours: document.querySelector('.value [data-hours]'),
    minutes: document.querySelector('.value [data-minutes]'),
    seconds: document.querySelector('.value [data-seconds]'),
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


