const letterPositions = function(sentence) {
  //sentence = "DDD"
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    // i = 0, sentence[0] = "D", results = {D: [0]}
    // i = 1, sentence[1] = "D", results = {D: [0,1]}
    // i = 2, sentence[2] = "D", results = {D: [0,1,2]}
  // sentence = "hello"


    // add key value pair to results //obj["key3"] = "value3";
    // array.push(element)
    //if ('color' in car) {


//}
    /* if key doesn't exist, initialize the key with the value of empty array, then add
    the index to the array */
    // else if key already exists, we add the index to the array
   
    const key = sentence[i]
    if (key in results) {
      results[key].push(i)
    } else {
      if (key !== ' ') {
        results[key] = [];
        results[key].push(i);
      }
      
    }
    
    

  }
  console.log(results);
  // logic to update results here
  return results;
};
  letterPositions("lighthouse in the house")
  //"lighthouse in the house"
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }



const assertion = function assertArraysEqual(arr1, arr2){
   if (eqArrays(arr1, arr2)) {
   console.log("Assertion Passed")
   } else {
     console.log("Assertion Failed")
   }
 };



// const eqArrays = function(array1, array2){
//   if(array1.length !== array2.length) {
//     return false //These are not the same length
//   }
//  for(let i = 0; i < array1.length; i++) {
//    if(array1[i] !== array2[i]) {
//     return false //These are not the same array
//    }
//   }
//   return true; //These match
//  }; 