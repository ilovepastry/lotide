const assertion = function assertArraysEqual(arr1, arr2){
  if (eqArrays(arr1, arr2)) {
  console.log("Assertion Passed")
  } else {
    console.log("Assertion Failed")
  }
};

const eqArrays = function(array1, array2){
  if(array1.length !== array2.length) {
    return false //These are not the same length
  }
 for(let i = 0; i < array1.length; i++) {
   if(array1[i] !== array2[i]) {
    return false //These are not the same array
   }
  }
  return true; //These match
 };

 const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
 const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array){
    if (!callback(item)) {
      results.push(item)
    } else {
      return results
    }
  }
 }
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



assertion(results1, [ 1, 2, 5, 7, 2 ])
/*[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]*/


/*Since takeUntil returns arrays, the best assertion function to use would be 
assertArraysEqual to compare its return value against an expected array.

Tips
Does your takeUntil function need to loop through the entire array once 
the callback returns a truthy value? If not, how can we make it stop?*/