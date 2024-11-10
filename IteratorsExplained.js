//.forEach method example
[1, 2, 3].forEach(function (item,index) {
    console.log(item, index);
  });

  //map
  const three = [1, 2, 3];
  const doubled = three.map(function (item) {
    return item * 2; 
  });
  console.log(doubled);

  //filter, checking against a condition if it's true or false
  const ints = [1, 2, 3];
  const evens = ints.filter(function (item) {
    return item % 2 === 0; //not even is !==
  });
  console.log(evens);

  //reduce method
  //DO SOMETHING, PASS RESULT TO NEXT ITERATION
  const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum);