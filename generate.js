//Generator Elements
const password = document.querySelector('#password');
const button = document.querySelector('button');

//Data for Password Generation //
let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:"<>?|;';
let passwordLength = 8;
let passwordValue = '';

//Creating Password Generation //
const createPassword = () => {
    passwordValue = ''; 
    let desiredLength =  prompt("Choose password length between 8 - 128");
    if (isNaN(desiredLength)) {
        desiredLength =  prompt("Must be a number above 8 and below 128");
    }
    console.log(desiredLength)
   


    for (let i = 0; i < passwordLength; i++) {
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number, number + 1);
}

password.value = passwordValue;
}

//Events
button.addEventListener('click',createPassword);