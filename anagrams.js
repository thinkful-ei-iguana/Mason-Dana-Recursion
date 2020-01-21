function anagrams(str) {
  if (str.length === 1) {
    return str;
  }
  let anagram = str
    .split('')
    .map((char, index) => {
      const newstr =
        str.slice(0, index) +
        str.slice(
          index + 1,
          str.length
        );
      return char + anagrams(newstr);
    });
  console.log(anagram);
  return anagram;
}
console.log(anagrams('string'));

// function getAllPermutations(string) {
//   var results = [];

//   if (string.length === 1) {
//     results.push(string);
//     return results;
//   }

//   for (var i = 0; i < string.length; i++) {
//     var firstChar = string[i];
//     var charsLeft = string.substring(0, i) + string.substring(i + 1);
//     var innerPermutations = getAllPermutations(charsLeft);
//     for (var j = 0; j < innerPermutations.length; j++) {
//       results.push(firstChar + innerPermutations[j]);
//     }
//   }
//   return results;
// }
