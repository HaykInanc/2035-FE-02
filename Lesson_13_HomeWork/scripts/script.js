const formElem = document.forms[0];
const inputName = formElem.inputName;
const inputLastName = formElem.inputLastName;
const inputEmail = formElem.inputEmail;
const inputFotoURL = formElem.inputFotoURL;
const rootElem = document.querySelector('#container');

formElem.addEventListener('submit', event => {
    event.preventDefault();
    const card = document.createElement('div');
    card.classList.add('card');
    const nameElem = document.createElement('p');
    const lastNameElem = document.createElement('p');
    const emailElem = document.createElement('p');
    const photoElem = document.createElement('div');
    photoElem.classList.add('photo');
    const closeElem = document.createElement('div');
    closeElem.classList.add('close_button');
    closeElem.innerText = '✖';
    closeElem.addEventListener('click', () => card.remove());
    nameElem.innerText = inputName.value;
    lastNameElem.innerText = inputLastName.value;
    emailElem.innerText = inputEmail.value;
    photoElem.style.backgroundImage = `url("${inputFotoURL.value}")`;
    card.append(nameElem, lastNameElem, emailElem, photoElem, closeElem);
    rootElem.appendChild(card);

    card.addEventListener('dblclick', () => {
        console.log(nameElem.innerText.length);
        console.log(lastNameElem.innerText.length);
        console.log(emailElem.innerText.length);

        nameElem.innerText = '*'.repeat(nameElem.innerText.length);
        lastNameElem.innerText = '*'.repeat(lastNameElem.innerText.length);
        emailElem.innerText = '*'.repeat(emailElem.innerText.length);



        photoElem.style.backgroundImage = `url("https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg")`;
    });





});






