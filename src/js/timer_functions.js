import { refs } from "./02-timer";

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};


//console.log(refs)
function updateIntrface(value){
    refs.dayV.textContent = convertMs(value).days;
    refs.hourV.textContent = convertMs(value).hours;
    refs.minutV.textContent = convertMs(value).minutes;
    refs.secondV.textContent = convertMs(value).seconds;
}
const timer = {
    intervalId: null,
    isActive: false,
    timerCountdown(endDate){
        if(this.isActive){
            return;
        }

        this.isActive = true;

        this.intervalId = setInterval(() => {
            const timeDifferent = endDate - Date.now();
            
            updateIntrface(timeDifferent);

            if(timeDifferent < 1000){
                clearInterval(this.intervalId);
            }
            
        }, 1000);
            
    }
};

function addLeadingZero(value){
    return String(value).padStart(2, '0');
};

export {timer, timerCountdown};