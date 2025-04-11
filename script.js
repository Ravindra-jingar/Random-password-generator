const passwordBox = document.querySelector("#password");
const length = 8;
const upperCase = "ABCDEFHIJLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890"
const symbol = "@#$%&!?";
const allChars = upperCase + lowerCase + numbers + symbol;
function createPassword(){
let password = "";
password += upperCase[Math.floor(Math.random()*upperCase.length)];
password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
password += numbers[Math.floor(Math.random()*numbers.length)];
password += symbol[Math.floor(Math.random()*symbol.length)];

while(length > password.length){
    password += allChars[Math.floor(Math.random()*allChars.length)];
}
passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")}