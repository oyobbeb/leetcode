/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let divideCount = n / 2;
    let count = 0;

    while (divideCount <= n) {
        const copyDivide = divideCount;
        const combinationD = n - divideCount;

        count += factorial(copyDivide) / (factorial(combinationD) * factorial(copyDivide - combinationD));

        divideCount += 1;
    }

    return count;
};

function factorial(num) {
    if (num <= 1) return 1;

    return num * factorial(num - 1);
}