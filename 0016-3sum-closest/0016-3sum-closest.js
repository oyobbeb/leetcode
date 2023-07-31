/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let closestSum = nums[0] + nums[1] + nums[2];
  nums.sort((a,b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
        continue;
      }

      if (sum > target) {
        right--;
        continue;
      }

      return sum;
    }
  }

  return closestSum;
};