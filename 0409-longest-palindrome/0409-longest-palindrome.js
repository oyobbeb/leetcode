/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = 0;
    const set = new Set();
    
    for (let i = 0; i < s.length; i++) {
        const string = s[i];

        if (set.has(string)) {
            count += 2;
            set.delete(string);
            continue;
        }

        set.add(string);
    }

    return count + (set.size > 0 ? 1 : 0);
};