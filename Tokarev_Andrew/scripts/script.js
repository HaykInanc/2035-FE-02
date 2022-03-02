'use strict';

const formElem = document.forms[0];
let persons = [];

formElem.addEventListener('submit', event => addPersonCard(event, formElem, persons));

function addPersonCard(event, formElem) {

	event.preventDefault();

	const fields = ['name', 'last_name', 'email', 'photo'],
		person = {};

	fields.forEach(field => person[field] = formElem[field].value);
	person.id = 'card' + randomID();
	person.anonymous = false;

	persons.push(person);
	rerender(persons);
}

function removePersonCard(card) {
	persons = persons.filter(elem => elem.id !== card.id);
	rerender(persons);
}

function rerender(persons) {
	const cards = document.querySelector('#cards');
	cards.innerText = '';

	for (let i = 0; i < persons.length; i++) {

		const person = persons[i],
			{
				card,
				close,
				name,
				mail,
				card_image
			} = createCardElements();

		close.addEventListener('click', removePersonCard.bind(null, person));

		card.addEventListener('dblclick', event => {
			anonymizeData(event.target);
		});

		card.id = person.id;
		close.innerText = '✖';
		name.value = `${person.name} ${person.last_name}`;
		mail.value = person.email;
		card_image.style.backgroundImage = `url("${person.photo}")`;

		card.append(card_image, name, mail, close);
		cards.appendChild(card);

		if (person.anonymous) {
			anonymizeData(card, true);
		}
	}
}

function createCardElements() {
	const card_obj = {
		card: true,
		close: true,
		name: false,
		mail: false,
		card_image: true
	};

	for (const [key, value] of Object.entries(card_obj)) {
		if (value) {
			card_obj[key] = document.createElement('div');
			card_obj[key].classList.add(key);
		} else {
			card_obj[key] = document.createElement('input');
			card_obj[key].setAttribute('readonly', true);
		}
	}

	return card_obj;
}

function anonymizeData(card, anonymous = false) {

	if (card.classList.contains('close')) {
		return;
	} else if (!card.classList.contains('card')) {
		card = card.parentElement;
	}
	const person = persons.find(elem => elem.id === card.id);

	person.anonymous = anonymous || !person.anonymous;

	for (let elem of card.children) {
		if (elem.classList.contains('card_image')) {
			if (person.anonymous) {
				person._card_image = elem.style.backgroundImage;
				elem.style.backgroundImage = 'url("img/silhouette.png")';
			} else {
				elem.style.backgroundImage = person._card_image;
			}
		} else if (elem.tagName.toLowerCase() === "input") {
			if (person.anonymous) {
				elem.type = "password";
			} else {
				elem.type = "text";
			}
		}
	}
}

function randomID() {
	return '_' + Math.random().toString(36).substr(2, 9);
}