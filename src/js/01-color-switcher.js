function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
};

refs.btnStart.addEventListener('click', colorChanger);
refs.btnStop.addEventListener('click', stopColorChange);
function bodyColors(){
  refs.body.setAttribute('style', `background-color: ${getRandomHexColor()}`);
};

function colorChanger(event) {
  refs.btnStart.setAttribute ('disabled', true);
  const timerId = setInterval(() => {
    bodyColors();
    }, 1000); 
};

function stopColorChange(event){
    refs.btnStart.removeAttribute ('disabled');
    refs.btnStop.setAttribute ('disabled', true);
    clearInterval(timerId);
    console.log('stop',timerId);
  };
  
//ТРЕБА ПЕРЕОБІТИ НЕ ВІРНО ВИКОНУЄТЬСЯ