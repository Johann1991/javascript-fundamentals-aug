// length
const text = 'Hello world, this is, JS fundamentals!';
console.log('Length of the text: ', text.length);

// Uppercase
const upperCaseText = text.toUpperCase();
console.log('Uppercase: ', upperCaseText);

// lowercase
const lowerCaseText = text.toLowerCase();
console.log('Lowercase: ', lowerCaseText);

// indexOf
const index = text.indexOf('world');
console.log('Index of "world" : ', index);

// slice()
const sliceText = text.slice(6, 12);
console.log('Sliced text: ', sliceText);

// split()
const wordArray = text.split(' ');
console.log('Words Array: ', wordArray);

// replace()
const replaceText = text.replace('world', 'everyone');
console.log('Replaced text: ', replaceText);

// Template literals
const firstName = 'Alice';
const greeting = `Hello, ${firstName}! Welcome to JavaScript!`;
console.log(greeting);

// multiline strings
const multiLineText = 
`This is a multi line string
and can be typed
over multiple lines
`
console.log(multiLineText);

