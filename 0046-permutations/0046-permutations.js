/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // const result = [];
    // permuteRecursion(nums, [], Array(nums.length).fill(false),result);
    // return result;
    if (nums.length === 1) {
        return [nums.slice()];
    }

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const rest = nums.slice(0, i).concat(nums.slice(i+1));
        const permutations = permute(rest);

        for (const perm of permutations) {
            perm.push(n);
            result.push(perm);
        }
    }
    
    return result;
};

function permuteRecursion(nums, path, used, result) {
    if (path.length === nums.length) {
        return result.push(Array.from(path));
    }

    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;

        path.push(nums[i]);
        used[i] = true;
        permuteRecursion(nums, path, used, result);

        path.pop();
        used[i]= false;
    }
}