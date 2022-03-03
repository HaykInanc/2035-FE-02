const formElem = document.forms[0];

const nameElem = formElem.name;
const lastnameElem = formElem.lastname;
const emailElem = formElem.email;
const imageElem = formElem.image;

const cardsElem = document.querySelector('#cards')

formElem.addEventListener('submit', () => {
	event.preventDefault();
	const card = document.createElement('div');
	const cardNameElem = document.createElement('p');
	const cardLastNameElem = document.createElement('p');
	const cardEmailElem = document.createElement('p');
	const cardImgElem = document.createElement('div');
	const cardDelElem = document.createElement('div')

	card.classList.add('card');
	cardImgElem.classList.add('card_img');
	cardDelElem.classList.add('card_del');

	cardsElem.appendChild(card);
	card.append(cardNameElem, cardLastNameElem, cardEmailElem, cardImgElem, cardDelElem);
	
	cardNameElem.innerText = nameElem.value;
	cardLastNameElem.innerText = lastnameElem.value;
	cardEmailElem.innerText = emailElem.value;
	cardImgElem.style.backgroundImage = `url('${imageElem.value}')`;
	cardDelElem.innerText = `❌`

cardDelElem.addEventListener('click', () => {
	card.remove();
});

card.addEventListener('dblclick', () => {
	cardNameElem.innerText = `********`;
	cardLastNameElem.innerText = `********`;
	cardEmailElem.innerText = `********`;
	cardImgElem.style.backgroundImage = `url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png')`;
});
});
