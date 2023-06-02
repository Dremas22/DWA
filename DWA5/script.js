// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const showResult = document.querySelector('[data-result]')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (dividend < 0 || divider < 0) {
        showResult.innerText = 'Division not performed. Invalid number provided. Try again.';

    }
    else if (dividend > 0 && divider > 0) {
        let answer = dividend / divider;
        showResult.innerText = Math.floor((answer / 10) * 10);
    }
    else if (dividend != Number || divider != Number) {
        try {

            if (dividend === '' || divider === '') {
                throw new Error("No entries found");
            }

            // Rest of your code for performing calculations

        } catch (error) {
            // Handle the error gracefully
            console.error("An error occurred:", error);
            showResult.innerText = 'No calculation performed';
            alert("An error occurred. Please try again later.");
        }
    }
});



