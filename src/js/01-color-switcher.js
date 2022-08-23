function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
};

refs.body.addEventListener('click', colorChanger);

function colorChanger(event){
  
  if (event.target === refs.btnStart){
    refs.btnStart.setAttribute ('disabled', true);
    return timerId = setInterval(() => {
      refs.body.setAttribute('style', `background-color: ${getRandomHexColor()}`);
      }, 1000);  
  }else if (event.target === refs.btnStop){
    refs.btnStart.removeAttribute ('disabled');
    refs.btnStop.setAttribute ('disabled', true);
    clearInterval(timerId);
  }
};
