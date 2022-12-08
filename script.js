
var generateBtn = document.querySelector("#generate");


const numericCharacters = "0123456789";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const specialCharacters = "!@£$%^&*()_+-={}[]:;'|\<,>.?/";



function generatePassword() {
  let passwordLength = []

var password = prompt ("How long do you want your password to be, between 8-128 characters");
if (password< 8 || password > 128) {
  alert ("Password must be between 8-128 characters long")
  //generatePassword()
} else if (password === '' || isNaN(password)) {
    alert ("The password you have entered is + passwordlength + characters long.")} 
    //generatePassword();

  var lowerCase = prompt ("Do you want to include lowercase characters in your password? Answer yes or no.")

  if (lowerCase === "true") {
  passwordLength = passwordLength.concat(lowercaseCharacters);}


var upperCase = prompt ("Do you want to include uppercase characters in your password? Answer yes or no.")
if (upperCase === "true") {
  alert ("Your password will include a uppercase character");
  passwordLength = passwordLength.concat(uppercaseCharacters);}


var numberChar = prompt ("Do you want to include a number in your password? Answer yes or no")
if (numberChar === "true") {
  alert ("Your password will include a number.");
  passwordLength = passwordLength.concat(numericCharacters);}

  var specialChar= prompt ("Do you want to include a special character in your password? Answer yes or no?")
if (specialChar === "true") {
  alert ("Your password will include a special character.");
  passwordLength = passwordLength.concat(specialCharacters);}
if (lowerCase == false && upperCase == false && numberChar == false && specialChar) {
  alert('Select atleast one criteria');
} 
console.log(passwordLength)



var results = ''

  for ( var i = 0, n = passwordLength.length; i < parseInt(passwordLength); i++) {
    results += passwordLength(Math.floor(Math.random() * characters.legth));
  }
  return results;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

