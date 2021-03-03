// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"😍Assertion Passed: "  ${actual} +  " === " + expected`);
  } else {
    console.log(`"Assertion Failed: "  + ${actual} +  " !== " + expected`);
  }
};
const tail = function(array) {
  console.log(array.slice(1));
  
};
tail([0, 1, 2, 3, 4, 5, 6]);
tail([0]); //An array with only one element should yield an empty array for its tail
tail([]); //An empty array should yield an empty array for its tail
//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

