import Notiflix, { Notify } from "notiflix";
import { refs } from "./referece_for_promise_elements";


function createPromise(position, delay) {
  
  return new Promise((resolve, reject) =>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } 
        reject({position, delay}); 
      
    }, delay);

  });
};


function promisGeneration(event) {
  event.preventDefault();

  const amount = Number(refs.inputAmount.value);
  let delay = Number(refs.inputDelay.value);
  const step = Number(refs.inputStep.value);

  for(let i = 1; i<= amount; i++){
    createPromise(i, delay)
  .then(({ position, delay }) => {
    Notify.success(`Fulfilled promise ${position} in ${delay} ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`Rejected promise ${position} in ${delay} ms`);
  });
  delay += step
  };
  
};

refs.submitButton.addEventListener ('click', promisGeneration);