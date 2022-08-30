function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};

const timer = {
    timerCountdown(endDate){
    
        const intervalId = setInterval(() => {
            const timeDifferent = endDate - Date.now();
            //console.log('залишок в милісекунда[',timeDifferent);
            console.log(`${convertMs(timeDifferent).days}:${convertMs(timeDifferent).hours}:${convertMs(timeDifferent).minutes}:${convertMs(timeDifferent).seconds}`);
            if(timeDifferent < 1000){
                clearInterval(intervalId);
            }
        }, 1000);
            
    }
};

function pad(value){
    return String(value).padStart(2, '0');
}

 export {convertMs, timerCountdown, timer, pad};   

