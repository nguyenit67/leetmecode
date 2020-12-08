/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let cnt = 0;
  for (const x of nums) {
    cnt += String(x).length % 2 === 0;
  }
  return cnt;
};