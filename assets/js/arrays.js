const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);

const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// console.log('First fruit: ', fruits[0]);
// fruits[1] = 'blueberry'
// console.log('Modified Fruits: ', fruits);

// fruits[3] = 'date';
// console.log('Added a new element: ', fruits);
// console.log('Number of fruits: ', fruits.length);

// fruits.push('watermelon');
// console.log('After push: ', fruits);

// const lastFruit = fruits.pop();
// console.log('Popped fruit: ', lastFruit);
// console.log(fruits);

// fruits.unshift('fig');
// console.log(fruits);

// const theFirstFruit = fruits.shift();
// console.log('After unshift: ', theFirstFruit);
// console.log('Final list:', fruits);

// const someFruits = fruits.slice(1, 3);
// console.log('Sliced fruits: ', someFruits);

// fruits.splice(2, 1, 'dragonfruit', 'elderberry');
// console.log('After splice: ', fruits)

// fruits.forEach(function(fruits, index) {
//     console.log(`Fruit at index ${index}:`, fruits)
// })

// const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log('Uppercase fruits: ', upperCaseFruits);
// console.log('Original array: ', fruits);

// const longNamedFruits = fruits.filter(fruit => fruit.length > 5);
// console.log('Long named fruits: ', longNamedFruits);

const totalLength = fruits.reduce((accumulator, fruit) => accumulator + fruit.length, 0);
console.log('Total length of all fruit names: ', totalLength);