/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  // Time Complexity: O(N log N);
  // Space Complexity: O(1);

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0;
  let satisfiedChild = 0;

  for (const cookie of s) {
    if (cookie >= g[child]) {
      child++;
      satisfiedChild++;
    }
  }

  return satisfiedChild; 
};