/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  /**
  * Time Complexity: O(M + N)
  * Space Complexity: O(1)
  */

  for (let i = m + n - 1; i >= 0; i--) {
    if (n === 0) return;
    
    let currentValue;

    if (nums1[m - 1] >= nums2[n - 1]) {
      currentValue = nums1[m - 1];
      m--;
    } else {
      currentValue = nums2[n - 1];
      n--;
    }
    
    nums1[i] = currentValue;
  }
};