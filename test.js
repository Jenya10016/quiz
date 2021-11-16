var generateBtn = document.querySelector("#generate");
// //Generator Elements
// const password = document.querySelector('#password');
// const button = document.querySelector('button');

// //Data for Password Generation //
// form.addEventListener('submit', e => {
//     e.preventDefault()
let numberCharacters = '0123456789;';
let lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialCharacters = '!@#$%^&*()_+{}:"<>?|;';
})

function generatePassword(numberCharacters, lowercaseCharacters, uppercaseCharacters, specialCharacters) {
    let passwordValue = '';
    // 8-128
    // lower case upper case num and special
    // at least one character type is required
    // create random password
    let desiredLength =  prompt("Choose password number length between 8 - 128");
    if (isNaN(desiredLength)|| (desiredLength < 8 || desiredLength > 128)) {
        alert("Must be a number above 8 and below 128");
        return "Must be a number between 8 and 128"
    }
    {let hasNumber = confirm("Would you like numbers?");
    let hasUppercase = confirm("Would you like uppercase letters?");
    let hasLowercase = confirm("Would you like lowercase letters");
    let hasSpecial = confirm("Would you like special characters?");
    }



// Randomize Order of Array
//       function shuffleArray(array) {
//         let curId = array.length;
//         while (0 !== curId) {
//             let randId = Math.floor(Math.random() * curId);
//             curId -= 1;
//             let tmp = array[curId];
//             array[curId] = array[randId];
//             array[randId] = tmp;
//         }
//         return array;
//     }
//     shuffleArray(finalPassword);
// }
// // Slices Result to Defined Length
// let x = finalPassword.slice(0, desiredLength);
// // Insert finished password into HTML
// result.innerText = x.join('');

 /* End of randomize() Function */

    // passwordValue = "test"




    for (let i = 0; i < desiredLength; i++) {
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number, number + 1);
}

    // return passwordValue





// Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);













