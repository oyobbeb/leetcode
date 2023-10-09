/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  /**
  * Time Complexity: O(n)
  * Space Complexity: O(1)
  
  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (firstIndex === -1) {
        firstIndex = i;
      }

      lastIndex = i;
    }
  }

  return [firstIndex, lastIndex];
  */

  /**
  * Time Complexity: O(log n)
  * Space Complexity: O(1)
  */
  const findIndex = (nums, target, isFirst = false) => {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === target) {
        index = mid;
        isFirst ? right = mid - 1 : left = mid + 1;
        continue;
      }

      if (nums[mid] < target) {
        left = mid + 1;
        continue;
      }

      right = mid - 1;
    }

    return index;
  }

  const firstIndex = findIndex(nums, target, true);
  const lastIndex = findIndex(nums, target);

  return [firstIndex, lastIndex];
};