const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]);
    resultArray.push(input[i]);
    continue; // Skip the rest of the loop iteration
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
    resultArray.push(input[i]);
    continue; // Skip the rest of the loop iteration
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray);

const resultString = resultArray.join('').toUpperCase();
console.log(resultString);