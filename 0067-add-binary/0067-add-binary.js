/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let carry = 0;
    let index = 0;

    while (index < Math.max(a.length, b.length)) {
        let x = 0;
        let y = 0;

        if (a.length - 1- index >= 0) {
            x = parseInt(a[a.length - 1 - index], 2);
        }

        if (b.length - 1 - index >= 0) {
            y = parseInt(b[b.length - 1 - index], 2);
        }

        let sum = carry + x + y;

        if (sum <= 1) {
            result = `${sum}${result}`;
            carry = 0;
        }

        if (sum > 1) {
            result = `${sum % 2}${result}`;
            carry = 1;
        }

        index++;
    }

    if (carry === 1) {
        result = `${carry}${result}`
    }

    return result;
};