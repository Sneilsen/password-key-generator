// Assignment Code
var generateBtn = document.querySelector("#generate");


//  arrays for character generation  //
var specialCharacters = ['~','!','@','#','$','%','^','&','*','-','=','+','<','>','?']
var numberCharacters = ['1','2','3','4','5','6','7','8','9','0']
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'] 
var uppeerCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']





function getPasswordOptions() {
  var length = parseInt(
    prompt('your password should contain between 8 and 12 chacaters,  enter a number')
  );

//bottom//
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}