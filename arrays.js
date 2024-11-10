//Organising and storing is a foundational concept of programming. One way to organise data in real life is making lists
//Arrays are JS's way of making lists.
//Arrays can store any data type (including strings, numbers and booleans)
//Like lists, arrays are ordered, meaning each item has a numbered position. 
//What we will cover
//let concepts = ['creating arrays', 'array structures', 'array manipulation'];

//Creating an array
let newYearsResolutions = ['Lose weight', 'Learn coding', 'Eat more healthy'];
console.log(newYearsResolutions);


let hobbies = ['drawing','eating','sleeping'];
//Accessing elements at it's numbered index, the position
//Zero indexed meaning they start at 0 rather than 1
console.log(hobbies[1]);

let cities = ['New York','Beijing','London'];
console.log(cities[2]);

//Storing individual elements in arrays to variables
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
//printing the list item
console.log(listItem);
//accessing the third element in the array
console.log(famousSayings[2]);
//if trying to access an index beyond the last element ... it will print undefined 
console.log(famousSayings[3]);

//Update Elements
//Looked at accessing elements using their index, once you have access you can update it's value
let seasons = ['Winter', 'Spring', 'Summer', 'fall'];

//Updating the index
seasons[3] = 'Autumn';
console.log(seasons); //will print ['Winter', 'Spring', 'Summer', 'Autumn']

//Another example
let groceryList = ['Bananas', 'Apples', 'Eggs', 'Bread', 'Onions'];
groceryList[1] = 'Strawberries';
console.log(groceryList);

//Arrays with let and const
//let arrays can be reassigned, const cannot, however will remain mutable. (Meaning we can change the contents of a const array, but cannot reassign a new array or different value)

//let array
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
//const array
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

//reassigning ketchup to mayo
condiments[0] = 'Mayo';
//printing this
console.log(condiments);

//reassigning condiments to be a new array with single string
condiments = ['Mayo'];
//printing this
console.log(condiments);

//changing last value in utensils array to spoon
utensils[3] = 'Spoon';
//printing this
console.log(utensils);

//the .length property
//one of an arrays built in properties is length and it returns the number of items in the array
//access just like we do this with strings

const favMusic = ['Phonk', 'Dubstep', 'EDM', 'Country'];
//this is the .length property
console.log(favMusic.length);

//another example
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

//the .push() method -mutates the array-
//this is a JS built in method that make working with arrays easier. Specifically called on arrays to make common tasks like adding and removing elements more straightforward
//.push() allows us to add items to the end of the array. 
const itemTracker = ['item 0', 'item 1', 'item 2'];
//using the push method to add 2 new items
itemTracker.push('item 3', 'item 4');
//printing 
console.log(itemTracker);

//another example
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('clean worktops', 'clean the bathrooms');
console.log(chores);

//the .pop() method -mutates the array-
//removes the last item of the array

const newItemTracker = ['item 0', 'item 1', 'item 2'];
//storing the returned value in a variable to be used for later
const removed = newItemTracker.pop();
//printing the updated array
console.log(newItemTracker);
//printing the value which was removed
console.log(removed);

//another example
const newChores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
const removed2 = newChores.pop();
console.log(newChores);
console.log(removed2);

//More array methods
//Sometimes we don't want to mutate the original array, so we can use non-mutating array methods

//.shift() method which removes first item from array non-mutating
const newGroceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
//.shift() removing orange juice
newGroceryList.shift();
//print
console.log(newGroceryList);

//.unshift() adds a value to the start of your array
newGroceryList.unshift('popcorn');
//print
console.log(newGroceryList);

//.slice() method lists certain parts of the array non-mutatable
console.log(newGroceryList.slice(1,4));
//printing to show that slice() is non-mutating!
console.log(newGroceryList);

//.indexOf() can find the index of the given value like so: 
const pastaIndex = newGroceryList.indexOf('pasta');
console.log(pastaIndex);

//arrays and functions
//when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well
//this concept is called: pass-by-reference 
//since what we are passing to the function is a reference to where the variable memory is stored and changing the memory

//creating an array
const flowers = ['peony', 'daffodil', 'marigold'];
//creating a function
function addFlower(arr) {
    //using push function mutatable method to add lily to the end of the array 
    arr.push('lily');
}

//calling the method on that particular array
addFlower(flowers);

//printing to check the values were added. 
// Output: ['peony', 'daffodil', 'marigold', 'lily']
console.log(flowers);

//another example
const concept = ['arrays', 'can', 'be', 'mutated'];

//function to change one value
function changeArr(arr) {
    //changing the value on index[3]
    arr[3] = 'MUTATED';
}
//calling the function to our array
changeArr(concept);
//printing to check
console.log(concept);

function removeElement(newArr) {
    //this function will remove an element from the last value
    newArr.pop();
}
//calling the function on our array
removeElement(concept);
//printing to double check this
console.log(concept);

//Nested Arrays
//Arrays can store other arrays, when an array contains another array it is known as a nested array. 

const nestedArr = [[1],[2, 3]];
//To access a nested array we can use bracket notation with the index value, just like we did to access any other element
console.log(nestedArr[1]); //Output: 2,3
//We can chain or add on more bracket notation with index values
console.log(nestedArr[1][0]); // Output: 2


const numberClusters = [[1,2],[3,4],[5,6]];
//Assigning it the element 6
const target = numberClusters[2][1];
