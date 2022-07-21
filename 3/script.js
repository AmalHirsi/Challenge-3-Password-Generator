// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericcharacters = "0123456789";
var lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var specialcharacters = "!@£$%^&*()_+-={}[]:;'|\<,>.?/";
var passwordlength;

function lenth () {
passwordlength = prompt ("How long do you want your password to be, between 8-128 characters");
if (passwordlength < 8 || passwordlength > 128) {
  alert ("Password must be between 8-128 characters long")}
  else {alert "The password you have entered is + passwordlength + characters long."}

  lowercasecharacters = prompt ("Do you want to include lowercase characters in your password? Answer yes or no.")
if (lowercasecharacters === "yes") {
  alert ("Your password will include a lowercase character")
  lowercasecharacters = true; }
else (lowercasecharacters === "no") {
alert ("Your password will not include a lowercase character")
lowercasecharacters = false;
}
}
function uppercase () {
uppercasecharacters = prompt ("Do you want to include uppercase characters in your password? Answer yes or no.")
if (uppercasecharacters === "yes") {
  alert ("Your password will include a uppercase character")}
  uppercasecharacters = true;}
else (uppercasecharacters === "no") {
alert ("Your password will not include a uppercase character")
uppercasecharacters = false;}
}

function number () {
numericcharacters = prompt ("Do you want to include a number in your password? Answer yes or no")
if (numericcharacters === "yes") {
  alert ("Your password will include a number.")
  numericcharacters = true;
}else (numericcharacters === "no"){
alert ("Your password will not include a number.")
numericcharacters = false;}
}

function special () {
if specialcharacters = prompt ("Do you want to include a special character in your password? Answer yes or no?")
(specialcharacters === "yes") {
  alert ("Your password will include a special character.")}
  specialcharacters = true;
else (specialcharacters === "no") {
alert ("Your password will not include a special character.")
specialcharacters = false;}
}

function generatePassword (length) {;
  for (var i = 0; i < length; i++) {
    results += characters.charAt (Math.floor(Math.random() * characters.legth));
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
