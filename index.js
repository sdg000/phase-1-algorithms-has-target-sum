// iterate through array, find difference btn target number and array elements. 
// as you iterate, store checked numbers in object (set), so we dont iterate over all elements again, move on to next number in array
// if current number being checked in array, has a complement in the object (numbers already checked ?), return true
// add the current item being checked back to the object .
// after iterating or checking all numbers in array, if no 2 complementing numbers are found, return false.
  
//Runtime O(n) (n steps for 1st loop, n step for finding complement of every item in array, n steps for 2nd 'if')
//Spacetime O(n) : array memory grows as size of array grows linearly. use js method - Set() to store keys
//

function hasTargetSum(array, target){
  const checkedNumbers = new Set()

  for (const item of array){
    const complement = target - item
    if (complement in checkedNumbers) return true
    checkedNumbers[item] = true  
  }
  return false
}


  
//hasTargetSum(myArray, targetInt)

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
  write function that take(array and targetsum) as param
  if sum of two elements of array is equal to targetsum variable, return true
  Example sampleArray = [1, 2, 3, 4] , targetsum = 6, return true. bcos, 2 + 4 = 6 
   
  return false if no two elements of array sum up to the targetsum variable.  
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

//solution 2:  finding element arrays that add up to target.
// runtime O(n^2)
// spacetime: array structure to be stored in memory, targetVariable to be stored in memory.
/*
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

*/



/*
// solution 3. substracting array elements from target, if difference is in array, return true. else return false

// O(n^2) runtime
function hasTargetSum(array, target){
  
  for(i = 0; i < array.length; i++){
    const difference = target - array[i]
    
    for (j = i+1; j < array.length; j++){
      if(array[j] === difference){
        return true
      } 
    }
  }
  return false
}
// Big O : Runtime => O(n^2) , n steps for first loop, another n steps for nested loop
// Big ) : Spacetime => O(n), only 1 array is being created and will require for storage.

*/