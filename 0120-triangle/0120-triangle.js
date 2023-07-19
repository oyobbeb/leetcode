/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
/**
* Time Complexity: O(2^N)
* Space Complexity: O(N)

return recursion(0, 0);

function recursion(row, index) {
  if (row >= triangle.length) return 0;

  return triangle[row][index] + Math.min(
    recursion(row + 1, index),
    recursion(row + 1, index + 1)
  );
}


* Time Complexity: O(N^2) === (N * (N + 1)) / 2 
* Space Complexity: O(N) N is numbers of rows
*/

  const memo = [];

  for (let row = triangle.length - 1; row >= 0; row--) {
    for (let index = 0; index < triangle[row].length; index++) {
      memo[index] = triangle[row][index] + Math.min(memo[index] || 0, memo[index + 1] || 0);
    }
  }

  return memo[0];


};