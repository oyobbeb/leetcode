/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  /**
  * Time Complexity: O(N)
  * Space Complexity: O(1)


  for (let i = 0; i <= x; i++) {
    if (i * i === x) return i;
    if (i * i < x && (i + 1) * (i + 1) > x) return i;
  }
  */

  if (x === 0) return 0;
  if (x < 4) return 1;

  let left = 2;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const squaredValue = mid * mid;

    if (squaredValue === x) return mid;
    
    if (squaredValue < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};