/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const stringLength = s.length;
    const reversedString = s.split('').reverse().join('');

    if (reversedString === s) return s;

    for (let i = 0; i < stringLength; i++) {
        if (s.substring(0, stringLength - i) === reversedString.substring(i)) {
            return reversedString.substring(0, i) + s;
        }

    //    if (isPalindrome(reversedString.substring(i, stringLength))) {
    //     const reversedExtra = reversedString.substring(0, i);

    //     return reversedExtra + s;
    //    }
    }
};

function isPalindrome(string) {
    let start = 0;
    let end = string.length - 1;

    for (let i = 0; i < string.length / 2; i++) {
        if (string[start++] !== string[end--]) return false;
    }

    return true;
}