function handleClick() {

const list = document.querySelector('ul');
const input = document.querySelector('input');

const listItem = document.createElement('li');
const btn = document.createElement('button');

listItem.innerText = input.value;
btn.innerText = 'X';

btn.addEventListener('click', () =>{
    listItem.remove();
})

list.appendChild(listItem);
listItem.appendChild(btn);

// Clear the input box
input.value = '';

}

document
    .querySelector('button')
    .addEventListener('click', handleClick)

// Add an event listener so that the enter key also adds to the list
document.querySelector('input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleClick();
    }
});
