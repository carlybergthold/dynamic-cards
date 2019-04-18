// When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button. Insert that new component into the DOM.

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
const textInput = document.querySelector('#text-input');
const createBtn = document.querySelector('#btn-create');
const containerDiv = document.querySelector('#container-div');
let i = 0;

const addCard = () => {

    i++;
    let userInput = textInput.value; 

    const card = document.createElement('div');
    card.classList.add(`card--${i}`);
    card.innerHTML = 
    `
        <article class="card" id="card--${i}">
            <div id="text">${userInput}</div>
            <div>         
                <button id="delete--${i}">Delete</button>
            </div>
        </article>
    `
    return card;
}

createBtn.addEventListener('click', () => {
    const newCard = addCard();
    console.log("newCard", newCard)
    containerDiv.appendChild(newCard);
})

document.addEventListener('click', () => {
    if (event.target.textContent === 'Delete') {
        let i = event.target.id.split('--').pop();
        let card = document.querySelector(`.card--${i}`);
        containerDiv.removeChild(card);
    }
});