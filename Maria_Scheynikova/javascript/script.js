const formElem = document.forms[0];
const nameInputElem = formElem.name;
const lastNameInputElem = formElem.lastname;
const emailInputElem = formElem.email;
const fotoInputElem = formElem.foto;
const title = document.querySelector(".sectionTitle");

const employeesElem = document.querySelector('#employees');
let employeesList = [];


formElem.addEventListener("submit", event =>{
    event.preventDefault();
    employeesList.push({
        foto: fotoInputElem.value,
        name: nameInputElem.value,
        lastname: lastNameInputElem.value,
        email: emailInputElem.value,
    });
    render();
});

function render() {
    employeesElem.innerText = "";
    for (let i = 0; i < employeesList.length; i++){
        const personCard = document.createElement("div");
        const personFoto = document.createElement("div");
        const personInfo = document.createElement("div");
        const personName = document.createElement("h2");
        const personLastname = document.createElement("h3");
        const personEmail = document.createElement("p");
        const cardClosure = document.createElement("div");

        cardClosure.addEventListener("click", () => {
            employeesList = employeesList.filter(card => employeesList.indexOf(card) !== employeesList.indexOf(employeesList[i]));
            render();
            section();
        });
        section();
        personCard.classList.add("person");
        personFoto.classList.add("personFoto");
        personInfo.classList.add("info");
        personName.classList.add("nameTitle");
        personLastname.classList.add("lastnameTitle");
        personEmail.classList.add("emailTitle");
        cardClosure.classList.add("closure");
        
        cardClosure.setAttribute("data-text", "Dismiss!");

        personInfo.append(personName, personLastname, personEmail);
        personCard.append(cardClosure, personFoto, personInfo);

        employeesElem.appendChild(personCard);

        cardClosure.innerText = "❌";
        personFoto.style.backgroundImage = `url("${employeesList[i].foto}")`;
        personName.innerText = employeesList[i].name;
        personLastname.innerText = employeesList[i].lastname;
        personEmail.innerText = employeesList[i].email;

        //fotoInputElem.value = "";
        //nameInputElem.value = "";
        //lastNameInputElem.value = "";
        //emailInputElem.value = "";

        personCard.addEventListener("dblclick", ()=> { //анонимизированная карточка перестает быть такой после удаления другой карточки (список перезаписывается), как этого избежать?

            personFoto.style.backgroundImage = `url("https://realconsult.ru/assets/i/ai/4/3/3/i/2927274.jpg")`;
            personName.innerText = personName.innerText.replace(/[\s\S]/gmi, "*");        
            personLastname.innerText = personLastname.innerText.replace(/[\s\S]/gmi, "*");
            personEmail.innerText = personEmail.innerText.replace(/[\s\S]/gmi, "*");
        });

     }

}

function section() {
if (employeesList.length === 0) {
    title.innerText = "No employees this month...";
} else {
    title.innerText = "Here are employees of the month:";
}
}