// Password generator in JS
function generatePassword(length = 12){
    const upperCase =  'ABCDEFGHOJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*(){}_-:;,.?<>{}';
    const allChars = upperCase + lowerCase + numbers + specialChars;
    let password = [];
    password.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    password.push(numbers[Math.floor(Math.random() * numbers.length)]);
    password.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
    for(let i = password.length; i < length; i++){
        password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }
    password = password.sort(() => Math.random() - 0.5);
    return password.join('');
}
const newPassword = generatePassword();
console.log('Generated Password: ', newPassword);