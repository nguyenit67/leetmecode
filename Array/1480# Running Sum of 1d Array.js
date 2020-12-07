/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const result = Array.from(nums);
  for (let i = 1; i < result.length; i++) {
    const result[i] = result[i] + result[i-1];
  }

  return result;
};