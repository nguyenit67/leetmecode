const make2dArray = (n, m, fillValue = 0) => {
  const arr2d = Array(n);
  for (let index = 0; index < n; index++) {
    arr2d[index] = Array(m).fill(fillValue);
  }
  return arr2d;
};

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
  const rowSums = Array(n).fill(0);
  const colSums = Array(m).fill(0);
  for (const [row, col] of indices) {
    rowSums[row]++;
    colSums[col]++;
  }

  let cnt = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      cnt += (rowSums[row] + colSums[col]) % 2;
    }
  }
  return cnt;
};
