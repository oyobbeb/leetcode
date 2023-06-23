/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const row = new Array(n).fill(1);
    const matrix = new Array(m).fill(row);

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
      }
    }

    return matrix[m - 1][n - 1];
};