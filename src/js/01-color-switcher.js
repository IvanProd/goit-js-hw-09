function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector("button[data-start]"),
  btnStop: document.querySelector("button[data-stop]"),
};

refs.body.addEventListener('click', colorChanger);
let timerId = null;
refs.btnStop.setAttribute('disabled', true);


function colorChanger(event) {
  if (event.target === refs.btnStart) {
    refs.btnStart.setAttribute('disabled', true);
    refs.btnStop.removeAttribute('disabled');
    timerId = setInterval(() => {
      refs.body.setAttribute('style', `background-color: ${getRandomHexColor()}`);
    }, 1000);
  } else if (event.target === refs.btnStop) {
    refs.btnStart.removeAttribute('disabled');
    refs.btnStop.setAttribute('disabled', true);
    clearInterval(timerId);
  }
};
//ТРЕБА ПЕРЕОБІТИ НЕ ВІРНО ВИКОНУЄТЬСЯ