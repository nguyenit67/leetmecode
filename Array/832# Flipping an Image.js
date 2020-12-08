/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  const copyA = JSON.parse(JSON.stringify(A));
  const n = A.length;

  for (let row = 0; row < copyA.length; row++) {
    const rowLen = copyA.length;
    
    const originRow = copyA[row];
    copyA[row] = 
      copyA.map((_, index) =>  originRow[rowLen - index - 1])
           .map(value => 1 - value);
  }
  return copyA;
};
