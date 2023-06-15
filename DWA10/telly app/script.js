const MAX_NUMBER = 10;
const MIN_NUMBER = -6;

const number = document.querySelector('[data-key="number"]');
console.log(number)
const add = document.querySelector('[data-key="addition"]');
const subtract = document.querySelector('[data-key="subtraction"]')
const reset = document.querySelector('[data-key="reset"]')

const increaseHandler = () => {
    const result = parseInt(number.value) + 1;
    number.value = result;

    if (result === MAX_NUMBER) {
        add.disabled = true;
        subtract.disabled = false;
    }
}

const decreaseHandler = () => {
    const result = parseInt(number.value) - 1;
    number.value = result;

    if (result === MIN_NUMBER) {
        subtract.disabled = true;
        add.disabled = false;
    }
    
}

const resettingHandler = () => {
    number.value = 0;
    add.disabled = false;
    subtract.disabled = false;
}



add.addEventListener('click', increaseHandler);
subtract.addEventListener('click', decreaseHandler);
reset.addEventListener('click', resettingHandler)

