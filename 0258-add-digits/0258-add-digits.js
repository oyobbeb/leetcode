/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num.toString().length === 1) return num;

  num = num.toString();

  let result = 0;
  
  for (let i = 0; i < num.length; i++) {
    result += Number(num[i]);
  }

  return addDigits(result);
};