/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];
  for (let iLoop = 0; iLoop < nums.length / 2; iLoop++) {
    const val = nums[2 * iLoop + 1];
    let freq = nums[2 * iLoop];
    while (freq--) {
      result.push(val);
    }
  }
  return result;
};
