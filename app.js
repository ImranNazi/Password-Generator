const passwordBox = document.getElementById("password");
const length = 12; //password length
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@!#$%^&*()_+{}[]></-+=";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let passwordd = "";
  passwordd += upperCase[Math.floor(Math.random() * upperCase.length)];
  passwordd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  passwordd += number[Math.floor(Math.random() * number.length)];
  passwordd += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > passwordd.length) {
    passwordd += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = passwordd;
}
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
