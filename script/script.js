const formElem = document.querySelector('form');
const lastnameElem = document.querySelector('#lastname');
const firstnameElem = document.querySelector('#firstname');
const emailElem = document.querySelector('#email');
const photolinkElem = document.querySelector('#photolink');
const cardsElem = document.querySelector('#cards');

formElem.addEventListener('submit', (event)=> {
	event.preventDefault();
	if(lastnameElem.value === '' || firstnameElem.value === '' || emailElem.value === ''){
		return;
	}else{
		const cardElem = document.createElement('div');
		const lastnameElemP = document.createElement('p');
		const firstnameElemP = document.createElement('p');
		const emailElemP = document.createElement('p');
		const photoElemDiv = document.createElement('div');
		const closeCardElem = document.createElement('div');

		closeCardElem.addEventListener('click', () => cardElem.remove());

		cardElem.classList.add('card');
		lastnameElemP.classList.add('last_name');
		firstnameElemP.classList.add('first_name');
		emailElemP.classList.add('email_elem');
		photoElemDiv.classList.add('photo_link');
		closeCardElem.classList.add('closebtn');
		cardElem.append(lastnameElemP, firstnameElemP, emailElemP, photoElemDiv, closeCardElem);
		lastnameElemP.innerText = lastnameElem.value;
		firstnameElemP.innerText = firstnameElem.value;
		emailElemP.innerText = emailElem.value;
		photoElemDiv.style.backgroundImage = `url("${photolinkElem.value}")`;
		closeCardElem.innerText = `❌`;
		cardsElem.appendChild(cardElem);

		const cardChild = cardElem.parentNode.children;
		for (let i = 0; i < cardChild.length; i++){
			cardElem.setAttribute('data-id', i);
		};
		const id = +cardElem.getAttribute('data-id');

		cardElem.addEventListener('dblclick', () => {
			const pElem = cardsElem.children[id].querySelectorAll('p');
			photoElemDiv.style.backgroundImage = `url("https://www.jobsoutsourced.com/img/default-avatar.png")`;
			for (let i = 0; pElem.length; i++) {
				pElem[i].innerText = '***********';
			};
		});
		lastnameElem.value = '';
		firstnameElem.value = '';
		emailElem.value = '';
		photolinkElem.value = '';
	};
});


