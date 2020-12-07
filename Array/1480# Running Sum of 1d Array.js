/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let t = 0;
  return nums.map(x => t += x);
};