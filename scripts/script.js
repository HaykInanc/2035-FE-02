/*Задание
В данном задании вы отработаете процесс добавления данных через форму. 

1) необходимо создать форму, которая принимает данные о сотруднике. В этой форме должны быть поля для имени, 
   фамилии, электронной почте и ссылка на фото. При нажатии на кнопку добавить данные из формы должны 
   использоваться для формирования карточки, которая в итоге добавляется на страницу.
2) Добавьте крестик, по нажатию на который карточка удаляется
3) При двойном клике на карточку данные должны заменяться на звездочки, 
   а фото меняться на картинку с силуэтом (картинку с силуэтом можно использовать единую для всех карточек).

Не забудьте сделать pull request в проет https://github.com/HaykInanc/2035-FE-02*/

const formElem = document.forms[0];
const nameElem = formElem.name;
const lastnameElem = formElem.lastname;
const emailElem = formElem.email;
const photoElem = formElem.photo;
const infoListElem = document.querySelector('#infoList');

formElem.addEventListener('submit', event => {
   event.preventDefault();

   const cardElem = document.createElement('div');
   const pNameElem = document.createElement('p');
   const pLastNameElem = document.createElement('p');
   const pEmailElem = document.createElement('p');
   const imgPhotoElem = document.createElement('div');
   const closeElem = document.createElement('div');

   cardElem.append(pNameElem, pLastNameElem, pEmailElem, imgPhotoElem, closeElem);
   infoListElem.appendChild(cardElem);

   pNameElem.innerText = nameElem.value;
   pLastNameElem.innerText = lastnameElem.value;
   pEmailElem.innerText = emailElem.value;
   closeElem.innerText = '❌';

   imgPhotoElem.style.backgroundImage = `url("${photoElem.value}")`;

   cardElem.classList.add('card');
   closeElem.classList.add('close');
   imgPhotoElem.classList.add('avatar');

   closeElem.addEventListener('click', () => {
      cardElem.remove();
   })

   cardElem.addEventListener('dblclick', () => {
      pNameElem.innerText = '✱✱✱✱✱✱';
      pLastNameElem.innerText = '✱✱✱✱✱✱';
      pEmailElem.innerText = '✱✱✱✱✱✱';
      imgPhotoElem.style.backgroundImage = `url(./media/incognito.png)`;
   })
})


