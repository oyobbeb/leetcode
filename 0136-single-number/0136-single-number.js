/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
      continue;
    }

    map.set(num, 1);
  }

  for (const [key, value] of map) {
    if (value === 1) return key;
  }

  return null;
};