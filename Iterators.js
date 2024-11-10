//Using iteration methods, performs a specified action for each element in the array
const artists = ['Picasso','Kahlo','Matisse','Utamaro'];

artists.forEach(artist => {
    console.log(artist + ' is one of my favourite artists.');
})

//.maps example calls a defined callback function on each element in the array, and returns an array that contains the results
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
    return number * number;
})

console.log(squareNumbers);

//.filter returns the elements in the array that meet the conditions specified in the callback function
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
})

console.log(onlyNumbers);

//The .forEach() method
//fruits example
const fruits = ['apple', 'banana', 'peach', 'pear'];

fruits.forEach(fruit => {
    console.log('I want to eat a ' + fruit);
})

//Another way of logging fruit
fruits.forEach(fruit => console.log('I want to eat a ' + fruit));

//maps 
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

//secret message array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

//Creating the smallNumbers array below:
//const smallNumbers = bigNumbers.map(num => num/100);

//console.log(smallNumbers);

//the .filter method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})


// The .findIndex() method
//calling find index will return the index of the first element that evaluates to true in the callback function

const jumbledNums = [123, 25, 78, 5, 9]; //an array that contains numbers 

const lessThanTen = jumbledNums.findIndex(num => { //declaring a new variable that stores the returned index number from invoking .findIndex() //Callback function is an arrow function that has a single parameter, num. Each element from jumbled array will be passed to this function as an argument 
  return num < 10; //is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition 
})

console.log(lessThanTen); //output is 3 
console.log(jumbledNums[3]); //output is 5 

//Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal2 = animals2.findIndex(animal => {
  return animal === 'elephant';
})

//Let’s see if we can find the index of the first animal that starts with the letter 's'.
//Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

const startsWithS = animals2.findIndex(animal => {
  return animal[0] === 's' ? true : false; //conditional ternary operator that returns true if the first character is 's' and false otherwise
})

//The ..reduce() method
const numbers1 = [1, 2, 4, 10];
const summedNumbers = numbers1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100)

console.log(summedNumbers);

//Example of reduce 
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The current value of accumulator: ' + accumulator);
  console.log('The current value of currentValue: ' + currentValue);
  return accumulator + currentValue;
}, 100) //you can add a second argument to reduce so the accumulator starts at that value

console.log(newSum);

//Testing this code using the docs to support
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords2 = words.filter(word => {
  return word.length > 5;
})
console.log(interestingWords2);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords2.every((word) => {
  return word.length > 5;
 } ));
