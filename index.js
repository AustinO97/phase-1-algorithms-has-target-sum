function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target)
      return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n + 2) => O(n)
*/

/* 
  Add your pseudocode here
  for every number in the array
    check to see if it matches the target number
  for every other number in the array
    check to see if it matches the target number
    return true if it matches
    return false if it doesn't
*/

/*
  Add written explanation of your solution here
  make a function that adds two numbers in an array
  returns true if they match the target number
  returns false if they don't

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
}

module.exports = hasTargetSum;
