/*const array1 = [];
const array2 = [];
const eqArrays = function(array1, array2){
 if(array1.length !== array2.length) {
   return false //These are not the same length
 }

 const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2)) {
  console.log("Assertion Passed")
  } else {
    console.log("Assertion Failed")
  }
};*/

const middle = function(array) {
 if (array.length === 1 || array.length === 2) {
   return [];

 }
  if (array.length % 2 === 0) {
    let element1 = array[Math.round(array.length / 2 - 1)];
    let element2 = array[Math.round(array.length / 2)];
    return [element1, element2];
  } else {
    let element1 = array[Math.round(array.length / 2 - 1)];
    return [element1];
  }
}
    console.log(middle([11, 22, 33, 44]));
    console.log(middle [1]);
    console.log(middle [1, 2])
    console.log(middle([1, 2, 3, 4, 5]))
    console.log(middle([1, 2, 3, 4]))
    console.log(middle([1, 2, 3, 4, 5, 6]))
/*Implement middle which will take in an array and return the 
middle-most element(s) of the given array.

The middle function should return an array with only the middle element(s) 
of the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []

For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
Write test assertions for the various scenarios with middle

We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.

*/