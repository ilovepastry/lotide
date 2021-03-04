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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"😍Assertion Passed: "  ${actual} +  " === " + expected`);
  } else {
    console.log(`"Assertion Failed: "  + ${actual} +  " !== " + expected`);
  }
};

const assertion = function assertArraysEqual(arr1, arr2){
  if (eqArrays(arr1, arr2)) {
  console.log("Assertion Passed")
  } else {
    console.log("Assertion Failed")
  }
};
assertion([1,2,3],[1,2,3])
/*Implement assertArraysEqual which will take in two arrays and 
console.log an appropriate message to the console.

The message will be similar to that of assertEqual. 
In fact, you could refer to the code for 
assertEqual to help you implement this. Instead of doing a simple === check though, 
this assertion function will make use of your eqArrays function for array comparison.*/