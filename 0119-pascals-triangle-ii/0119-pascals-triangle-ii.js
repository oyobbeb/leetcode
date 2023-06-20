/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    
    const row = [1];

    const previousRow = getRow(rowIndex - 1);

    for (let i = 0; i < previousRow.length - 1; i++) {
      row.push(previousRow[i] + previousRow[i + 1]);
    }

    row.push(1);
  
    return row;
};