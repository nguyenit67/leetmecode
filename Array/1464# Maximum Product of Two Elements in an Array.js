/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const [secondMaxNum, maxNum] = sortedNums.slice(-2);
  return (maxNum - 1) * (secondMaxNum - 1);
};
