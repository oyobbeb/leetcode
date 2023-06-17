/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];
  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
        continue;
      }

      mat[i][j] = Infinity;
    }
  }

  while (queue.length) {
    const [currentX, currentY, distance] = queue.shift();

    if (mat[currentX][currentY] > distance) {
      mat[currentX][currentY] = distance;
    }

    for (const [x, y] of directions) {
      const [nextX, nextY, nextValue] = [
        currentX + x,
        currentY + y,
        distance + 1,
      ];

      if (nextX < 0 || nextX > m - 1 || nextY < 0 || nextY > n - 1) continue;

      if (mat[nextX][nextY] === Infinity) {
        queue.push([nextX, nextY, nextValue]);
      }
    }
  }

  return mat;
};