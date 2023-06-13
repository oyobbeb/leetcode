/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length < 3 && s[0] !== s[1]) return 1;
    if (s.length < 3) return s.length; 

    const obj = {};
    let count = 0;
    let isOddNumber = false;

    for (let i = 0; i < s.length; i++) {
        const string = s[i];

        if (obj[string]) {
            obj[string]++;
            continue;
        }

        obj[string] = 1;
    }

    for (const key in obj) {
        if (obj[key] % 2 !== 0) {
            count += obj[key] - 1;
            isOddNumber = true;
        }

        if (obj[key] % 2 === 0) {
            count += obj[key];
        }
    }

    console.log(count);

    return isOddNumber ? count + 1 : count;
};