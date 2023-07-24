/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /**
  * Time Complexity: O(N)
  * Space Complexity: O(1)
  */

  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};