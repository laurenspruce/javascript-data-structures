//Functions as data
//We can assign functions to variables, and we can reassign them to new variables

//Bad readability of a function:
const announceThatIAmDoingImportantWork = () => {
    console.log("I am doing very important work!");
}

announceThatIAmDoingImportantWork();

//Can reassign this function with a shorter name!
const busy = announceThatIAmDoingImportantWork; //announce without parenthesis, want to assign the function itself, not the value it returns when invoked.
busy();

//busy is a variable which holds a reference to our original function. If we could look up the memory address in the memory of both busy and long function they would point to the same place... 
//Our new busy function can be invoked with parenthesis as if that was the name of our original function

//IN JS FUNCTIONS ARE FIRST CLASS OBJECTS = CAN HAVE PROPERTIES AND METHODS
//can use .length, .name, .string

//example:
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ( (2 + 2 != 4 )) {
            console.log('Something has gone very wrong :(');
        }
    }
}

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

//functions as parameters 
//parameter is a placeholder for the data that gets passed into a function
//functions can accept other functions as parameter, returns a function, or both!
//A higher order function is a function that either accepts functions as parameters, returns a function, or both!
//We call functions that get passed in as parameters call back functions
 //These get invoked during the execution of the higher-order function

 //with callback functions, we pass in the function itself by typing the function name without the parenthesis:
 const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
  }
   
  const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
  }
  
  higherOrderFunc(anotherFunc);

  //anonymous function (function without a name) that counts to 10. Anonymous functions can be arguments too
  higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++){
      console.log(i);
    }
  });

  const addTwo = num => {
    return num + 2;
  }

  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
  
    return checkA === checkB ? func(val) : 'inconsistent results'; 
  }
  
  console.log(checkConsistentOutput(addTwo, 8));