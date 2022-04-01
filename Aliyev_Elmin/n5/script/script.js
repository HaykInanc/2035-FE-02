const formElem = document.querySelector('form')
const nameElem = formElem.input_name
const lastnameElem = formElem.input_lastname
const mailElem = formElem.input_mail
const imageElem = formElem.input_image
const productsElem = document.querySelector('.products')

formElem.addEventListener('submit', event => {
	event.preventDefault()
	
	const divCards = document.createElement('div')
	const h2Name = document.createElement('h2')
	const h2Lastname = document.createElement('h2')
	const pMail = document.createElement('p')
	const divImg = document.createElement('div')
	const divClose = document.createElement('div')

	divClose.addEventListener('click', () => divCards.remove())
	divCards.addEventListener('dblclick', () => {
		h2Name.innerText = '⚹⚹⚹⚹'
		h2Lastname.innerText = '⚹⚹⚹⚹'
		pMail.innerText = '⚹⚹⚹⚹'
		divImg.style.backgroundImage = `url('media/ttt.png')`
	})


    productsElem.appendChild(divCards)
    divCards.classList.add('cards')
    divCards.append(h2Name, h2Lastname, pMail, divImg)
    divImg.classList.add('cards_img')
    divCards.appendChild(divClose)
    divClose.classList.add('close')


    h2Name.innerText = nameElem.value
    h2Lastname.innerText = lastnameElem.value
    pMail.innerText = mailElem.value
    divImg.style.backgroundImage = `url('${imageElem.value}')`
    divClose.innerText = '✖'

    


})