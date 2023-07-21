/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
/**
* Time Complexity: O(N * K) K is the length of binary representation for each number ;
* Space Complexity: O(1);
*/

  // const result = [];

  // for (let i = 0; i < n + 1; i++) {
  //   let numberCount = 0;
  //   const numberToBinary = i.toString(2);
  
  //   for (let j = 0; j < numberToBinary.length; j++) {
  //     numberCount += parseInt(numberToBinary[j], 10);
  //   }

  //   result.push(numberCount);
  // }

  // return result;

  /**
  * Time Complexity: O(N)
  * Space Complexity: O(N)
  */

  const result = [0];

  for (let i = 1; i < n + 1; i++) {
    result[i] = result[Math.floor(i / 2)] + i % 2;
  }

  return result;
};