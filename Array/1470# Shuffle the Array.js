/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  return nums.map((_, i) => nums[ (i >> 1) + ((i % 2) ? n : 0) ] );
};
