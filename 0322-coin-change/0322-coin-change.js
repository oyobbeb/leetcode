/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // coins[i]로 amount + 1까지를 순서대로 실행하며 몇개가 필요한지 파악하기
  // time complexity: O(N * M); N === amount, M === coins.length
  // space complexity: O(N);
  // Can approacth to DP and BFS with Hash

  const coinMemo = [0].concat(new Array(amount).fill(amount + 1));

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      coinMemo[i] = Math.min(coinMemo[i], coinMemo[i - coin] + 1);
    }
  }

  return coinMemo[amount] < amount + 1 ? coinMemo[amount] : -1;
};