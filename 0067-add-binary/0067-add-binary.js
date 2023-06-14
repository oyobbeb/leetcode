/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let carry = 0;
    let index = 0;

    while (a[index] || b[index]) {
        const sum = Number(a[a.length - index - 1] || 0) + Number(b[b.length - 1 - index] || 0) + carry;

        if (sum > 1) {
            result = `${sum === 2 ? "0" : "1"}${result}`;
            carry = 1;
        }


        if (sum <= 1) {
            result = `${sum}${result}`;
            carry = 0;
        }


        index++;
    }

    return `${carry || ""}${result}`;
};