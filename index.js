const myArray = [3, 8, 12, 4, 11, 7]

let targetInt = 10

function hasTargetSum(array, target){
  for(i = 0; i < array.length; i++){
    for (j = i+1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true
      }
    }
  }
  return false
}
hasTargetSum(myArray, targetInt)

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
 for each element of array
    iterate through remainder of elements of array to it and compare to targetVariable
      if sum of two elements match, return true
    if sum of two elements not a match, move to the next element of array and compare the remaining elements to it.

*/

/*
  Add written explanation of your solution here
  use for...of: returns true for first two elemnents that sum up to target sum.

  for every item in array, iterate through array adding each of the remainng element to it  and compare to the target sum
  if addition of two array elements is equal to target sum, return true else false
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