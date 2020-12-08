/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let result = 0;
  const n = mat.length;
  for (let i = 0; i < n; i++) {
    result += mat[i][i] + mat[i][n - i - 1];
  }
  if (n % 2) {
    result -= mat[(n - 1) >> 1][(n - 1) >> 1];
  }
  return result;
};
