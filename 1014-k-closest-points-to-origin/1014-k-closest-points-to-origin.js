/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
  // time complexity: O(n log n);
  // space complexity: O(k);

  points.sort((a, b) => {
    const distanceA = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]));
    const distanceB = Math.sqrt((b[0] * b[0]) + (b[1] * b[1]));

    return distanceA - distanceB;
  });

  return points.slice(0, k);
};