const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"😍Assertion Passed: "  ${actual} +  " === " + expected`);
  } else {
    console.log(`"Assertion Failed: "  + ${actual} +  " !== " + expected`);
  }
};

  const countLetters = function(string) {
    let result = {};
    for (let char of string) {
      if (result[char] === undefined) {
        result[char] = 1;
      } else {
        result[char]++;
      }
    }
    return result;
  };
  
  console.log(countLetters("Lighthouse"));
  


