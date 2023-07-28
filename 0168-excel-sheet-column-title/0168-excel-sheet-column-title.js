/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  /**
    Time complexity: O(log N)
    Space complexity: O(log N)
  */

  let answerString = '';

  while (columnNumber > 0) {
    const code = (columnNumber - 1) % 26;
    answerString = String.fromCharCode(code + 65) + answerString;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return answerString;
};