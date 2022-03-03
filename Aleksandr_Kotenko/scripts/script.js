const formElem = document.forms[0];
const nameElem = formElem.name;
const surnameElem = formElem.surname;
const mailElem = formElem.email;
const fotoElem = formElem.foto;
const worksheetElem = document.querySelector('#worksheet')
let worksheet = [];


formElem.addEventListener('submit', event => {
  event.preventDefault();
  worksheet.push({
  	name: nameElem.value,
  	surname: surnameElem.value,
  	mail: mailElem.value,
  	foto: fotoElem.value
  })
  rerender();
});

function rerender(){
	worksheetElem.innerText = '';
	for (let i = 0; i< worksheet.length; i++){
		const card = document.createElement('div');
		const closeElem = document.createElement('div');
		const c_nameElem = document.createElement('p');
		const c_surnameElem = document.createElement('p');
		const c_mailElem = document.createElement('p');
		const c_fotoElem = document.createElement('div');

		closeElem.addEventListener('click', () =>{
			worksheet = worksheet.filter(elem => elem.surname !== worksheet[i].surname);
			rerender();
		});

		card.addEventListener('dblclick', () =>{
			 if (c_nameElem.innerText == '************') {
			 	c_nameElem.innerText = worksheet[i].name;
		c_surnameElem.innerText = worksheet[i].surname;
		c_mailElem.innerText = worksheet[i].mail;
		c_fotoElem.style.backgroundImage = `url("${worksheet[i].foto}")`;
			 }else{
			  c_nameElem.innerText = '************';
				c_surnameElem.innerText = '************';
				c_mailElem.innerText = '************';
				c_fotoElem.style.backgroundImage = `url(img/unnamed.jpg)`;
			}
		});

		c_fotoElem.classList.add('foto');
		card.classList.add('card');
		closeElem.classList.add('close');

		card.append(c_nameElem, c_surnameElem, c_mailElem, c_fotoElem, closeElem);
		worksheetElem.appendChild(card);
		c_nameElem.innerText = worksheet[i].name;
		c_surnameElem.innerText = worksheet[i].surname;
		c_mailElem.innerText = worksheet[i].mail;
		closeElem.innerText = '✖';
		c_fotoElem.style.backgroundImage = `url("${worksheet[i].foto}")`;
	}
}