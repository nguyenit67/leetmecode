/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const idNums = nums.map((value, index) => ({ value, index }));
  // sort inplace
  idNums.sort((a, b) => a.value - b.value);
  const result = Array.from(nums).fill(0);
  let smallerValueId = 0;

  // idNums.reduce((prev, cur, curIndex) => {
  //   if (prev.value < cur.value) {
  //     smallerValueId = curIndex;
  //   }
  //   result[cur.index] = smallerValueId;
  //   return cur;
  // });
  for (let iLoop = 1; iLoop < idNums.length; iLoop++) {
    const curIdNum = idNums[iLoop];
    if (idNums[iLoop - 1].value < curIdNum.value) {
      smallerValueId = iLoop;
    }
    result[curIdNum.index] = smallerValueId;
  }
  return result;
};
