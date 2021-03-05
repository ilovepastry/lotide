/*Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the 
results of the callback function*/

const words = ["ground", "control", "to", "major", "tom"];

/*const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

/*const map = function() {
  const results = [];
  return results;
}*/

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

 const result = map([1, 2, 3, 4, 5, 6], x => x + 20);
 console.log(result)

 assertion(result, [ 11, 12, 13, 14, 15, 16 ])
 assertion(result, [ 21, 22, 23, 24, 25, 26 ])