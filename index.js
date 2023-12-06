function hasTargetSum(array, target) {
  // Write your algorithm here

  for(let i = 0; i < array.length; i ++){
    let indexOfAddend = array.indexOf(target - array[i])
    if( indexOfAddend >= 0 && indexOfAddend != i) {
      return true;
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here

  This has a quadratic time complexity but I'm not sure how to do it otherwise.
  I loop through the array once, then call indexOf within it.
  Both of these actions have a linear time complexity and since they're nested, that becomes n^2.
  Looking forward to learning quicker solutions.

  This has a linear space complexity because I create an indexOfAppend on every loop iteration.
  It is more readable than if I call indexOf twice, though.
*/

/* 
  iterate through array
  find indexOf target / current
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 2, 5], 4));
}

module.exports = hasTargetSum;
