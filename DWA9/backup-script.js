/** */ eslint disable */

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

    class BookPrice {
        constructor() {
            fragment = document.createDocumentFragment();
            const priceElement = document.createElement('div');
            priceElement.classList = 'overlay__content';

            this.inputElement = document.createElement('input');
            this.inputElement.setAttribute('type', 'number');
            this.inputElement.classList = 'overlay__input overlay__input_select';
            this.inputElement.setAttribute('data-input-price', '');
            this.inputElement.required = true;

            const buttonElement = document.createElement('button');
            buttonElement.classList = 'overlay__button overlay__button_primary';
            buttonElement.innerText = 'Add Price';

            priceElement.appendChild(document.createElement('h3')).innerText = 'Enter your book price';
            priceElement.appendChild(document.createElement('div')).appendChild(this.inputElement);
            priceElement.appendChild(document.createElement('div')).appendChild(buttonElement);

            fragment.appendChild(priceElement);
            priceDiv.appendChild(fragment);

            buttonElement.addEventListener('click', () => {
                this.userBookPricing();

            });

        }

        get userBookPricing() {
            const getPrice = () => {
                const price = this.inputElement.value;
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
        }
    }

    const bookPriceInstance = new BookPrice();


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

// userBookPricing() {
        //     const getPrice = () => {
        //         const price = this.inputElement.value;
        //         return price;
        //     };

        //     const setPrice = () => {
        //         if (getPrice() <= 100) {
        //             alert('Your recommended price is too cheap');
        //             activeList.open = true;
        //             priceDiv.open = false;
        //         }
        //         else {
        //             alert('You really know how to price a product');
        //             window.location.href = 'index.html';
        //         }
        //     };

        //     setPrice();
        // }