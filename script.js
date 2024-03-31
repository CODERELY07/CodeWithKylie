// script.js
const usernameElem = document.getElementById('username');
const passwordElem = document.getElementById('password');
const button = document.getElementById('login_btn');
const form = document.getElementById('login_form');

function displayErr(input,message){
    const errorElem = document.createElement('p');
    errorElem.textContent = message;
    errorElem.classList.add('error');
    input.parentNode.insertBefore(errorElem,input.nextSibling);
}
function removeErr(input) {
    const error = input.parentNode.querySelector('.error');
    if (error) {
        error.parentNode.removeChild(error);
    }
}
form.addEventListener("submit",(events)=>{
    events.preventDefault();

    removeErr(usernameElem);
    removeErr(passwordElem);
    if(usernameElem.value == ''){
        displayErr(usernameElem,"* Please Enter your username");
    }
    if(passwordElem.value == ''){
        displayErr(passwordElem, "* Please Enter your password");
    }
    if(passwordElem.value.trim().length < 6 && passwordElem.value.trim().length > 0){
        displayErr(passwordElem, " * Atlease 6 characters");
    }
   
    //default user username and password
    const username = "Mark Daliva";
    const password = "daliva12345";

    if(usernameElem.value.trim() != username && usernameElem.value.trim() != '' ){
        displayErr(usernameElem, "* Incorrect username");
    }
    if(passwordElem.value.trim() != password &&
    passwordElem.value.trim() != ''){
        displayErr(passwordElem, "* Incorrect password");
    }
    if(usernameElem.value.trim() == username || passwordElem.value.trim() == password){
        alert("succesfully Login");
        usernameElem.value = '';
        passwordElem.value = '';
    }
});




