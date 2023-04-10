const myButton = document.querySelector('.myButton');
const buttonOutput = document.querySelector('.buttonOutput');
const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
myButton.addEventListener('click', () => {
    buttonOutput.textContent = `Thank you ${fName.value} ${lName.value} for your contribution `
});

const password = document.querySelector('.password');
const passConfirm = document.querySelector('.password-confirm');
const passError = document.querySelector('.error');

function passwordCheck () {
    if (password.value !== passConfirm) {
        passError.textContent = '*Passwords do not match'
    } else {false;}
}

passConfirm.addEventListener('keyup', passwordCheck)
