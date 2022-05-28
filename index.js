// function isPalindrome(word) {
//   for (let i = 0; 1 < word.length / 2; i++) {
//     //check each letter to the corresponding letter from the end
//     const j = word.length - 1 - i;
//     // const startChar = word[i]
//     // const endChar = word[j]
//     //if any letters dont match return false
//     if (word[i] !== word[j]) {
//       return false
//     }
//     return true
//   }
// }


function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}









/*
  Add your pseudocode here
* if the first letter snd the last letter are the same, and the second and second to last letter are the same etc etc return true
* iterate from the beginnging to the middle
check each letter to the corresponding letter from the end
if any letters dont match, return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: a");
  console.log("=>", isPalindrome("true"));
}

module.exports = isPalindrome;
