/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // Time Complexity: O(N);
  // Space Complexity: O(1);

  if (flowerbed[0] === 0 && (flowerbed[1] === 0 || flowerbed.length === 1)) {
    flowerbed[0] = 1;
    n--;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
};
