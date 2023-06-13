/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = 0;
    let hash = {};
    
    for (const char of s) {
        hash[char] ? hash[char]++ : hash[char] = 1;

        if (hash[char] % 2 === 0) {
            count += 2;
        }
    }

    return s.length > count ? count + 1 : count;
};