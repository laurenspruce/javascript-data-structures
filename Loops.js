//Loops programming tool that repeats a set of instructions until a specified condition (stopping condition) has been met. 
//Common phrase 'iterate' means to repeat

//Repeating tasks manually
//Just to show how cumbersome it would be if a repeated task required you to type out the same code every single time

//Create the variable vacationSpots, and assign its value to an array of three strings naming places you’d like to visit.
let vacationSpots = ['America', 'Japan', 'Canada'];
//Next, console.log() each item in vacationSpots. Since we don’t know loops yet, we have to console.log() each element in the array separately.
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//The for Loop
//The classic Syntax 
for (let counter = 0; counter < 4; counter++) { //1.)) initialisation, declare the iterator variable 2.)) stopping condition which iterator variable is evalutated against (true, code will carry on, false, the code will stop)
    //3.))an iteration statement is used to update the iterator value on each loop
    console.log(counter);
}

//for loops from 5 to 10 and logs each number to the console.
for (let counter2 = 5; counter2 < 11; counter2++) {
    console.log(counter2);
}

//Looping in Reverse
//set the iterator to the highest desired value
//set the stopping condition for when the iterator is less than the desired amount
//iterator should decrease in intervals after each condition

//for loop counting back from 10 to 0
for (let counter3 = 10; counter3 >= 0; counter3--) {
    console.log(counter3);
}
//for loop below looping from 3 to 0
for (let counter4 = 3; counter4 >= 0; counter4--) {
    console.log(counter4);
}

//looping through arrays 
//handy for iterating over data structures
//use a for loop to perform same operation on each element on an array
//Arrays hold lists of data, to loop through we use arrays .length property in it's condition

//example
const animals = ['Grizzly Bear', 'Sloth', 'Zebra', 'Sea Lion'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
//another one
const food = ['Pizza', 'Burger', 'Chips', 'Chicken Nuggets'];
for (let j = 0; j < food.length; j++) {
    console.log(food[j]);
}

//for loop that iterates through vacationSpots array using k as the iterator variable
const vacationSpots2 = ['Bali', 'Paris', 'Tulum'];
for (let k = 0; k < vacationSpots2.length; k++) {
    console.log('I would love to visit ' + vacationSpots2[k]);
}

//nested loops 
//a loop running inside of another loop= nested loop
//one use= compare the elements in 2 arrays
//for each round of the outer for loop, the inner for loop will run completely

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];

for (let i = 0; i < myArray.length; i++){
    for (let j = 0; j < yourArray.length; j++){
        if (myArray[i] === yourArray[j]) {
            console.log('Both arrays have the number: ' + yourArray[j]);
        }
    }
}

//another example
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

//while loops
//converting a for loop into a while loop

//A FOR loop that prints 1, 2, and 3 
for (let counterOne = 1; counterOne < 4; counterOne++) {
    console.log(counterOne);
}

// A WHILE loop that prints 1, 2, and 3
let counter2 = 1;
while (counter2 < 4) {
    console.log(counter2);
    counter2++;
}

//another example of while loop
const cards = ['diamond', 'spade', 'heart', 'club'];
//creating variable currentCard
let currentCard = '';

//creating the while loop
while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)]; //give us random number from 0 to 3. Use this number to index the cards array, and assign it the value of currentCard to a random element from that array. 
    console.log(currentCard);
}

//Do... While Loops
//Sometimes want a piece of code once, and then loop based on a specific condition after it's initial run. This is where do... while statement comes in. 
//Example Syntax 
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

//another example
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

//A do while loop with stopping conditions that evaluates to false
do {
    console.log(firstMessage)
} while (true === false);

//A while loop with a stopping condition that evaluates to false
while (true === false) {
    console.log(secondMessage);
}

//Another example
let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

//do while loop
do {
    cupsAdded++;
    console.log(cupsAdded + ' cup was added!');
} while (cupsAdded < cupsOfSugarNeeded);

//Break keyword
//It allows programs to 'break' out of the loop from within the codes block
for (let i = 0; i < 99; i++){
    if (i > 2) {
        break;
    }
    console.log('Banana');
}

console.log('Orange you glad I broke out of that loop!');
//breaks can be helpful when we are looping through large data structures, with breaks, we can add test conditions besides the stopping condition, and exit the loop when they're met

//break examples
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if(rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
}

console.log("And if you don't know, now you know.");

//nested loops
const animal = 'cat';

//iterates over each character in the string 'cat' and prints the character followed by the numbers 1,2,3 from the inner loop
for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
    for (let j = 1; j < 4; j++) {
        console.log(j);
    }
}

//example
let socialMedia = ['Facebook', 'Instagram', 'Twitter'];

for (let socialMediaIndex = 0; socialMediaIndex < socialMedia.length; socialMediaIndex++) {
    console.log(socialMedia[socialMediaIndex]);
}