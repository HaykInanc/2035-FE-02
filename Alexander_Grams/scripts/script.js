const formElem = document.forms[0];
const nameElem = formElem.name;
const last_nameElem = formElem.last_name;
const emailElem = formElem.email;
const imageElem = formElem.image;
const cardsElem = document.querySelector(`#cards`);

formElem.addEventListener(`submit`, event => {
	event.preventDefault();

	const card = document.createElement(`div`);
	const pNameElem = document.createElement(`p`);
	const pLastNameElem = document.createElement(`p`);
	const divElem = document.createElement(`div`);
	const pEmailElem = document.createElement(`p`);
	const imgElem = document.createElement(`div`);
	const closeElem = document.createElement(`div`);

	closeElem.addEventListener(`click`, () => card.remove());
	
	card.addEventListener(`dblclick`, event => {
		pNameElem.innerText = `*******`;
		pLastNameElem.innerText = `*********`;
		pEmailElem.innerText = `******************`;
		imgElem.style.backgroundImage = `url("https://expertnov.ru/800/600/https/i0.wp.com/www.switchedoninsurance.com/blog/wp-content/uploads/2019/08/Off-Grid-1.jpg")`;
	});
	
	closeElem.innerText = `✘`;
	pNameElem.classList.add(`name_elem`);
	pLastNameElem.classList.add(`last_name_elem`);
	pEmailElem.classList.add(`email_elem`);
	imgElem.classList.add(`img_elem`);
	divElem.classList.add(`name_wraper`);
	card.classList.add(`card`);
	closeElem.classList.add(`close`);
	divElem.append(pNameElem, pLastNameElem);
	card.append(divElem, pEmailElem, imgElem, closeElem);
	cardsElem.append(card);
	pNameElem.innerText = nameElem.value;
	pLastNameElem.innerText = last_nameElem.value;
	pEmailElem.innerText = emailElem.value;
	imgElem.style.backgroundImage = `url("${imageElem.value}")`;
});