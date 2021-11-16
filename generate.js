// Password Generator
// Elements
const result = document.getElementById('result');
let finalPassword = [];
// Password Lowercase
function getRandomLower() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}
// Password Uppercase
function getRandomUpper() {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}
// Password Numbers
function getRandomNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}
// Password Symbols
function getRandomSymbol() {
    const symbols = "~!@#$%^&*()_+`-=<>?';:[]{}";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
// Password Components
let lowercase = getRandomLower();
let uppercase = getRandomUpper();
let number = getRandomNumber();
let symbol = getRandomSymbol();

// Password Function
// character count 8-128
// lower case upper case num and special
// at least one character type is required
// create random password
function randomize() {
    finalPassword = [];
    let desiredLength = prompt(`Choose password length of 8 to 128.`);
    let desiredUpper = confirm(`Would you like uppercase letters?`);
    let desiredNumber = confirm(`Would you like numbers?`);
    let desiredSymbol = confirm(`Would you like symbols?`);
    // Length
    if (isNaN(desiredLength)) {
        desiredLength = prompt('Length must be a number from 8-128');
        if (isNaN(desiredLength)) {
            desiredLength = prompt('Please confirm a number from 8-128.');
        }
    }
    if (desiredLength < 8 || desiredLength > 128) {
        desiredLength = prompt('Please choose a length between 8-128.');
        if (desiredLength < 8) {
            desiredLength = prompt('Password must be character length of between 8-128.');
            if (desiredLength < 8) {
                alert('Password is too short.');
                return;
            }
        }
    }
    
    if (desiredLength > 128) {
        desiredLength = prompt('Password must be between 8 and 128 characters.');
        if (desiredLength > 128) {
            alert('Password is too long.');
            return;
        }
    }
        // Desired Length
    for (let i = 0; i < desiredLength; i++) {
        // Lowercase
        if (lowercase) {
            finalPassword.push(getRandomLower());
        }
        // If Check Numbers
        if (desiredNumber) {
            const finalNumber = getRandomNumber()
            finalPassword.push(finalNumber);
        }
        // If Check Uppercase 
        if (desiredUpper) {
            const finalUpper = getRandomUpper()
            finalPassword.push(finalUpper);
        }
        // If Check Symbols
        if (desiredSymbol) {
            const finalSymbol = getRandomSymbol()
            finalPassword.push(finalSymbol);
        }
        // Randomize Order of Array
        function shuffleArray(array) {
            let curId = array.length;
            while (0 !== curId) {
                let randId = Math.floor(Math.random() * curId);
                curId -= 1;
                let tmp = array[curId];
                array[curId] = array[randId];
                array[randId] = tmp;
            }
            return array;
        }
        shuffleArray(finalPassword);
    }
    // Slices Result to Defined Length
    let x = finalPassword.slice(0, desiredLength);
    // Insert finished password into HTML 
    result.innerText = x.join('');

} /* End of randomize() Function */

