//Slingly and doubly 

//block scope example

const logSkyColor = () => {
    let color = 'blue';
    console.log(color); //prints blue
}

logSkyColor(); //prints blue
//console.log(color); //Throws ReferenceError

//global scope example

let num = 50;
const logNum = () => {
    num = 100; // Take note of this line of code
    console.log(num);
}

logNum(); //prints 100
console.log(num); //prints 100

//scope pollution example
//Changing the existing variable star ('North Star'), to Sirius this is seen as bad practice!

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

//Practicing Good Scoping 

const logSkyColor2 = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
      let color = 'pink';
      console.log(color); // Prints "pink"
    }
    console.log(color); // Prints "blue"
  };
  logSkyColor2(); //calling the function
  
  //console.log(color); // throws a ReferenceError

  //Second attempt of good scoping practice 
  const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';

    if (region === 'Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }

    logVisibleLightWaves();
  }
  