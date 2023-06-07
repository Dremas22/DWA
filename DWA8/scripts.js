/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
import { authors, genres, books, BOOKS_PER_PAGE } from './modules/data.js';

const matches = books;
let page = 1;
const range = [0, 36];

if (!books && !Array.isArray(books)) throw new Error('Source required');
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers');

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
    const fragment = document.createDocumentFragment();
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
        const fragment = document.createDocumentFragment();

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

        const fragment = document.createDocumentFragment();

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

/**
 * This is a factory function consist of userBookpricing function
 * that consist of getPrice and setPrice methods.
 * @callback bookPrice()
 * @returns void
 */

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
    const bookPrice = () => {
        fragment = document.createDocumentFragment();

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

        priceElement.appendChild(document.createElement('h3')).innerText = 'Enter Price';
        priceElement.appendChild(document.createElement('div')).appendChild(inputElement);
        priceElement.appendChild(document.createElement('div')).appendChild(buttonElement);

        fragment.appendChild(priceElement);
        priceDiv.appendChild(fragment);

        buttonElement.addEventListener('click', () => {
            userBookPricing();
        });

        function userBookPricing() {
            const getPrice = () => {
                const price = inputElement.value;
                return price;
            };

            const setPrice = () => {
                if (getPrice() <= 100) {
                    alert("Your recommended price is too cheap");
                }
                else {
                    alert("You really know how to price a product");
                    window.location.href = "index.html";
                }
            };

            setPrice();
        }




    };

    function findActiveBook(node) {
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

        bookPrice('overlay__content')
        activeList.open = false;
        priceDiv.open = true
    })

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

function applyTheme(theme) {
    const { dark, light } = themes[theme];
    document.documentElement.style.setProperty('--color-dark', dark);
    document.documentElement.style.setProperty('--color-light', light);
}

function setInitialTheme() {
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
