/** */ eslint-disable */

//  <style>

//  * {
//     box-sizing: border-box;
//  }
//  .overlay {
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     border-width: 0;
//     box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
//     animation-name: enter;
//     animation-duration: 0.6s;
//     z-index: 10;
//     background-color: rgba(var(--color-light), 1);
//     padding: 10px;
//   }
//   .Button {
//     font-family: Roboto, sans-serif;
//     background-color: rgba(var(--color-blue), 0.1);
//     transition: background-color 0.1s;
//     border-width: 0;
//     border-radius: 6px;
//     height: 2.75rem;
//     cursor: pointer;
//     width: 50%;
//     color: rgba(var(--color-blue), 1);
//     font-size: 1rem;
//     border: 1px solid rgba(var(--color-blue), 1);
//   }
  
//   .primary {
//     background-color: rgba(var(--color-blue), 1);
//     color: rgba(var(--color-force-light), 1);
//   }

//   .input {
//     width: 100%;
//     margin-bottom: 0.5rem;
//     background-color: rgba(var(--color-dark), 0.05);
//     border-width: 0;
//     border-radius: 6px;
//     width: 100%;
//     height: 4rem;
//     color: rgba(var(--color-dark), 1);
//     padding: 1rem 0.5rem 0 0.75rem;
//     font-size: 1.1rem;
//     font-weight: bold;
//     font-family: Roboto, sans-serif;
//     cursor: pointer;
//   }

//   .select {
//     padding-left: 0.5rem;
//   }

//   .content {
//     padding: 2rem 1.5rem;
//     text-align: center;
//     padding-top: 3rem;
//   }

//  </style>
/* <div class="overlay content">
<input type="number" class="overlay input select" data-input-order>
<h3>Enter your name<h3>
<input type="text" class="overlay input elect" data-customer>
<button class="overlay button primary" data-order>Add order</button>
<button class="overlay button primary" data-cancel-order>Cancel Order</button> */

class OrderBook extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `Tshepo Masilo`
  }
}

window.customElements.define('book-order', OrderBook)
