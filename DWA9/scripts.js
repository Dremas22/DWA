/* eslint-disable lines-between-class-members */
/* eslint-disable no-undef */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable import/first */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable getter-return */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */

//--- SHADOW DOM ---//

const order = document.querySelector('[data-order-form]')
const orderForm = document.querySelector('[data-book-order]')
const template = document.createElement('template')
template.innerHTML = /* html */`
<style>

* {
    box-sizing: border-box;
}

h2 { 
    color: grey
}

.overlay {

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 480px;
    border-width: 0;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    animation-name: enter;
    animation-duration: 0.6s;
    z-index: 10;
    background-color: rgba(var(--color-light), 1);
    padding: 10px;
  }

  .overlay__button {
    font-family: Roboto, sans-serif;
    background-color: rgba(var(--color-blue), 0.1);
    transition: background-color 0.1s;
    border-width: 0;
    border-radius: 6px;
    height: 2.75rem;
    cursor: pointer;
    width: 50%;
    color: rgba(var(--color-blue), 1);
    font-size: 1rem;
    border: 1px solid rgba(var(--color-blue), 1);
  }
  
  .overlay__button_primary {
    background-color: rgba(var(--color-blue), 1);
    color: rgba(var(--color-force-light), 1);
    margin: 0.3em;
  }

  .overlay__input_select {
    padding-left: 0.5rem;
  }
  
  .overlay__input {
    width: 100%;
    margin-bottom: 0.5rem;
    background-color: rgba(var(--color-dark), 0.05);
    border-width: 0;
    border-radius: 6px;
    width: 100%;
    color: rgba(var(--color-dark), 1);
    padding: 1rem 0.5rem 0 0.75rem;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: Roboto, sans-serif;
    cursor: pointer;
    padding-left: 0.3rem;
  }
  

  .overlay__data {
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: rgba(var(--color-dark), 0.8)
  }

  .overlay__content {
    padding: 2rem 1.5rem;
    text-align: center;
    padding-top: 1rem;
  }

  .hidden {
    display: none;
  }

  .overlay__title {
    padding: 1rem 0 0.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.1px;
    max-width: 25rem;
    margin: 0 auto;
    color: rgba(var(--color-dark), 0.8)
  }

  .buttons {
    display: flex
  }
  
  
</style>
<div class="overlay__content" data-content>
 <h2>Enter your preferd book price</h2>
 <input type="number" class="overlay__input" data-price-order>
 <h2>Enter your full names</h2>
 <input type="text" class="overlay__input" data-customer-order>
 <div class="buttons">
 <button class="overlay__button overlay__button_primary" id="cancelOrder">Cancel</button>
 <button class="overlay__button overlay__button_primary" data-add-order>Submit order</button>
 </div>
</div>
 `
class OrderBook extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        orderForm.appendChild(this.shadowRoot); 
    }
    connectedCallback() {
        const orderBookElement = this.document.querySelector('[data-shadow]')
        console.log(orderBookElement)
        const cancelButton = this.shadowRoot.querySelector('#cancelOrder');

    
        // cancelButton.addEventListener('click', () => {
        //     this.shadowRoot.querySelector('.overlay__content').classList.add('hidden');
        // });
    }

}
customElements.define('book-order', OrderBook);

const buttonOrder = document.querySelector('[data-button-order]')
buttonOrder.addEventListener('click', () => {
    order.classList.remove('hidden')
});

// const cancelOrder = document.querySelector('[data-cancel-order]')
// document.body.appendChild(order)

// cancelOrder.addEventListener('click', () => {
//     order.classList.add('hidden')
// });


const placeOrder = () => {
    const orderPrice = document.querySelector(['data-price-order'])
    const customerData = document.querySelector('[data-customer-order]')

    orderPrice.textContent = orderPrice.value;
    customerData.textContent = customerData.value;
}

// const addOrder = document.querySelector(['data-add-order'])
// addOrder.addEventListener('click', () => {
//     placeOrder()
// })



import { authors, genres, books, BOOKS_PER_PAGE } from './modules/data.js';

const matches = books;
let page = 1;
const range = [0, 36];

if (!books && !Array.isArray(books)) throw new Error('Source required');
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers');

//--- ADDING




// -----ABSTRUCTION WITH SOLID------//

// -- Single Responsibility Principle (SRP): This principle states that a class or module should have only one reason to change.
// To apply SRP in JavaScript, you can create separate modules or classes that handle specific tasks or responsibilities.
// -- Open-Closed Principle (OCP): This principle states that software entities (classes, modules, functions, etc.)
// should be open for extension but closed for modification.
// -- Liskov Substitution Principle (LSP): This principle states that objects of a superclass should be replaceable with objects
// of a subclass without affecting the correctness of the program.
// -- Interface Segregation Principle (ISP): This principle states that a client
// should not be forced to depend on methods it does not use.
// -- Dependency Inversion Principle (DIP): This principle states that high-level
// modules should not depend on low-level modules.

// --CREATE PREVIEW FUNCTION---//



/**
 * THE AUTHOR PARAMETER VARIABLE WILL BE ACCESSING AUTHORS OBJECT VALUES
 * ID PARAMETER WILL BE USED AS AN OBJECT KEY TO ACCESS ARRAY BOOKS WHICH HAS NESTED ARRAY OBJECTS.
 * TITLE PARAMETER THAT WILL ACCESS ARRAY BOOKS BY BOOK NAME
 */

const listItems = document.querySelector('[data-list-items]');

function createPreview({
    author, id, image, title,
}) {
    const preview = document.createElement('button');
    preview.classList.add('preview');
    preview.setAttribute('data-preview', id);

    preview.innerHTML = `<img class="preview__image" src=${image} alt=${title}>
    <div class="preview__content">
    <h3 class="preview__title">${title}</h3>
    <div class="preview__author">${author}</div>
    </div>`;

    return preview;
}

let extracted = books.slice(0, 36);
let fragment = document.createDocumentFragment();
for (const {
    author, image, title, id,
} of extracted) {
    const fragment = document.createDocumentFragment();

    const preview = createPreview({
        author,
        id,
        image,
        title,
    });
    fragment.appendChild(preview);
}

fragment = document.createDocumentFragment();
extracted = books.slice(0, 36);
for (const {
    author, id, image, title,
} of extracted) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);
    element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;
    fragment.appendChild(element);
}
listItems.appendChild(fragment);

// @ts-check

/**
 * CREATING FRAGMENTS THAT COTAIN DOCUMENT OBJECT ELEMENTS FOR OBJECT GENRE AND OBJECT AUTHOR
 */

// ---SEARCH ABSTRUCTION---//

function createOption(value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.innerText = text;
    return option;
}

function populateSelectOptions(container, data, defaultValueText) {
    fragment = document.createDocumentFragment();
    fragment.appendChild(createOption('any', defaultValueText));

    for (const [id, name] of Object.entries(data)) {
        const option = createOption(id, name);
        fragment.appendChild(option);
    }

    container.appendChild(fragment);
}

// ---- (6) ABSTRACTION FOR GENRES AND AUTHORS SELECTION-----//

const genresFrag = document.createDocumentFragment();
populateSelectOptions(genresFrag, genres, 'All Genres');
const searchGenre = document.querySelector('[data-search-genres]');
searchGenre.appendChild(genresFrag);

const authorsFrag = document.createDocumentFragment();
populateSelectOptions(authorsFrag, authors, 'All Authors');
const searchAuthors = document.querySelector('[data-search-authors]');
searchAuthors.appendChild(authorsFrag);

/**
 * THESE ARE LISTENER FUNCTIONS FOR DOM ELEMENTS
 */

const cancelSearch = document.querySelector('[data-search-cancel]');
cancelSearch.addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = false;
});

const cancelSett = document.querySelector('[data-settings-cancel]');
cancelSett.addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = false;
});

const closeList = document.querySelector('[data-list-close]');
closeList.addEventListener('click', () => {
    document.querySelector('[data-list-active]').open = false;
});

const settForm = document.querySelector('[data-header-settings]');
settForm.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('[data-settings-overlay]').open = true;
});

const searchData = document.querySelector('[data-header-search]');
searchData.addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = true;
    document.querySelector('[data-search-title]').focus();
});

// ---- (5) ABSATRACTION FOR CREATING ELEMENT FOR MORE BOOKS TO PREVIEW---//

function createListButtonHTML(booksLength, page, booksPerPage, matchesLength) {
    const remainingBooks = Math.max(matchesLength - page * booksPerPage, 0);

    return `
      <span>Show more</span>
      <span class="list__remaining"> (${remainingBooks})</span>
    `;
}

function createBookPreview(book) {
    const { author, image, title, id } = book;

    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
          <img class="preview__image" src="${image}">
          <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
          </div>
        `;

    return element;
}

const listBtn = document.querySelector('[data-list-button]');
listBtn.innerHTML = createListButtonHTML(books.length, page, BOOKS_PER_PAGE, matches.length);

// @ts-check

/**
 * LISTENER FUNCTION FOR THAT INCREASES NUMBER OF BOOKS TO BE SCROLLED BASED ON WHAT THE USER WANTS VIEW
 */

listBtn.addEventListener('click', () => {

    // ----(4) ABSTRACTION ON CONTROLING NUMBER OF PAGES TO DISPLAY BOOKS FOR PREVIEWING-----//

    function displayBookPreviews(matches, page, BOOKS_PER_PAGE) {
        const startIndex = page * BOOKS_PER_PAGE;
        const endIndex = (page + 1) * BOOKS_PER_PAGE;
        fragment = document.createDocumentFragment();

        for (let i = startIndex; i < endIndex && i < matches.length; i++) {
            const book = matches[i];
            const previewElement = createBookPreview(book);
            fragment.appendChild(previewElement);
        }

        listItems.appendChild(fragment);
    }

    // Usage example:
    displayBookPreviews(matches, page, BOOKS_PER_PAGE);

    page += 1;

    const remaining = matches.length - endIndex;
    listBtn.disabled = endIndex >= matches.length;
    listBtn.textContent = `Show more (${remaining})`;
});

// @ts-check

/**
 * THE SEARCH LISTENER FUNCTION FOR SEARCHING BOOKS BY AUHTOR, GENRE OR ALL SELECTION
 * 
 */

const searchForm = document.querySelector('[data-search-form]');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(searchForm);
    const filters = Object.fromEntries(formData);

    // ---- (1) SOLID ABSTRACTED MATCH ITERATION ON GENRE AND AUTHORS

    function isTitleMatch(book, titleFilter) {
        return titleFilter.trim() === '' || book.title.toLowerCase().includes(titleFilter.toLowerCase());
    }

    function isAuthorMatch(book, authorFilter) {
        return authorFilter === 'any' || book.author === authorFilter;
    }

    function isGenreMatch(book, genreFilter) {
        return genreFilter === 'any' || book.genres.includes(genreFilter);
    }

    function filterBooks(matches, filters) {
        return matches.filter((book) => {
            const titleMatch = isTitleMatch(book, filters.title);
            const authorMatch = isAuthorMatch(book, filters.author);
            const genreMatch = isGenreMatch(book, filters.genre);

            return titleMatch && authorMatch && genreMatch;
        });
    }

    const result = filterBooks(matches, filters);

    const listMessage = document.querySelector('[data-list-message]');

    if (result.length < 1) {
        listMessage.classList.add('list__message_show');
        listItems.innerHTML = '';
    } else {
        listMessage.classList.remove('list__message_show');
        listItems.innerHTML = '';

        fragment = document.createDocumentFragment();

        for (const book of result) {
            const { author, image, title, id } = book;
            const previewElement = createBookPreview(book)
            fragment.appendChild(previewElement);
        }
        listItems.appendChild(fragment);
    }
    searchForm.open = false;
    listBtn.disabled = true;
});

// ---PREIVIEWING A BOOK WHEN CLICKING ON A BOOK'S IMAGE BUTTON-----//

listItems.addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath());
    const activeList = document.querySelector('[data-list-active]');
    const listBlur = document.querySelector('[data-list-blur]');
    const imageList = document.querySelector('[data-list-image]');
    const titleList = document.querySelector('[data-list-title]');
    const subtitle = document.querySelector('[data-list-subtitle]');
    const description = document.querySelector('[data-list-description]');

    //buttonElement.addEventListener('click', checkAge); // Use 'click' event instead of 'submit' for a button

    const priceDiv = document.querySelector('[data-price-form]');

    //--CONVERTED FACTORY FUNCTION TO A CLASS ---//

    const BookPrice = () => {
        const fragment = document.createDocumentFragment();
        const priceElement = document.createElement('div');
        priceElement.classList = 'overlay__content';

        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'number');
        inputElement.classList = 'overlay__input overlay__input_select';
        inputElement.setAttribute('data-input-price', '');
        inputElement.required = true;

        const buttonElement = document.createElement('button');
        buttonElement.classList = 'overlay__button overlay__button_primary';
        buttonElement.innerText = 'Add Price';

        priceElement.appendChild(document.createElement('h3')).innerText = 'Enter your book price';
        priceElement.appendChild(document.createElement('div')).appendChild(inputElement);
        priceElement.appendChild(document.createElement('div')).appendChild(buttonElement);

        fragment.appendChild(priceElement);
        priceDiv.appendChild(fragment);

        buttonElement.addEventListener('click', () => {
            userBookPricing();
        });

        const userBookPricing = () => {
            const getPrice = () => {
                const price = inputElement.value;
                return price;
            };

            if (getPrice() <= 100) {
                alert('Your recommended price is too cheap');
                activeList.open = true;
                priceDiv.open = false;
            } else {
                alert('You really know how to price a product');
                window.location.href = 'index.html';
            }
        };
    };

    const bookPriceInstance = BookPrice();


    const findActiveBook = (node) => {
        const previewId = node?.dataset?.preview;

        for (const singleBook of books) {
            if (singleBook.id === previewId) {
                active = singleBook;
                break;
            }
        }

        return active;
    }

    let active;
    for (const node of pathArray) {
        if (active) {
            break;
        }

        findActiveBook(node);

    }

    if (!active) return;

    activeList.open = true;
    listBlur.style.background = `url(${active.image})`;
    imageList.setAttribute('src', active.image);
    titleList.innerHTML = active.title;
    subtitle.innerHTML = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
    description.innerHTML = active.description;

    const submitPrice = document.querySelector('[data-list-Price]')

    submitPrice.addEventListener('click', () => {
        //bookPriceInstance.setPrice();
        activeList.open = false;
        priceDiv.open = true;
    });

});
// @ts-check

/**
 * CHANGING THE BACKGROUND THEME AND TEXT COLOR OF THE OVERALL PAGE
 */

const themes = {
    day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    },
    night: {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    },
};

const applyTheme = (theme) => {
    const { dark, light } = themes[theme];
    document.documentElement.style.setProperty('--color-dark', dark);
    document.documentElement.style.setProperty('--color-light', light);
}

const setInitialTheme = () => {
    const themeSett = document.querySelector('[data-settings-theme]');
    const selectedTheme = themeSett.value;
    applyTheme(selectedTheme);
}

const formSettings = document.querySelector('[data-settings-overlay]');
formSettings.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    applyTheme(result.theme);
    formSettings.open = false;
});

setInitialTheme();

// ---- (3) ABSTRACTION ON THE LISTENER FUNCTION FOR SAVING THE SELECTED THEM ----//

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    applyTheme(result.theme);
    formSettings.open = false;
}

formSettings.addEventListener('submit', handleFormSubmit);

// class CustomerOrder extends HTMLElement {

// }