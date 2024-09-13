// const number = 0;

// if(number > 10){
//     console.log('The number is greater than 0');
// }else if(number < 0){
//     console.log('The number is NOT greater than 0');
// }else{
//     console.log('The number is 0');
// }

// const day = 7;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
// }

// console.log("The day is: ", dayName);

// const sum = 10 + 5;

// let total = 15; 
// let message;

// switch(sum){
//     case 15:
//         message = "10 is greater than 5";
//         break;
//     case 10:
//          message = "10 is greater than 5";
//         break;
// }

// console.log(message);

// Loops 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for(let i = 0; i < numbers.length; i++) {
//     console.log(i);
//     sum += numbers[i];
// }

// console.log('Sum of the array elements:', sum);

// let n = 1;

// while(true) {
//     if(n % 3 === 0 && n % 5 === 0){
//         console.log(n);
//         console.log('First number divisible by 3 and 5 is:', n);
//         break;
//     }
//     console.log(n);
//     n++;
// }

// do while loop
let userInput;

do{
    userInput = prompt('Enter a non-empty string');
}while(!userInput){
    console.log('You entered: ', userInput);
}
