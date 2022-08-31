import Notiflix, { Notify } from "notiflix";
import { refs } from "./referece_for_promise_elements";



function createPromise(position, delay) {
  
  return new Promise((resolve, reject) =>{
    const shouldResolve = Math.random() > 0.3;
    const step = Number(refs.inputStep.value);
    const number = setTimeout(() => {
      if (shouldResolve) {
        resolve(console.log('good', position)); //(Notify.success('teste GOOD', position));
      } else {
        reject(console.log('bad', position)); //(Notify.failure('test BAD', position));
      };
    }, delay);
delay += step
    console.log(delay, step);
    console.log(number);
  });
};



function promisGeneration(event) {
  event.preventDefault();

  const amount = Number(refs.inputAmount.value);
  let delay = Number(refs.inputDelay.value);
  

  for(let i = 1; i<= amount; i++){
    createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
};

refs.submitButton.addEventListener ('click', promisGeneration) 
  