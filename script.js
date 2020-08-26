const form = document.getElementById('form');
const updateElement = document.getElementById('update');
form.addEventListener('submit', updateDOM);

function updateDOM(event) {
    event.preventDefault();
    console.log(updateElement);
    const userName = document.getElementById('userName').value;
    updateElement.innerHTML = `<h2>Hello there, ${userName}!</h2><p>You just updated the DOM!</p>`;
}