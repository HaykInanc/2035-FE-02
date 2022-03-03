const formElem = document.forms[0];
const firstnameElem = formElem.firstname;
const lastnameElem = formElem.lastname;
const emailElem = formElem.email;
const imageElem = formElem.image;
const personalElem = document.querySelector('#personal');
const personal = [];

formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    const card = document.createElement('div');
    const closeElem = document.createElement('div');
    const fnElem = document.createElement('p');
    const lsElem = document.createElement('p');
    const pElem = document.createElement('p');
    const imgElem = document.createElement('div');

    closeElem.addEventListener('click', () => card.remove());

    imgElem.classList.add('person_img');
    card.classList.add('card');
    closeElem.classList.add('close');

    card.append(fnElem, lsElem, pElem, imgElem, closeElem);
    personalElem.appendChild(card);
    fnElem.innerText = firstnameElem.value;
    lsElem.innerText = lastnameElem.value;
    pElem.innerText = emailElem.value;
    closeElem.innerText = '✖';
    imgElem.style.backgroundImage = `url("${imageElem.value}")`;


    card.addEventListener('dblclick', (event) => {
        fnElem.innerText = '★★★★★★★★★★';
        lsElem.innerText = '★★★★★★★★★★';
        pElem.innerText = '★★★★★★★★★★';
        imgElem.style.backgroundImage = `url("https://www.k24klik.com/blog/wp-content/uploads/2015/12/top-secret-sesi-1.png")`;       
    });
});


















































 // let personal = [];

 // formElem.addEventListener('submit', event => {
 // 	event.preventDefault();
 // 	personal.push({
 // 		firstname: firstnameElem.value,
 // 		lastname: lastnameElem.value,
 // 		email: emailElem.value,
 // 		img_url: imageElem.value,
 // 	})
 // 	rerender();
 // })

 // function rerender(){
 // 	personalElem.innerText = '';
 // 	for (let i = 0; i < personal.length; i++){
 // 		const card = document.createElement('div');
 // 		const fnElem = document.createElement('h2');
 // 		const lnElem = document.createElement('h2');
 // 		const pElem = document.createElement('p');
 // 		const imgElem = document.createElement('div');
 //        const closeElem = document.createElement('div');

 // 		closeElem.addEventListener('click', () =>{
 // 			personal = personal.filter(elem => elem.title !== personal[i].title);
 // 			rerender();
 // 		});

 // 		imgElem.classList.add('person_img');
 // 		card.classList.add('card');
 // 		closeElem.classList.add('close');

 // 		card.append(fnElem, lnElem, pElem, imgElem. closeElem);
 // 		personalElem.append(card);
 // 		fnElem.innerText = personal[i].firstname;
 // 		lnElem.innerText = personal[i].lastname;
 // 		pElem.innerText = personal[i].email;
 // 		closeElem.innerText = '✖';
 // 		imgElem.style.backgroundImage = `url("${imageElem.value}")`;
 // 	}
 // };