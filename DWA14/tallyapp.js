import { html, css, LitElement } from './lit-html.js';
import createStore from './model/store.js';
import  counterReducer  from './model/reducer.js';
import { increment, decrement, reset } from './model/actions.js';


const store = createStore(counterReducer);

class CounterComponent extends LitElement {
  static styles = css`
    .counter {
      font-size: 24px;
      margin-bottom: 16px;
    }

    button {
      margin-right: 8px;
    }
  `;

  count = 0;

  connectedCallback() {
    super.connectedCallback();

    this.unsubscribe = store.subscribe(() => {
      this.count = store.getState().count;
      this.requestUpdate(); // Trigger a re-render when the counter value changes
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe();
  }

  increment() {
    store.dispatch(increment());
  }

  decrement() {
    store.dispatch(decrement());
  }

  reset() {
    store.dispatch(reset());
  }

  render() {
    return html`
      <div class="counter">
        Count: ${this.count}
      </div>
      <div>
        <button @click=${this.increment}>Increment</button>
        <button @click=${this.decrement}>Decrement</button>
        <button @click=${this.reset}>Reset</button>
      </div>
    `;
  }
}

customElements.define('counter-component', CounterComponent);