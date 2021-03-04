const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"😍Assertion Passed: "  ${actual} +  " === " + expected`);
  } else {
    console.log(`"Assertion Failed: "  + ${actual} +  " !== " + expected`);
  }
};
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
//console.log(eqArrays(array1, array2));
//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
let actual = eqArrays([],[]);
assertEqual(actual, true);
//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

/*Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
Use assertEqual to write test cases for various scenarios.

The tests can be written below the definition of your function. Here's one example to get you started.

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
Please write out the rest of the assertions.

It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day.*/

