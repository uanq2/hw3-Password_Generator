// Array of special characters to be included in password
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of uppercase characters to be included in password
let upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array of lowercase characters to be included in password
let lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let allChars = specialCharacters.concat(numericCharacters, upperCasedCharacters, lowerCasedCharacters);

//function to prompt user for selection
function promptUser() {
  let passwordLength = window.prompt('How many characters do you want the password to be? (8 - 128)');
  if (passwordLength < 8) {
		alert('Please choose between 8 - 128 characters.');
		return;
	}
	if (passwordLength > 128) {
		alert('Please choose between 8 - 128 characters.');
		return;
	}
  let specialChar = window.confirm('Do you want special characters?');
  let numericChar = window.confirm('Do you want numeric characters?');
	let lowerCase = window.confirm('Do you want lower cased characters?');
	let upperCase = window.confirm('Do you want upper cased characters?');
	
	if (specialChar != true && numericChar != true && lowerCase != true && upperCase != true) {
		alert('Please choose at least one character');
		return;
	}

	let options = {
    length: passwordLength,
    specialChar: specialChar,
    number: numericChar,
		lowerChar: lowerCase,
		upperChar: upperCase
	};
	return options;
}

// function to randomly select characters from each array
function allChar(array) {
	const index = Math.floor(Math.random() * array.length);
	const indexEl = array[index];
	return indexEl;
}
// function to generate the password based on the user's choices
function generatePassword() {
	const userOptions = promptUser();
	console.log(userOptions);
	let password = [];
  let userChoices = [];
  
  if (userOptions.specialChar === true) {
		userChoices.push(...specialCharacters);
	}

	if (userOptions.number === true) {
		userChoices.push(...numericCharacters);
	}

	if (userOptions.lowerChar === true) {
		userChoices.push(...lowerCasedCharacters);
	}

	if (userOptions.upperChar === true) {
		userChoices.push(...upperCasedCharacters);
	}

// function to randomly choose characters depending on the user's password length
	for (let i = 0; i < userOptions.length; i++) {
		password.push(allChar(userChoices));
	}
	console.log({ password, userChoices });
	return password.join('');
}

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);