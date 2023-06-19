/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const triangle = [];

  if (numRows === 0) return triangle;

  triangle.push([1]);

  for (let i = 1; i < numRows; i++) {
    const previousRow = triangle[i - 1];
    const newRow = [];

    newRow.push(1);

    for (let j = 1; j < previousRow.length; j++) {
      newRow.push(previousRow[j - 1] + previousRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
};