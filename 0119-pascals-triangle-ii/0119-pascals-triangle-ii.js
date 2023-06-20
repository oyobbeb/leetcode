/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const triangle = [];

    if (rowIndex === 0) return [1];

    triangle.push([1]);

    for (let i = 1; i < rowIndex + 1; i++) {
      const previousRow = triangle[i - 1];
      const row = [];

      row.push(1);

      for (let j = 1; j < previousRow.length; j++) {
        row.push(previousRow[j - 1] + previousRow[j]);
      }

      row.push(1);
      triangle.push(row);
    }

    return triangle[rowIndex];
};