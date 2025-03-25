   
   
 let text; 
 function createPassword(){
     text = document.getElementById('text');
     let UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     let lowercase = 'abcdefghijklmnopqrstuvwxyz';
     let number = "1234567890";
     let symbol = '#$?~|%(){}[]_&*/><.,|';
     const allChar = UPPERCASE + lowercase + number + symbol;   
let passwordLength = 10;
let password = " ";
password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
password += lowercase[Math.floor(Math.random() * lowercase.length)];
password += number[Math.floor(Math.random() * number.length)];
password += symbol [Math.floor(Math.random() * symbol.length)];

while(passwordLength > password.length){
 password += allChar[Math.floor(Math.random()* allChar.length)];
}
text.value = password;
}
function copyPassword(){
text.select();
document.execCommand('copy')
}