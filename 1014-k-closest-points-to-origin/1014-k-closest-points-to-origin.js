/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const getLength = function([a, b]) {
    return (a * a) + (b * b);
}

const kClosest = function(points, k) {
  return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, k);
};