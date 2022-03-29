const formElem = document.forms[0];
const nameElem = formElem.name;
const familyElem = formElem.family;
const emailElem = formElem.email;
const photoElem = formElem.photo;
const productsElem = document.querySelector('#products')
// let products = [];


// formElem.addEventListener('submit', event => {
//   event.preventDefault();
//   products.push({
//   	title: titleElem.value,
//   	description: descrElem.value,
//   	img_url: imageElem.value
//   })
//   render();
// });


formElem.addEventListener('submit', event => {
	event.preventDefault();
	const card = document.createElement('div');
	const closeElem = document.createElement('div');
	const forNameElem = document.createElement('p');
	const forFamiliElem = document.createElement('p');
	const forEmailElem = document.createElement('p');
	const forphotoElem = document.createElement('div');

	card.addEventListener('dblclick', () => {
		forFamiliElem.innerText = forFamiliElem.innerText.replace(/[\s\S]/g, "*");
		forNameElem.innerText = forNameElem.innerText.replace(/[\s\S]/g, "*");
		forEmailElem.innerText = forEmailElem.innerText.replace(/[\s\S]/g, "*");
		forphotoElem.style.backgroundImage = `url("https://png.pngtree.com/png-vector/20200625/ourmid/pngtree-business-men-silhouette-avatar-png-image_2266249.jpg")`;
	});

	forphotoElem.classList.add('product_img');
	card.classList.add('card');
	closeElem.classList.add('close');

	card.append(forFamiliElem, forNameElem, forEmailElem, forphotoElem, closeElem);
	productsElem.appendChild(card);
	forNameElem.innerText = nameElem.value;
	forFamiliElem.innerText = familyElem.value;
	forEmailElem.innerText = emailElem.value;
	closeElem.innerText = '✖';
	forphotoElem.style.backgroundImage = `url("${photoElem.value}")`;

	closeElem.addEventListener('click', () => 
		card.remove());
});


// добавить поле с описанием товара (textarea)