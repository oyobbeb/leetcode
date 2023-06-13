/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};
    let majorNumber = null;
    let majorCount = 0;

    for (const item of nums) {
        obj[item] ? obj[item]++ : obj[item] = 1;
    }

    for (const key in obj) {
        if (obj[key] > majorCount) {
            majorNumber = key;
            majorCount = obj[key];
        }
    }

    return majorNumber;
};