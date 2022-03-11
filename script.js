let name=document.querySelector('#name');
let surname=document.querySelector('#surname');
let mail=document.querySelector('#email');
let image=document.querySelector('#foto');
let users=document.querySelector('#users');


let read=addEventListener('submit', create);
function create (first){
	first.preventDefault();
	const card_img=document.createElement('div');
	let card_name=document.createElement('div');
	let card_surname=document.createElement('div');
	let card_email=document.createElement('div');
	let card_set=document.createElement('div');
	let close=document.createElement('div');
	
	card_img.classList.add('card_style');
	card_name.classList.add('name');
	card_surname.classList.add('surname');
	card_email.classList.add('email');
	card_set.classList.add('setting');
	close.classList.add('close');

	close.addEventListener('click', ()=>card_set.remove());

	card_set.append(card_name, card_surname, card_email, card_img, close);
	users.appendChild(card_set);

	close.innerText='X';
	card_name.innerText=name.value;
	card_surname.innerText=surname.value;
	card_email.innerText=mail.value;
	card_img.style.backgroundImage=`url("${image.value}")`;

}

