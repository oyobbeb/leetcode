/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const result = {};

    for (const item of nums) {
        if (result[item]) return true;

        result[item] = true;
    }

    return false;
};