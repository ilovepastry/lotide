const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2)) {
  console.log("Assertion Passed")
  } else {
    console.log("Assertion Failed")
  }
};
//assertion([1,2,3],[1,2,3])

const array1 = [];
const array2 = [];
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

function without (sourceArray, itemsToRemove){
let newArray = []
for (i = 0; i < sourceArray.length; i++) {
  let sourceArrayItem = sourceArray[i];
  if (!itemsToRemove.includes(sourceArrayItem)){
  console.log("item",sourceArrayItem);
  newArray.push(sourceArrayItem)
}
}
  console.log("array",newArray)
  return newArray;

}
/*Implement without which will return a subset of a given array, 
removing unwanted elements.

This function should take in a source array and a itemsToRemove array. 
It should return a new array with only those elements from source 
that are not present in the itemsToRemove array.

Here are a couple examples, but please don't limit your testing 
to just these scenarios:

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
Use assertArraysEqual to write test cases for various scenarios.

The tests can be written below the definition of your function.

It's okay for without to not function correctly when using 
nested arrays or arrays of objects. We will save this "deeper" problem for another day.

Write a test case to make sure that the original array is not modified.

Among your test cases, be sure to include an important test that is easy to overlook: 
The without function should be returning a new array and not modify the 
original array that is passed in. Let's write a test case to ensure this:*/

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);