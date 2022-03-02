const formElem = document.forms[0];
const nameElem = formElem.user_name;
const lastNameElem = formElem.user_lastname;
const emailElem = formElem.email;
const imageElem = formElem.image;
const usersElem = document.querySelector('#users');

formElem.addEventListener('submit',  event => {
    event.preventDefault();
    const card = document.createElement('div');
    const userName = document.createElement('span');
    const userLastname = document.createElement('span');
    const userEmail = document.createElement('a');
    const imgElem = document.createElement('div');
    const closeElem = document.createElement('div');

    closeElem.addEventListener('click', () => card.remove());

    imgElem.classList.add('users_img');
    closeElem.classList.add('close');
    card.classList.add('card');

    card.append(userName, userLastname, userEmail, imgElem, closeElem);
    
    usersElem.appendChild(card);
    
    function usersDate(){
        userName.innerText = nameElem.value;
        userLastname.innerText = lastNameElem.value;
        userEmail.innerText = emailElem.value;
        imgElem.style.backgroundImage = `url('${imageElem.value}')`;
    }

    usersDate();
     
    card.addEventListener('dblclick', () => {
        userName.innerText = '****';
        userLastname.innerText = '****';
        userEmail.innerText = '****';
        imgElem.style.backgroundImage = `url('https://us.123rf.com/450wm/metelsky/metelsky1809/metelsky180900220/109815466-man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector-illustration-.jpg?ver=6')`;   
    })

    card.addEventListener('click', () => {
        usersDate();   
    })
      
});