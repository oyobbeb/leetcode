/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     const zeroValue = nums.splice(i, 1);
  //     nums.push(zeroValue);
  //     i--;
  //   }
  // }

  /**
  * Time Complexity: O(N)
  * Space Complexity: O(1)
  */

  // let startIndex = 0;
  // let switchIndex = startIndex + 1;

  // while (switchIndex <= nums.length - 1) {
  //   if (nums[startIndex] !== 0) {
  //     startIndex++;
  //     switchIndex++;
  //   } else if (nums[switchIndex] !== 0) {
  //     [nums[startIndex], nums[switchIndex]] = [nums[switchIndex], nums[startIndex]];
  //     startIndex++;
  //   }

  //   switchIndex++;
  // }

  let insertPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPosition++] = nums[i];
    }
  }

  for (let i = insertPosition; i < nums.length; i++) {
    nums[insertPosition++] = 0;
  }
};