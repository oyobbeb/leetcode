/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
  // let count = 0;

  // for (let i = 0; i < nums.length - 2; i++) {
  //   for (let j = i + 1; j < nums.length - 1; j++) {
  //     for (let k = j + 1; k < nums.length; k++) {
  //       if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k]) {
  //         count++;
  //       }
  //     }
  //   }
  // }

  // return count;

  let count = 0;
  let prev = 0;
  let next = nums.length;

  const frequencies = nums.reduce((count, currentValue) => {
    return (
      count[currentValue] ? count[currentValue]++ : (count[currentValue] = 1),
      count
    );
  }, {});

  for (const value of Object.values(frequencies)) {
    next -= value;
    count += (prev * value * next);
    prev += value;
  }

  return count;
};