/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  /**
  * Time Complexity: O(n) n is number of digits
  * Space Complexity: O(n)
  */
  // if (num.toString().length === 1) return num;

  // num = num.toString();

  // let result = 0;
  
  // for (let i = 0; i < num.length; i++) {
  //   result += Number(num[i]);
  // }

  // return addDigits(result);

  if (num.toString().length < 2) return num;

  num = [...num.toString()].reduce((acc, current) => acc + Number(current), 0);
  return addDigits(num);
};