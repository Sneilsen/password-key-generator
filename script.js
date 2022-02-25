

function generatePassword() {
  // Character arrays
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", "<", ">", "=", "_", "~"];
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberChars = [ "1", "2", "3", "4", "5", "6", "7", "8", "9","0"];
  var openArray = [];
  var passwordLength = getPasswordLength();

  var charTypeSelected = true;
    while (charTypeSelected == true) {
    var specialCharacters = getPasswordOptions("special");
    var lowerCase = getPasswordOptions("lowercase");
    var upperCase = getPasswordOptions("uppercase");
    var numberCharacters = getPasswordOptions("number");
    
    if ((specialCharacters) || (lowerCase) || (upperCase) || (numberCharacters)) {
      charTypeSelected = false;
      console.log(charTypeSelected);
    } else {
      alert("Please select at least one character variable.");
    }
  }

  // use concat to build the array to avaid code repetition

  if (specialCharacters) {
    openArray = openArray.concat(specialChars);
  }
  if (lowerCase) {
    openArray = openArray.concat(lowerCaseLetters);
    console.log(openArray);
  }
  if (upperCase) {
    openArray = openArray.concat(upperCaseLetters);
  }
  if (numberCharacters) {
    openArray = openArray.concat(numberChars);
      console.log(openArray);
  }

  var getGeneratedPassword = "";
  
  for (var i = 0; i < passwordLength; i++) {
    getGeneratedPassword += openArray[Math.floor(Math.random() * (openArray.length))];
  }
  return getGeneratedPassword;
}
function getPasswordLength() {
  var inputEvent = 0;
  while ((inputEvent < 8) || (inputEvent > 12)) {
    inputEvent = parseInt(prompt("Enter the number of characters between 8 and 12: "));
    console.log(inputEvent);
    
    // number value entered
    if (isNaN(inputEvent)) {
      // 
      inputEvent = 0;
    }
  }
  return inputEvent;
}

//password character input 
function getPasswordOptions(currentOption) {

  var inputMessage = (' Include '.concat(currentOption));
  inputMessage = inputMessage.concat(' characters (yes or no)?');
  console.log(inputMessage);
  
    inputEvent = (prompt(inputMessage)); 
    inputEvent = inputEvent.toLowerCase();
    if (inputEvent == "yes") {
      return true;
    } else if (inputEvent == "no") {
      return false;
    }
  }
// }
// provided starter text left unchanged

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
