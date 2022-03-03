const formElem = document.forms[0];
const nameElem = formElem.name;
const last_nameElem = formElem.last_name;
const emailElem = formElem.email;
const imageElem = formElem.image;
const productsElem = document.querySelector('#products')
let products = [];


formElem.addEventListener('submit', event => {
  event.preventDefault();
  products.push({
  	name: nameElem.value,
  	last_name: last_nameElem.value,
  	email: emailElem.value,
  	img_url: imageElem.value
  })
  rerender();
});


function rerender(){
	productsElem.innerText = '';
	for (let i = 0; i< products.length; i++){
		const card = document.createElement('div');
		const closeElem = document.createElement('div');
		const h2Elem = document.createElement('h2');
		const h2_1Elem = document.createElement('h2');
		const pElem = document.createElement('p');
		const imgElem = document.createElement('div');

		closeElem.addEventListener('click', () =>{
			products = products.filter(elem => elem.name !== products[i].name);
			rerender();
		});

		card.addEventListener('dblclick', () => {
			h2Elem.innerText = `******`;
			h2_1Elem.innerText = `******`;
			pElem.innerText = `***********`;
			imgElem.style.backgroundImage = `url("https://techmesse.com/img/anonymous.jpg")`;
		});
		
		imgElem.classList.add('product_img');
		card.classList.add('card');
		closeElem.classList.add('close');

		card.append(h2Elem, h2_1Elem, pElem, imgElem, closeElem);
		productsElem.appendChild(card);
		h2Elem.innerText = products[i].name;
		h2_1Elem.innerText = products[i].last_name;
		pElem.innerText = products[i].email;
		closeElem.innerText = '✖';
		imgElem.style.backgroundImage = `url("${products[i].img_url}")`;

		
	}
}
