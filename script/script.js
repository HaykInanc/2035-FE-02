const formElem = document.forms[0];
const nameElem = formElem.name;
const surnameElem = formElem.surname;
const imageElem = formElem.image;
const mailElem = formElem.mail;
const productsElem = document.querySelector('#products')
let products = [];


formElem.addEventListener('submit', (event) => {
	event.preventDefault();
	products.push({
		title: nameElem.value,
		title_2: surnameElem.value,
		description: mailElem.value,
		img_url: imageElem.value
	});
	rerender();
});

function rerender(){
	productsElem.innerText = '';
	for(let i = 0; i <products.length; i++){
		const card = document.createElement('div');
		const h2Elem = document.createElement('h2');
		const h2Elem_2 = document.createElement('h2');
		const h2Div = document.createElement('div');
		const imgElem = document.createElement('div');
		const pElem = document.createElement('p');
		const xElem = document.createElement('div');

		xElem.addEventListener('click',() => {
			products = products.filter(elem => elem.title != products[i].title && products[i].title_2 );
			rerender();
		});
		card.addEventListener('dblclick',() =>
		{
			h2Elem.innerText = '⚹⚹⚹⚹⚹⚹';
			h2Elem_2.innerText = '⚹⚹⚹⚹⚹⚹';
			pElem.innerText = '⚹⚹⚹⚹⚹⚹';
			imgElem.style.backgroundImage = `url('https://img2.freepng.ru/20180625/zyy/kisspng-silhouette-clip-art-looking-man-5b30c5045e6ab2.7945602415299228203867.jpg')`;
		});

		imgElem.classList.add('product_img');
		card.classList.add('card');
		h2Div.classList.add('person');
		xElem.classList.add('close');

		h2Div.append(h2Elem,h2Elem_2);
		card.append(h2Div,imgElem,pElem,xElem,);
		productsElem.appendChild(card); 
		h2Elem.innerText = products[i].title;
		h2Elem_2.innerText = products[i].title_2;
		pElem.innerText = products[i].description;
		xElem.innerText = '✖';

		imgElem.style.backgroundImage = `url('${products[i].img_url}')`;
	}
}