/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color, firstColor = image[sr][sc]) {
    if (firstColor === color) return image;
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
    if (firstColor !== image[sr][sc]) return;

    image[sr][sc] = color;

    floodFill(image, sr-1, sc, color, firstColor);
    floodFill(image, sr+1, sc, color, firstColor);
    floodFill(image, sr, sc-1, color, firstColor);
    floodFill(image, sr, sc+1, color, firstColor);

    return image;
};