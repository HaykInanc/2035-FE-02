const cards = document.querySelector('#cards');
const form = document.forms[0];
let cards_lst = [];


function render(){
	cards.innerText = '';
	for (let i=0; i<cards_lst.length; i++){
		let {name, lastname, email, img_link, hide} = cards_lst[i];
		const card = document.createElement('div');
		const close = document.createElement('div');
		const nameElem = document.createElement('p');
		const lastnameElem = document.createElement('p');
		const emailElem = document.createElement('p');
		const imgElem = document.createElement('img');

		close.addEventListener('click', event=>{
			cards_lst = cards_lst.filter(elem => elem.name !== name);
			render();
		})

		card.addEventListener('dblclick', event=>{
			for(let i = 0; i< cards_lst.length; i++){
				if (cards_lst[i].name === name){
					cards_lst[i].hide = !cards_lst[i].hide;
				}
			}
			render();
		})
		close.innerText = '[x]';

		card.append(nameElem, lastnameElem, emailElem, imgElem, close);
		cards.appendChild(card);
		if(hide){
			nameElem.innerText     = '*'.repeat(name.length);
			lastnameElem.innerText = '*'.repeat(lastname.length);
			emailElem.innerText    = '*'.repeat(email.length);
			imgElem.src            = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_qkJSDqlnWfznqLqi6nmUtbXKtwOwufOy2H3XHIWVLM-bRYxc8FoHyfTU0H_m_9NOkc&usqp=CAU';
		}else{
			nameElem.innerText     = name;
			lastnameElem.innerText = lastname;
			emailElem.innerText    = email;
			imgElem.src            = img_link;
		}

	 }
	}

	form.addEventListener('submit',event=>{
	event.preventDefault();
	const {name, lastname, email, img_link} = event.target;
	cards_lst.push({
		name: name.value, 
		lastname: lastname.value,
		email: email.value,
		img_link: img_link.value,
		hide: false
	});
	render();
})
