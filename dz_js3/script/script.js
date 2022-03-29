const formElem = document.forms[0];
const nameElem = formElem.name;
const lastnameElem = formElem.lastname;
const emailElem = formElem.email;
const imageElem = formElem.image;
const productsElem = document.querySelector('#products');

formElem.addEventListener('submit', event => {
	event.preventDefault();
	const card = document.createElement('div');
	const closeElem = document.createElement('div');
	const h2Elem = document.createElement('p');
	const h1Elem = document.createElement('p');
	const pElem = document.createElement('p');
	const imgElem = document.createElement('div');
	
	closeElem.addEventListener('click', () => 
		card.remove());

	card.addEventListener('dblclick', () => {
		h1Elem.innerText = h1Elem.innerText.replace(/[\s\S]/g, "*");
		h2Elem.innerText = h2Elem.innerText.replace(/[\s\S]/g, "*");
		pElem.innerText = pElem.innerText.replace(/[\s\S]/g, "*");
		imgElem.style.backgroundImage = `url("https://free-png.ru/wp-content/uploads/2022/01/free-png.ru-635.png")`;
	});

	imgElem.classList.add('product_img');
	card.classList.add('card');
	closeElem.classList.add('close');

	card.append(h1Elem, h2Elem, pElem, imgElem, closeElem);
	productsElem.appendChild(card);
	h1Elem.innerText = nameElem.value;
	h2Elem.innerText = lastnameElem.value;
	pElem.innerText = emailElem.value;
	closeElem.innerText = '✖';
	imgElem.style.backgroundImage = `url("${imageElem.value}")`;

});

