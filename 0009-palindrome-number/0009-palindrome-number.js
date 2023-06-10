/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0;
    let copy = x;

    while (copy > 0) {
        const digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = ~~(copy / 10);
    }

    return reverse === x;
};